import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from 'antd';
import {StyledContactHeaderCheckboxView} from '../index.styled';

const CheckBox = ({checkedContacts, contactList, setCheckedContacts}) => {
  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const contactIds = contactList.map((contact) => contact.id);
      setCheckedContacts(contactIds);
    } else {
      setCheckedContacts([]);
    }
  };

  return (
    <StyledContactHeaderCheckboxView>
      <Checkbox
        color='primary'
        indeterminate={
          checkedContacts.length > 0 &&
          checkedContacts.length < contactList.length
        }
        checked={
          contactList.length > 0 &&
          checkedContacts.length === contactList.length
        }
        onChange={onHandleMasterCheckbox}
      />
    </StyledContactHeaderCheckboxView>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  checkedContacts: PropTypes.array.isRequired,
  setCheckedContacts: PropTypes.func,
  contactList: PropTypes.array,
};
