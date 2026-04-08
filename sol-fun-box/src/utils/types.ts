export interface ICard {
  id: number;
  consist: string;
  quantity: number;
  gift?: number | undefined;
  weight: string;
  slogan?: string | null;
  isDisabled?: boolean;
}
