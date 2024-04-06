import React from 'react';
import {StyledTable} from './index.styled.js';
import {getColumns} from './columns';
import PropTypes from 'prop-types';

const PricingTable = ({billingFormat, tableData}) => {
  return (
    <StyledTable
      columns={getColumns(billingFormat)}
      dataSource={tableData}
      pagination={false}
      ellipsis={true}
    />
  );
};

PricingTable.propTypes = {
  billingFormat: PropTypes.string,
  tableData: PropTypes.array,
};
export default PricingTable;
