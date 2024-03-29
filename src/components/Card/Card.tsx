import React, { FunctionComponent, ReactElement, useRef, useState } from 'react';

import styles from './Card.module.css';

export interface CardProps {
  children: ReactElement | ReactElement[];
}

export const Card: FunctionComponent<CardProps> = (props): ReactElement => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const el: any = domRef.current;
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const setWrapperStyle = () => {
    const s = [styles.wrapper];
    if (isVisible) {
      s.push(styles.visible);
    }
    return s.join(' ');
  };

  return (
    <div 
      className={setWrapperStyle()}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};
