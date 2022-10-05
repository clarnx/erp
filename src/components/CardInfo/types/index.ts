export type CardInfoProps = {
  header: string;
  date: string;
  promo?: string;
  onDownload?: () => void;
  onOpen?: () => void;
};
