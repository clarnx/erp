import React, { FC, PropsWithChildren } from "react";

import { typographyPresets } from "./config";
import type { TypgoraphyProps, TypographyFieldsType } from "./types";

const Typography: FC<PropsWithChildren<TypgoraphyProps>> = (props) => {
  const {
    preset = "custom",
    variant = "p",
    color = "text-nero",
    textAlign = "text-left",
    fontFamily = "font-primary",
    className,
    size,
    children,
  } = props;

  const fields: TypographyFieldsType | undefined =
    preset === "custom"
      ? { size, variant, color, textAlign, fontFamily, className }
      : typographyPresets.find(({ key }) => key === preset)?.props;

  const Element = fields?.variant as keyof JSX.IntrinsicElements;

  return (
    <Element
      className={`${fields?.size} ${fields?.color} ${fields?.textAlign} ${fields?.fontFamily} ${fields?.className} ${className}`}
    >
      {children}
    </Element>
  );
};

export default Typography;
