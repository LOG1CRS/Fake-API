import { cloneElement, useEffect, useState } from 'react';
import { useScrollTrigger } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const ElevationScroll = (props) => {
  const { children, window } = props;
  const [background, setBackground] = useState('secondary');
  const url = useLocation();

  useEffect(() => {
    if (url.pathname === '/') {
      setBackground('transparent');
    } else {
      setBackground('secondary');
    }
  }, [url]);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'secondary' : background,
  });
};

export default ElevationScroll;
