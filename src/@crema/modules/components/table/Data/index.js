import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';

import FixHeader from './FixHeader';
import FixHeaderSource from '!!raw-loader!./FixHeader';
import GroupTable from './GroupTable';
import GroupTableSource from '!!raw-loader!./GroupTable';
import Operation from './Operation';
import OperationSource from '!!raw-loader!./Operation';
import Dynamic from './Dynamic';
import DynamicSource from '!!raw-loader!./Dynamic';
import CustomSelection from './CustomSelection';
import CustomSelectionSource from '!!raw-loader!./CustomSelection';
import ResetFilter from './ResetFilter';
import ResetFilterSource from '!!raw-loader!./ResetFilter';
import ExpandableRow from './ExpandableRow';
import ExpandableRowSource from '!!raw-loader!./ExpandableRow';
import TreeData from './TreeData';
import TreeDataSource from '!!raw-loader!./TreeData';
import FixColumn from './FixColumn';
import FixColumnSource from '!!raw-loader!./FixColumn';
import FixedColumnsAndHeader from './FixedColumnsAndHeader';
import FixedColumnsAndHeaderSource from '!!raw-loader!./FixedColumnsAndHeader';
import EdiTableCells from './EdiTableCells';
import EdiTableCellsSource from '!!raw-loader!./EdiTableCells';
import EdiTableRow from './EdiTableRow';
import EdiTableRowSource from '!!raw-loader!./EdiTableRow';
import NestedTables from './NestedTables';
import NestedTablesSource from '!!raw-loader!./NestedTables';
import DragSorting from './DragSorting';
import DragSortingSource from '!!raw-loader!./DragSorting';
import EllipsisColumn from './EllipsisColumn';
import EllipsisColumnSource from '!!raw-loader!./EllipsisColumn';
import EllipsisColumnCustomTooltip from './EllipsisColumnCustomTooltip';
import EllipsisColumnCustomTooltipSource from '!!raw-loader!./EllipsisColumnCustomTooltip';
import Summary from './Summary';
import SummarySource from '!!raw-loader!./Summary';
// import VirtualList from './VirtualList';
// import VirtualListSource from '!!raw-loader!./VirtualList';
import Responsive from './Responsive';
import ResponsiveSource from '!!raw-loader!./Responsive';
import FixedHeaderAndScroll from './FixedHeaderAndScroll';
import FixedHeaderAndScrollSource from '!!raw-loader!./FixedHeaderAndScroll';

