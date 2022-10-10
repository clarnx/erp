type Icon = {
  src: string;
  height?: number;
  width?: number;
};

type Variant = "normal" | "warning";

export type PopupProps = {
  show?: boolean;
  type?: Variant;
  msg?: string;
  icon?: Icon;
};
