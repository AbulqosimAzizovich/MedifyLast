import React from 'react';
import {Select} from 'antd';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {StyledTodoSelectBox} from '../index.styled';
import {putDataApi} from '@crema/hooks/APIHooks';
import {useInfoViewActionsContext} from '@crema/context/AppContextProvider/InfoViewContextProvider';
import {useCalendarContext} from '../../../context/CalendarContextProvider';

const TaskStatus = ({selectedTask, onUpdateSelectedTask}) => {
  const {statusList} = useCalendarContext();
  const infoViewActionsContext = useInfoViewActionsContext();

  const onChangeStatus = (value) => {
    selectedTask.status = value;
    putDataApi('/api/calendar/task/', infoViewActionsContext, {
      task: selectedTask,
    })
      .then((data) => {
        onUpdateSelectedTask(data.task);
        infoViewActionsContext.showMessage('Task Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const {messages} = useIntl();

  return (
    <StyledTodoSelectBox
      onChange={(value) => onChangeStatus(value)}
      value={selectedTask?.status}
      placeholder={messages['common.status']}
    >
      {statusList.map((status) => {
        return (
          <Select.Option key={status.type} value={status.id}>
            {status.name}
          </Select.Option>
        );
      })}
    </StyledTodoSelectBox>
  );
};

export default TaskStatus;

TaskStatus.propTypes = {
  selectedTask: PropTypes.object.isRequired,
  onUpdateSelectedTask: PropTypes.func,
};
