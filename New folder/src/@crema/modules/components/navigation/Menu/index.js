import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import MenuThemes from './MenuThemes';
import MenuThemesSource from '!!raw-loader!./MenuThemes';
import NavigationTop from './NavigationTop';
import NavigationTopSource from '!!raw-loader!./NavigationTop';
import CollapsedMenu from './CollapsedMenu';
import CollapsedMenuSource from '!!raw-loader!./CollapsedMenu';
import CurrentSubMenu from './CurrentSubMenu';
import CurrentSubMenuSource from '!!raw-loader!./CurrentSubMenu';
import VerticalMenu from './VerticalMenu';
import VerticalMenuSource from '!!raw-loader!./VerticalMenu';
import SwitchMenu from './SwitchMenu';
import SwitchMenuSource from '!!raw-loader!./SwitchMenu';
import InlineMenu from './InlineMenu';
import InlineMenuSource from '!!raw-loader!./InlineMenu';

class index extends Component {
  render() {
    return (
      <>
        <AppComponentHeader
          title='Menu'
          refUrl='https://ant.design/components/menu/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='menu-a'>
            <AppComponentCard
              title='Navigation Top'
              description='Horizontal top navigation menu.'
              component={NavigationTop}
              source={NavigationTopSource}
            />
          </Col>
          <Col xs={24} lg={12} key='menu-b'>
            <AppComponentCard
              title='Vertical Menu'
              description='Vertical menu with inline submenus.'
              component={VerticalMenu}
              source={VerticalMenuSource}
            />
          </Col>
          <Col xs={24} lg={12} key='menu-c'>
            <AppComponentCard
              title='Menu Themes'
              description='There are two built-in themes: light and dark. The default value is light.'
              component={MenuThemes}
              source={MenuThemesSource}
            />
          </Col>
          <Col xs={24} lg={12} key='menu-d'>
            <AppComponentCard
              title='Collapsed Menu'
              description='Inline menu could be isCollapsed.'
              component={CollapsedMenu}
              source={CollapsedMenuSource}
            />
          </Col>
          <Col xs={24} lg={12} key='menu-e'>
            <AppComponentCard
              title='Current Sub Menu'
              description='Click the menu and you will see that all the other menus gets isCollapsed to keep the entire menu compact.'
              component={CurrentSubMenu}
              source={CurrentSubMenuSource}
            />
          </Col>
          <Col xs={24} lg={12} key='menu-f'>
            <AppComponentCard
              title='Switch Menu'
              description='Show the dynamic switching mode (between inline and vertical).'
              component={SwitchMenu}
              source={SwitchMenuSource}
            />
          </Col>
          <Col xs={24} lg={12} key='menu-g'>
            <AppComponentCard
              title='Inline Menu'
              description='Vertical menu with inline submenus.'
              component={InlineMenu}
              source={InlineMenuSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default index;
