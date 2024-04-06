import {Link} from 'react-router-dom';
import React from 'react';
import {useIntl} from 'react-intl';
import {allowMultiLanguage} from '@crema/constants/AppConst';

const MenuItemChildren = (item) => {
  const {icon, messageId, path} = item;
  const {messages} = useIntl();

  if (path && path.includes('/'))
    return {
      key: item.id,
      icon:
        icon &&
        (React.isValidElement(icon) ? (
          <span id={path} className='ant-menu-item-icon'>
            {icon}
          </span>
        ) : (
          <icon id={path} className='ant-menu-item-icon' />
        )),
      label: (
        <Link to={path} id={path}>
          <span data-testid={messageId.toLowerCase + '-nav'}>
            {allowMultiLanguage ? messages[messageId] : item.title}
          </span>
        </Link>
      ),
    };
  else {
    return {
      key: item.id,
      icon:
        icon &&
        (React.isValidElement(icon) ? (
          <span id={path} className='ant-menu-item-icon'>
            {icon}
          </span>
        ) : (
          <icon id={path} className='ant-menu-item-icon' />
        )),
      label: (
        <span id={path} data-testid={messageId.toLowerCase + '-nav'}>
          {allowMultiLanguage ? messages[messageId] : item.title}
        </span>
      ),
    };
  }
};

const renderMenuItem = (item) => {
  return item.type === 'collapse'
    ? {
        key: item.id,
        ...MenuItemChildren(item),
        children: item.children.map((item) => renderMenuItem(item)),
        type: 'collapse',
      }
    : {
        key: item.id,
        ...MenuItemChildren(item),
      };
};

const renderMenu = (item) => {
  return item.type === 'group'
    ? {
        key: item.path ? item.path : item.id,
        id: item.url,
        ...MenuItemChildren(item),
        children: item.children.map((item) => renderMenuItem(item)),
        type: 'group',
      }
    : {
        key: item.id,
        id: item.url,
        exact: item.exact,
        ...MenuItemChildren(item),
      };
};

export const getRouteMenus = (routesConfig) => {
  return routesConfig.map((route) => renderMenu(route));
};
