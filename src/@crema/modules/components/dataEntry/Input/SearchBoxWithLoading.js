import {Input} from 'antd';
import React from 'react';

const {Search} = Input;

const SearchBoxWithLoading = () => {
  return (
    <>
      <Search placeholder='input search loading default' loading />
      <br />
      <br />
      <Search
        placeholder='input search loading with enterButton'
        loading
        enterButton
      />
      <br />
      <br />
      <Search
        placeholder='input search text'
        enterButton='Search'
        size='large'
        loading
      />
    </>
  );
};

export default SearchBoxWithLoading;
