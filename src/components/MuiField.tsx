import { TextField } from "@mui/material";
import { Field, FieldInputProps } from "formik";

type MuiFieldProps = {
  label: string;
  type: string;
} & FieldInputProps<any>;

export const MuiField = ({
  name,
  label,
  type,
  value,
  onChange,
  onBlur,
}: MuiFieldProps) => {
  return (
    <Field name={name}>
      {({ meta }) => (
        <div>
          <TextField
            name={name}
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          {meta.touched && meta.error && (
            <div className="text-red-400/70">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};
