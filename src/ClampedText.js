import { loremIpsum } from 'lorem-ipsum';
import { useMemo } from 'react';

import './ClampedText.css';

export const ClampedText = ({children}) => {
  const wordsCount = useMemo(() => Math.ceil(40 * Math.random()), []);
  const text = useMemo(() => loremIpsum({count: wordsCount, units: 'words'}), [wordsCount]);
  return (
    <div className='clamped-text'>
      {children}
      {text}
    </div>
  );
}
