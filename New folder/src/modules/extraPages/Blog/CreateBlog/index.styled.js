import ReactQuill from 'react-quill';
import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.palette.text.primary};
  font-size: 16px;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.xs}px) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}px) {
    margin-bottom: 16px;
  }
`;

export const StyledTextarea = styled(ReactQuill)`
  width: 100%;

  & .ql-toolbar.ql-snow {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  & .ql-container {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const StyledFormWrapper = styled.div`
  .ant-select,
  .ant-input-number,
  .ant-input-number-group-wrapper {
    width: 100%;
  }

  .notification {
    margin-left: 10px;
  }

  .ant-card,
  .mb-20,
  .ant-select {
    margin-bottom: 20px;
  }

  .mr-10 {
    margin-right: 10px;
  }
`;

export const StyledText = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 16px;
`;
