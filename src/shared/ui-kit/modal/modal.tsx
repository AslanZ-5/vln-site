import { ModalProps } from './modal.types';
import styles from './modal.module.scss';
import { CloseIcon, ElipsisPurple, ElipsisPink } from '@/shared/assets/svg';
import cn from 'classnames';

const classSizes = {
  xs: styles.extraSmallWidth,
  sm: styles.smallWidth,
  md: styles.mediumWidth,
  m: styles.mediumModal,
  lg: styles.largeWidth,
  xl: styles.extraLargeWidth,
};

export const Modal: React.FC<ModalProps> = ({
  title,
  opened,
  onClose,
  children,
  classNames,
  disableBackgoundGradient,
  size = 'sm',
}) => {
  if (!opened) {
    return null;
  }

  const classSize = size ? classSizes[size as keyof ModalProps['size']] : classSizes.sm;

  return (
    <div className={cn(styles.overlay, classNames?.overlay)}>
      <div className={cn(styles.modal, classNames?.root, classSize)}>
        <div className={cn(styles.modalHeader, classNames?.header)}>
          <h2 className={cn(styles.modalTitle, classNames?.title)}>{title}</h2>
          <button
            type="button"
            className={cn(styles.modalCloseBtn, classNames?.close)}
            onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className={cn(styles.modalContent, classNames?.content)}>{children}</div>
        {!disableBackgoundGradient && (
          <>
            <ElipsisPink className={styles.elipsisTop} />
            <ElipsisPurple className={styles.elipsisBottom} />
          </>
        )}
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';