const DataTable = () => {
  return (
    <>
      <AppComponentHeader
        title='Data'
        refUrl='https://ant.design/components/table/'
      />
      <AppRowContainer>
        <Col span={24} key='data-a'>
          <AppComponentCard
            title='Fix Header'
            description='Display large amounts of data in scrollable view.'
            component={FixHeader}
            source={FixHeaderSource}
          />
        </Col>
        <Col span={24} key='data-b'>
          <AppComponentCard
            title='Group Table'
            description='Group table head with columns[n].children.'
            component={GroupTable}
            source={GroupTableSource}
          />
        </Col>
        <Col span={24} key='data-c'>
          <AppComponentCard
            title='Operation'
            description='To perform operations and clear selections after selecting some rows, use rowSelection.selectedRowKeys to control selected rows.'
            component={Operation}
            source={OperationSource}
          />
        </Col>
        <Col span={24} key='data-d'>
          <AppComponentCard
            title='Dynamic'
            description='Select different settings to see the result.'
            component={Dynamic}
            source={DynamicSource}
          />
        </Col>
        <Col span={24} key='data-e'>
          <AppComponentCard
            title='Custom Selection'
            description='Use rowSelection.selections custom selections, default no select dropdown, show default selections via setting to true.'
            component={CustomSelection}
            source={CustomSelectionSource}
          />
        </Col>
        <Col span={24} key='data-f'>
          <AppComponentCard
            title='Reset Filter'
            description='Control filters and sorters by filteredValue and sortOrder.'
            component={ResetFilter}
            source={ResetFilterSource}
          />
        </Col>
        <Col span={24} key='data-g'>
          <AppComponentCard
            title='Expandable Row'
            description='When theres too much information to show and the table cant display all at once.'
            component={ExpandableRow}
            source={ExpandableRowSource}
          />
        </Col>
        <Col span={24} key='data-h'>
          <AppComponentCard
            title='Tree Data'
            description='Display tree structure data in Table when there is field key children in dataSource, try to customize childrenColumnName property to avoid tree table structure.'
            component={TreeData}
            source={TreeDataSource}
          />
        </Col>
        <Col span={24} key='data-i'>
          <AppComponentCard
            title='Fix Column'
            description='To fix some columns and scroll inside other columns, and you must set scroll.x meanwhile.'
            component={FixColumn}
            source={FixColumnSource}
          />
        </Col>
        <Col span={24} key='data-j'>
          <AppComponentCard
            title='Fixed Columns And Header'
            description='A Solution for displaying large amounts of data with long columns.'
            component={FixedColumnsAndHeader}
            source={FixedColumnsAndHeaderSource}
          />
        </Col>
        <Col span={24} key='data-k'>
          <AppComponentCard
            title='Edi Table Cells'
            description='Table with editable cells. When work with shouldCellUpdate, please take care of closure.'
            component={EdiTableCells}
            source={EdiTableCellsSource}
          />
        </Col>
        <Col span={24} key='data-l'>
          <AppComponentCard
            title='Edi Table Row'
            description='Table with editable rows.'
            component={EdiTableRow}
            source={EdiTableRowSource}
          />
        </Col>
        <Col span={24} key='data-m'>
          <AppComponentCard
            title='Nested Tables'
            description='Showing more detailed info of every row.'
            component={NestedTables}
            source={NestedTablesSource}
          />
        </Col>
        <Col span={24} key='data-n'>
          <AppComponentCard
            title='Drag Sorting With Handler'
            description='Alternatively you can implement drag sorting with handler using react-sortable-hoc.'
            component={DragSorting}
            source={DragSortingSource}
          />
        </Col>
        <Col span={24} key='data-o'>
          <AppComponentCard
            title='Ellipsis Column'
            description='Ellipsis cell content via setting column.ellipsis.'
            component={EllipsisColumn}
            source={EllipsisColumnSource}
          />
        </Col>
        <Col span={24} key='data-p'>
          <AppComponentCard
            title='Ellipsis Column Custom Tooltip'
            description='Ellipsis cell content via setting column.ellipsis.showTitle, use Tooltip instead of the html title attribute.'
            component={EllipsisColumnCustomTooltip}
            source={EllipsisColumnCustomTooltipSource}
          />
        </Col>
        <Col span={24} key='data-r'>
          <AppComponentCard
            title='Summary'
            description='Set summary content by summary prop. Sync column fixed status with Table.Summary.Cell. You can fixed it by set Table.Summary fixed prop(since 4.16.0).'
            component={Summary}
            source={SummarySource}
          />
        </Col>
        {/*<Col span={24} key='data-s'>*/}
        {/*  <AppComponentCard*/}
        {/*    title='Virtual List'*/}
        {/*    description='Integrate virtual scroll with react-window to achieve a high performance table of 100,000 data.'*/}
        {/*    component={VirtualList}*/}
        {/*    source={VirtualListSource}*/}
        {/*  />*/}
        {/*</Col>*/}
        <Col span={24} key='data-t'>
          <AppComponentCard
            title='Responsive'
            description='Responsive columns.'
            component={Responsive}
            source={ResponsiveSource}
          />
        </Col>
        <Col span={24} key='data-u'>
          <AppComponentCard
            title='Fixed Header And Scroll Bar With The Page'
            description='For long table，need to scroll to view the header and scroll bar，then you can now set the fixed header and scroll bar to follow the page.'
            component={FixedHeaderAndScroll}
            source={FixedHeaderAndScrollSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default DataTable;
