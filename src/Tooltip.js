import { useState } from 'react';
import { usePopper } from 'react-popper';

export function Tooltip({
  element
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
      {element.innerText}
      <div
        ref={setArrowElement}
        id='arrow'
        style={styles.arrow}
      />
    </div>
  );
}
