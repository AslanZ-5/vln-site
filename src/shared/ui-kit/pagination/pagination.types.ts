export interface PaginationProps {
  index: number;
  pages: number;
  onIndexChange: React.Dispatch<React.SetStateAction<number>>;
}
