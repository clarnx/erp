import { useField } from "formik";
import React, { FC, useCallback, useMemo, useState } from "react";

import { useUpdateEffect } from "@/hooks";

import Input from "@/components/Input";

import type { FormInputProps } from "./types";

const FormInput: FC<FormInputProps> = (props) => {
  const { name } = props;

  const [, meta, helpers] = useField(name);

  const [currentValue, setCurrentValue] = useState<string | number>(
    meta.value || meta.initialValue
  );

  const hasError = useMemo(
    () => meta.touched && !!meta.error,
    [meta.error, meta.touched]
  );

  useUpdateEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const text = event.target.value;

      setCurrentValue(text);
      helpers.setValue(text);
      helpers.setError("");
    },
    [helpers]
  );

  const handleBlur = useCallback(() => {
    helpers.setTouched(true);
  }, [helpers]);

  return (
    <Input
      {...props}
      value={currentValue}
      hasError={hasError}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default FormInput;
