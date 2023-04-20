export interface productsApiProps {
  image: string;
  title: string;
  price: number;
  description?: string;
  rating?: { rate: number; count: number };
  id: number;
  category?: string;
}

export interface productsApiPropsList extends Array<productsApiProps> {}
