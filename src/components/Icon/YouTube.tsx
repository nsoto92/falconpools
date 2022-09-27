import React, { FunctionComponent, ReactElement } from 'react';
import Icon from './Icon';

export const YouTubeIcon: FunctionComponent = (): ReactElement => {
  return (
    <Icon>
      <path
          fill="#303c42"
          stroke="#303c42"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.13 4.17 5 3.93a56.22 56.22 0 0 1 7-.43h0a56.22 56.22 0 0 1 7 .43l1.9.24a3 3 0 0 1 2.63 3v9.7a3 3 0 0 1-2.63 3l-1.9.24a56.22 56.22 0 0 1-7 .43h0a56.22 56.22 0 0 1-7-.43l-1.9-.24a3 3 0 0 1-2.63-3V7.15a3 3 0 0 1 2.66-2.98Z" 
        />
        <path
          fill="#f5f5f5"
          stroke="#303c42"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.5 7.5v9l7-4.5-7-4.5z"
        />
    </Icon>
  );
};