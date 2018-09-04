/* eslint-disable react/prop-types */

import 'kmt-rc-slider/assets/index.less';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'kmt-rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 400, margin: 50 };
ReactDOM.render(
  <div>
    <div style={wrapperStyle}>
      <p>Slider with custom handle</p>
      <Slider min={0} max={20} defaultValue={3} handle={handle} />
    </div>
    <div style={wrapperStyle}>
      <p>Range with custom handle</p>
      <Range min={0} max={1} step={0.001} defaultValue={[0.3, 0.5]} handle={handle} 
      trackStyle={[{ backgroundColor: '#f30e5c', height: 10 },{ backgroundColor: '#228c7b', height: 10 } ]}
      handleStyle={{
        height: 28,
        width: 28,
        marginLeft: -14,
        marginTop: -9,
        backgroundColor: '#ffffff',
      }}
      railStyle={{ backgroundColor: '#f1c550', height: 10 }}
      minimumTrackStyle={{ backgroundColor: '#a1c45a', height: 10 }}
      maximumTrackStyle={{ backgroundColor: '#a1c45a', height: 10 }}/>
    </div>
  </div>,
  document.getElementById('__react-content')
);
