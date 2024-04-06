import React from 'react';
import {Col} from 'antd';

import Basic from './Basic';
import BasicSource from '!!raw-loader!./Basic';
import TitleComponent from './TitleComponent';
import TitleComponentSource from '!!raw-loader!./TitleComponent';
import TextLinkComponent from './TextLinkComponent';
import TextLinkComponentSource from '!!raw-loader!./TextLinkComponent';
import Ellipsis from './Ellipsis';
import EllipsisSource from '!!raw-loader!./Ellipsis';
import Interactive from './Interactive';
import InteractiveSource from '!!raw-loader!./Interactive';
import Suffix from './Suffix';
import SuffixSource from '!!raw-loader!./Suffix';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';
import AppComponentCard from '@crema/components/AppComponentCard';

const Button = () => {
  return (
    <>
      <AppComponentHeader
        title='Button'
        refUrl='https://ant.design/components/button/'
      />

      <AppRowContainer>
        <Col span={24} key='typography-a'>
          <AppComponentCard
            title='Basic'
            description='Display the document sample.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='typography-b'>
          <AppComponentCard
            title='Title Component'
            description='Display title in different level.'
            component={TitleComponent}
            source={TitleComponentSource}
          />
        </Col>
        <Col xs={24} lg={12} key='typography-c'>
          <AppComponentCard
            title='Text Link Component'
            description='Provides multiple types of text and link.'
            component={TextLinkComponent}
            source={TextLinkComponentSource}
          />
        </Col>
        <Col span={24} key='typography-d'>
          <AppComponentCard
            title='Interactive'
            description='Provide additional interactive capacity of editable and copyable.'
            component={Interactive}
            source={InteractiveSource}
          />
        </Col>
        <Col span={24} key='typography-e'>
          <AppComponentCard
            title='Ellipsis'
            description='Multiple line ellipsis support. You can use tooltip to config ellipsis tooltip. Recommend expandable when have lots of content.'
            component={Ellipsis}
            source={EllipsisSource}
          />
        </Col>
        <Col span={24} key='typography-f'>
          <AppComponentCard
            title='Suffix'
            description='add suffix ellipsis support.'
            component={Suffix}
            source={SuffixSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};
export default Button;
