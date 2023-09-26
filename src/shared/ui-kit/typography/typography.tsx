import { TypographyProps, Weight } from './typography.types';
import { volnaTheme as theme } from '../../constants/theme';
import './typography.css';

export const Typography = ({
  children,
  size = 3,
  weight = 'regular',
  heading = false,
  lable = false,
  shorttext = false,
  paragraph = false,
  color,
  style,
}: TypographyProps) => {
  const variant = `
    ${heading ? 'heading' : ''}
    ${lable ? 'lable' : ''}
    ${shorttext ? 'shorttext' : ''}
    ${paragraph ? 'paragraph' : ''}
  `.trim();

  let lw: Weight = weight as Weight;

  if (shorttext || paragraph) {
    lw = 'regular';
  }

  if (heading) {
    lw = 'medium';
  }

  return (
    <div
      style={{
        color: color || theme.colors.base[900],
        ...style,
      }}
      className={[`storybook-typography--${variant}-${lw}-${size}`].join(' ')}
    >
      {children}
    </div>
  );
};
