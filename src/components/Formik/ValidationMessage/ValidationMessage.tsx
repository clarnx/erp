import { ErrorMessage, useField } from "formik";
import React, { FC, useMemo } from "react";

import Typography from "@/components/Typography";

import type { ValidationMessageProps } from "./types";

const ValidationMessage: FC<ValidationMessageProps> = ({ name }) => {
  const [, meta] = useField(name);

  const hasError = useMemo(
    () => meta.touched && !!meta.error,
    [meta.error, meta.touched]
  );

  if (!hasError) return null;

  return (
    <ErrorMessage name={name}>
      {(message) => (
        <Typography
          variant="span"
          size="text-sm"
          lineHeight="leading-[0.813rem]"
          color="text-poppySurprise"
          className="mt-[10px] font-normal"
        >
          {message}
        </Typography>
      )}
    </ErrorMessage>
  );
};

export default ValidationMessage;
