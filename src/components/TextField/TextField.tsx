
import React from "react";
import { colors, fontSizes, spacing } from '../../styles/theme';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  className?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, error, helperText, className = "", id, ...props },
    ref
  ) => {
    const inputId = id || (label ? label.replace(/\s+/g, "-").toLowerCase() : undefined);
    return (
      <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
        {label && (
          <label
            htmlFor={inputId}
            style={{
              fontSize: fontSizes.sm,
              fontWeight: 500,
              color: colors.gray[400],
              marginBottom: spacing.xs,
            }}
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          style={{
            background: colors.input,
            border: `1px solid ${error ? colors.primary.DEFAULT : colors.border}`,
            color: colors.white,
            borderRadius: 8,
            padding: `${spacing.sm} ${spacing.md}`,
            fontSize: fontSizes.md,
            width: '100%',
            outline: 'none',
            transition: 'border 0.2s',
          }}
          {...props}
        />
        {helperText && !error && (
          <span style={{ fontSize: fontSizes.xs, color: colors.gray[400] }}>{helperText}</span>
        )}
        {error && <span style={{ fontSize: fontSizes.xs, color: colors.primary.DEFAULT }}>{error}</span>}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
