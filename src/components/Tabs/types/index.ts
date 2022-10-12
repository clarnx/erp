export type TabItem = {
  id: number;
  text: string;
  url: string;
  isActive?: boolean;
};

export type TabProps = {
  items: TabItem[];
};
