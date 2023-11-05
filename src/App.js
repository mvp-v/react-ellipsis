import { map, range } from 'lodash';
import React from 'react';

import { ClampedText } from './ClampedText';
import { EllipsedText } from './EllipsedText';
import { EllipsisTooltips } from './EllipsisTooltips';
import { Tooltip } from './Tooltip';

import './App.css';

function App() {
  const [tooltipData, setTooltipData] = React.useState();
  const onShowTooltipHandler = React.useCallback((element) => {
    setTooltipData({element, text: element?.innerText})
  }, []);

  return (
    <>
      <EllipsisTooltips
        onShowTooltip={onShowTooltipHandler}
      />
      <div className='App'>
        {tooltipData?.element && <Tooltip element={tooltipData.element} text={tooltipData.text} />}
        <EllipsedText>
          <strong>nested elements case: </strong>
          <svg width="16" height="16">
            <ellipse cx="8" cy="8" rx="8" ry="8" style={{fill: 'green'}} />
          </svg> 
        </EllipsedText>
        {map(range(10), (_, index) => <ClampedText key={index} />)}
        {map(range(10), (_, index) => <EllipsedText key={index} />)}
      </div>
    </>
  );
}

export default App;
