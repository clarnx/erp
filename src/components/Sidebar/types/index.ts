export type Sublink = {
  id: number;
  url: string;
  text: string;
  isSubLink?: boolean;
  subLinks?: Sublink[];
};

export type SidebarLink = {
  id: number;
  url: string;
  text: string;
  icon?: string;
  isMainLink: boolean;
  isSubLink?: boolean;
  subLinks?: Sublink[];
};
