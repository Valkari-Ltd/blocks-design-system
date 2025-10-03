
import React from "react";
import { colors, spacing } from '../../styles/theme';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, className = "", ...props }) => {
  if (!open) return null;
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className={className}
        style={{
          background: colors.card,
          color: colors.white,
          borderRadius: 8,
          minWidth: 320,
          maxWidth: 800,
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.24)',
          position: 'relative',
        }}
        {...props}
      >
        <button
          style={{
            position: 'absolute',
            top: spacing.xl,
            right: spacing.xl,
            fontSize: '2rem',
            color: colors.gray[400],
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'color 0.2s',
          }}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div
          style={{
            padding: `${spacing.xxl} 0`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {title && <h3 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: spacing.xl }}>{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
