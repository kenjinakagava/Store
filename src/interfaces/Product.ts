export interface productsApiProps {
  image: string;
  title: string;
  price: number;
  rating?: { rate: number; counter: number };
  id: number;
  category?: string;
}

export interface productsApiPropsList extends Array<productsApiProps> {}
