import React from 'react';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import CheckBox from './CheckBox';
import ContactCheckedActions from './ContactCheckedActions';
import ViewSelectButtons from './ViewSelectButtons';
import {
  StyledContactContentHeader,
  StyledContactHeaderPagination,
  StyledContactSearch,
} from '../index.styled';

const ContactHeader = (props) => {
  const {
    checkedContacts,
    setCheckedContacts,
    filterText,
    onSetFilterText,
    onChangePageView,
    onSelectContactsForDelete,
    onUpdateContacts,
    page,
    apiData,
    onChange,
    pageView,
  } = props;

  const {messages} = useIntl();

  return (
    <>
      <StyledContactContentHeader>
        <CheckBox
          contactList={apiData?.data || []}
          checkedContacts={checkedContacts}
          setCheckedContacts={setCheckedContacts}
        />

        {checkedContacts.length > 0 ? (
          <ContactCheckedActions
            onSelectContactsForDelete={onSelectContactsForDelete}
            checkedContacts={checkedContacts}
            onUpdateContacts={onUpdateContacts}
            setCheckedContacts={setCheckedContacts}
          />
        ) : null}

        <StyledContactSearch
          value={filterText}
          onChange={(event) => onSetFilterText(event.target.value)}
          placeholder={messages['common.searchHere']}
        />
        <ViewSelectButtons
          pageView={pageView}
          onChangePageView={onChangePageView}
        />
      </StyledContactContentHeader>
      {apiData?.data?.length > 0 ? (
        <StyledContactHeaderPagination
          count={apiData?.count}
          page={page}
          onChange={onChange}
        />
      ) : null}
    </>
  );
};

export default ContactHeader;

ContactHeader.defaultProps = {
  checkedContacts: [],
  filterText: '',
  page: 0,
};

ContactHeader.propTypes = {
  checkedContacts: PropTypes.array,
  setCheckedContacts: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  page: PropTypes.number,
  apiData: PropTypes.any,
  onChange: PropTypes.func,
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
  onUpdateContacts: PropTypes.func,
};
