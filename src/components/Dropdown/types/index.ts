export type Option = {
  id: string;
  label: string;
};

export type DropdownProps = {
  label?: string;
  options: Option[];
  disabled?: boolean;
  hasError?: boolean;
  isOpen?: boolean;
  isScrolled?: boolean;
};
