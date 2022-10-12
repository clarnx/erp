export type BreadcrumbItem = {
  id: number;
  text: string;
  url: string;
  isActive?: boolean;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
};
