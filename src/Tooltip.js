import { useState } from 'react';
import { usePopper } from 'react-popper';

export function Tooltip({
  element,
  text
}) {
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(element, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });
  
  return (
    <div
      ref={setPopperElement}
      id='tooltip'
      style={styles.popper}
      {...attributes.popper}
    >
      {text}
      <div
        ref={setArrowElement}
        id='arrow'
        style={styles.arrow}
      />
    </div>
  );
}
