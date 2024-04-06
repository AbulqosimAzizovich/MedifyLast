import styled from 'styled-components';
import {Form} from 'antd';

export const StyledFormWrapper = styled(Form)`
  .ant-select,
  .ant-input-number {
    width: 100%;
  }

  .notification {
    margin-left: 10px;
  }
`;

export const StyledListingStatus = styled.div`
  padding: 3px 5px;
  border-radius: 0px;
  text-align: center;
`;
