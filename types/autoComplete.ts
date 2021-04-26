import { GetId } from './getId';

export interface SearchListResult {
  id: string;
  title: string;
}

export type AutoCompleteProps = {
  results: SearchListResult[];
  loading?: boolean;
  onChange: (e: string) => void;
  onSelect: GetId;
};
