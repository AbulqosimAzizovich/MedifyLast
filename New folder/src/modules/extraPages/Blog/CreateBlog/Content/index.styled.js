import ReactQuill from 'react-quill';
import styled from 'styled-components';

export const StyledTextPrimary = styled.span`
  font-weight: ${({theme}) => theme.font.weight.medium};
  color: ${({theme}) => theme.palette.primary.main};
`;

export const StyledText = styled.p`
  margin-top: 12px;
  font-size: 16px;
`;

export const StyledTextMb = styled.p`
  margin-top: 12px;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const StyledDetailTextarea = styled(ReactQuill)`
  width: 100%;

  & .ql-toolbar.ql-snow {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  & .ql-container {
    height: 110px !important;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const StyledThumbsContainer = styled.aside`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: 'wrap';
  margin-top: 16;
`;

export const StyledThumb = styled.div`
  display: inline-flex;
  border-radius: 0px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

export const StyledThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
  margin: auto;
  height: inherit;
`;

export const StyledUploadWrapper = styled.div`
  cursor: pointer;
  border: 2px dashed ${({theme}) => theme.palette.dividerColor};
  border-radius: 0px;
  padding: 10px;
  text-align: center;
  margin-bottom: 16px;
  color: ${({theme}) => theme.palette.text.secondary};
  background-color: ${({theme}) => theme.palette.background.default};
`;
