import { CheckboxProps } from './checkbox.types';
import './checkbox.css';

export const Checkbox = ({ checked, size, disabled, label, onChange }: CheckboxProps) => {
  return (
    <label className='checkbox'>
      <input className={`${size}`} type='checkbox' checked={checked} disabled={disabled} onChange={onChange} />
      {label}
    </label>
  );
};
