import {} from "@mui/material";
import { Controller, UseControllerProps } from "react-hook-form";
import S from "./Input.Styled";

interface InputProps extends UseControllerProps {
  type: "text";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options?: {
    [key: string]: any;
  };
  ref?: any;
}

function Input({
  type,
  name,
  rules = {},
  control,
  defaultValue,
  shouldUnregister = false,
  onChange,
  options = {},
  ref,
}: InputProps) {
  switch (type) {
    case "text":
      return (
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue || ""}
          rules={rules}
          shouldUnregister={shouldUnregister}
          render={({ field, formState: { errors } }) => (
            <S.TextInput
              helperText={errors[name]?.message as string}
              type="text"
              multiline={options?.multiline}
              maxRows={options?.maxRows}
              {...options}
              name={field.name}
              value={field.value}
              ref={field.ref}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                field.onChange(e.target.value);
                onChange && onChange(e);
              }}
              onBlur={field.onBlur}
            />
          )}
        />
      );

    default:
      throw new Error("Wrong Input Type");
  }
}

export default Input;
