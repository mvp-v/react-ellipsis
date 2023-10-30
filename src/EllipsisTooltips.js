import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from 'lodash';

function isEllipsisActive(element) {
  return element.offsetWidth < element.scrollWidth;
}

function findParentElementWithEllipsedTooltip(element) {
  if (element.dataset.ellipsisTooltip) {
    return isEllipsisActive(element) ? element : null;
  }
  return element.parentElement ? findParentElementWithEllipsedTooltip(element.parentElement) : null;
}

export const EllipsisTooltips = ({
  debounceTimeMilliseconds = 300,
  children,
  onShowTooltip
}) => {
  const hoveredElementRef = useRef();
  const [activeElement, setActiveElement] = useState();
  const setActiveElementDebounced = useCallback(debounce(setActiveElement, debounceTimeMilliseconds), []);
  const toggleActiveElement = useCallback((newElement) => {
    if (activeElement !== newElement) {
      setActiveElementDebounced.cancel();
      setActiveElement(null);
    }
    setActiveElementDebounced(newElement);
  }, [activeElement, setActiveElementDebounced]);

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      if (e.target !== hoveredElementRef.current) {
        hoveredElementRef.current = e.target;
        toggleActiveElement(e.target);
      }
    }

    document.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);    
    }
  }, [toggleActiveElement]);

  const elementToShowTooltip = useMemo(() =>
    activeElement ? findParentElementWithEllipsedTooltip(activeElement) : null,
    [activeElement]
  );

  useEffect(() => {
    onShowTooltip?.(elementToShowTooltip, elementToShowTooltip?.innerText);
    console.log(elementToShowTooltip);
  }, [elementToShowTooltip]);
  
  return (
    <>
      {children}
    </>
  );
}
