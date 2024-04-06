import React from 'react';
import PropTypes from 'prop-types';
import CheckedMailActions from './CheckedMailActions';
import MoreOptions from './MoreOptions';
import {useIntl} from 'react-intl';
import {
  StyledMailContentHeader,
  StyledMailContentHeaderCheckbox,
  StyledMailContentHeaderPagination,
  StyledMailSearch,
} from '../index.styled';
import './styles.css';

const MailContentHeader = (props) => {
  const {
    path,
    checkedMails,
    setCheckedMails,
    page,
    onChange,
    mailList,
    totalMails,
    filterText,
    onSetFilterText,
    setData,
  } = props;

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const mailIds = mailList.map((mail) => mail.id);
      setCheckedMails(mailIds);
    } else {
      setCheckedMails([]);
    }
  };

  const {messages} = useIntl();

  return (
    <>
      <StyledMailContentHeader>
        <StyledMailContentHeaderCheckbox
          color='primary'
          indeterminate={
            checkedMails?.length > 0 && checkedMails?.length < mailList?.length
          }
          checked={
            mailList?.length > 0 && checkedMails?.length === mailList?.length
          }
          onChange={onHandleMasterCheckbox}
        />

        <StyledMailSearch
          placeholder={messages['common.searchHere']}
          value={filterText}
          className='search__'
          onChange={(event) => onSetFilterText(event.target.value)}
        />

        {checkedMails.length > 0 ? (
          <CheckedMailActions
            checkedMails={checkedMails}
            setCheckedMails={setCheckedMails}
            setData={setData}
          />
        ) : null}

        <MoreOptions
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          path={path}
          mailList={mailList || []}
          setData={setData}
        />
      </StyledMailContentHeader>
      {mailList?.length > 0 ? (
        <StyledMailContentHeaderPagination
          count={totalMails}
          page={page}
          onChange={onChange}
        />
      ) : null}
    </>
  );
};

export default MailContentHeader;

MailContentHeader.defaultProps = {
  checkedMails: [],
  page: 0,
};

MailContentHeader.propTypes = {
  checkedMails: PropTypes.array,
  setCheckedMails: PropTypes.func,
  page: PropTypes.number,
  onChange: PropTypes.func,
  onSetFilterText: PropTypes.func,
  setData: PropTypes.func,
  path: PropTypes.any,
  filterText: PropTypes.string,
  totalMails: PropTypes.any,
  mailList: PropTypes.any,
};
