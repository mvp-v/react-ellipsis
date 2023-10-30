import { useState } from 'react';

import {EllipsedText} from './EllipsedText';
import {EllipsisTooltips} from './EllipsisTooltips';
import logo from './logo.svg';
import './App.css';
import { Tooltip } from './Tooltip';
import { map, range } from 'lodash';

function App() {
  const [tooltipData, setTooltipData] = useState();

  return (
    <EllipsisTooltips
      onShowTooltip={(element, text) => setTooltipData({element, text})}
    >
      <div className='App'>
        {tooltipData?.element && <Tooltip element={tooltipData.element} text={tooltipData.text} />}
        <EllipsedText>
          <span>complex </span>
          <svg width="16" height="16">
            <ellipse cx="8" cy="8" rx="8" ry="8" style={{fill: 'green'}} />
          </svg> 
        </EllipsedText>
        {map(range(30), (_, index) => <EllipsedText key={index} />)}
      </div>
    </EllipsisTooltips>
  );
}

export default App;
