import React, { ChangeEvent, FunctionComponent, ReactElement } from 'react';
import styles from './InputField.module.css';


export interface InputFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  adornment?: string;
  type?: 'email' | 'password'| 'text' | 'url' | 'number' | 'phone' | 'phoneVerifyCode' | 'date';
  onChange: (newValue: string) => void;
  onBlur?: (newValue: string) => void;
  disabled?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
}

export const InputField: FunctionComponent<InputFieldProps> = (props): ReactElement => {

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  const onBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (props.onBlur) {
      props.onBlur(event.target.value);
    }
  };

  const getLabel = () => {
    if (props.value && props.value.length > 0) {
      return props.label;
    } else if (props.placeholder) {
      return props.label;
    }
    return undefined;
  };

  const getInputType = (): string => {
    if (!props.type) {
      return 'text';
    }
    if (props.type === 'password') {
      return 'text';
    }
    return props.type;
  };

  const getIcon = (): ReactElement | null => {
    if (props.adornment) {
      return (
        <div className={styles.adornment}>
          {props.adornment}
        </div>
      );
    } else {
      return null;
    }
  };
  
  return (
    <label className={styles.wrapper}>
      <div className={styles.label}>
        {getLabel()}
      </div>
      <input
        className={styles.field}
        onChange={onChange}
        onBlur={onBlur}
        disabled={props.disabled || props.loading}
        autoFocus={props.autoFocus}
        placeholder={props.placeholder ? props.placeholder : props.label}
        type={getInputType()}
        value={props.value}
      />
      {getIcon()}
  </label>
  );
};
