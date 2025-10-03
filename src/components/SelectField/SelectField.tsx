
import React from "react";
import { colors, fontSizes, spacing } from '../../styles/theme';

export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: Array<{ label: string; value: string }>;
  className?: string;
}

const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    { label, error, helperText, options, className = "", id, ...props },
    ref
  ) => {
    const selectId = id || (label ? label.replace(/\s+/g, "-").toLowerCase() : undefined);
    return (
      <div
        className={className}
        style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}
      >
        {label && (
          <label
            htmlFor={selectId}
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
        <select
          id={selectId}
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
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {helperText && !error && (
          <span style={{ fontSize: fontSizes.xs, color: colors.gray[400] }}>{helperText}</span>
        )}
        {error && <span style={{ fontSize: fontSizes.xs, color: colors.primary.DEFAULT }}>{error}</span>}
      </div>
    );
  }
);

SelectField.displayName = "SelectField";

export default SelectField;
