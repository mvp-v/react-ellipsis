import { loremIpsum } from 'lorem-ipsum';
import { useMemo } from 'react';

import './EllipsedText.css';

export const EllipsedText = ({children}) => {
  const wordsCount = useMemo(() => Math.ceil(20 * Math.random()), []);
  const text = useMemo(() => loremIpsum({count: wordsCount, units: 'words'}), [wordsCount]);
  return (
    <div className='ellipsed-text'>
      {children}
      {text}
    </div>
  );
}
