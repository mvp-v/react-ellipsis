import { loremIpsum } from 'lorem-ipsum';
import { useMemo } from 'react';

import './EllipsedText.css';

export const EllipsedText = ({children}) => {
  const maxWidth = useMemo(() => 100 + 200 * Math.random(), []);
  const wordsCount = useMemo(() => Math.ceil(20 * Math.random()), []);
  const text = useMemo(() => loremIpsum({count: wordsCount, units: 'words'}), []);
  return (
    <div
      className='ellipsed-text'
      data-ellipsis-tooltip={text}
      // style={{maxWidth}}
    >
      {children}
      {text}
    </div>
  );
}
