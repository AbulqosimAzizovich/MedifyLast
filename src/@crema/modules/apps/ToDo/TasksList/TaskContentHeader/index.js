import React from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import SelectTasksDropdown from './SelectTasksDropdown';
import CheckedTasksActions from './CheckedTasksActions';
import ViewSelectButtons from './ViewSelectButtons';
import {Checkbox} from 'antd';
import {
  StyledContentHeader,
  StyledTodoHeaderCheckboxView,
  StyledTodoHeaderPagination,
  StyledTodoSearch,
} from '../index.styled';

const TaskContentHeader = (props) => {
  const {
    taskLists,
    checkedTasks,
    setCheckedTasks,
    filterText,
    onSetFilterText,
    onChange,
    page,
    pageView,
    onChangePageView,
    onUpdateTasks,
    setData,
  } = props;

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const taskIds = taskLists?.map((task) => task.id);
      setCheckedTasks(taskIds);
    } else {
      setCheckedTasks([]);
    }
  };

  const onSelectTasks = (value) => {
    switch (value) {
      case 0:
        setCheckedTasks(taskLists?.map((task) => task.id));
        break;
      case 1:
        setCheckedTasks([]);
        break;

      case 2:
        setCheckedTasks(
          taskLists?.filter((task) => task.isStarred).map((task) => task.id),
        );
        break;

      case 3:
        setCheckedTasks(
          taskLists
            ?.filter((task) => task.hasAttachments)
            .map((task) => task.id),
        );
        break;

      default:
        setCheckedTasks([]);
    }
  };

  const {messages} = useIntl();

  return (
    <>
      <StyledContentHeader>
        <StyledTodoHeaderCheckboxView>
          <Checkbox
            color='primary'
            indeterminate={
              checkedTasks?.length > 0 &&
              checkedTasks?.length < taskLists?.length
            }
            checked={
              taskLists?.length > 0 && checkedTasks.length === taskLists?.length
            }
            onChange={onHandleMasterCheckbox}
          />
        </StyledTodoHeaderCheckboxView>

        <SelectTasksDropdown onSelectTasks={onSelectTasks} />

        <StyledTodoHeaderCheckboxView>
          {checkedTasks.length > 0 ? (
            <CheckedTasksActions
              checkedTasks={checkedTasks}
              setCheckedTasks={setCheckedTasks}
              onUpdateTasks={onUpdateTasks}
              setData={setData}
              page={page}
            />
          ) : null}
        </StyledTodoHeaderCheckboxView>

        <StyledTodoSearch
          placeholder={messages['common.searchHere']}
          value={filterText}
          onChange={(event) => onSetFilterText(event.target.value)}
        />
        <ViewSelectButtons
          pageView={pageView}
          onChangePageView={onChangePageView}
        />
      </StyledContentHeader>
      {pageView === 'list' && taskLists?.length > 0 ? (
        <StyledTodoHeaderPagination
          count={taskLists?.count}
          page={page}
          onChange={onChange}
        />
      ) : null}
    </>
  );
};

export default TaskContentHeader;

TaskContentHeader.defaultProps = {
  checkedTasks: [],
  filterText: '',
  page: 0,
};

TaskContentHeader.propTypes = {
  taskLists: PropTypes.array,
  checkedTasks: PropTypes.array,
  setCheckedTasks: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  page: PropTypes.number,
  onChange: PropTypes.func,
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
  onUpdateTasks: PropTypes.func,
  setData: PropTypes.func,
};
