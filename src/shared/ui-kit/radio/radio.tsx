import { RadioProps } from './radio.types';
import './radio.css';

export const Radio = ({ checked, size, disabled, label, onChange, name }: RadioProps) => {
  return (
    <label className='radio'>
      <input name={name} className={`${size}`} type='radio' checked={checked} disabled={disabled} onChange={onChange} />
      {label}
    </label>
  );
};
