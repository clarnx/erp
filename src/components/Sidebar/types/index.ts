export type Sublink = {
  id: number;
  url: string;
  text: string;
  isSubLink?: boolean;
  isChildLink?: boolean;
  subLinks?: Sublink[];
};

export type SidebarLink = {
  id: number;
  url: string;
  text: string;
  Icon?: React.ElementType;
  isMainLink: boolean;
  isSubLink?: boolean;
  isChildLink?: boolean;
  subLinks?: Sublink[];
};
