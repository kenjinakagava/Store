interface productsApiProps {
  image: string;
  title: string;
  price: number;
  rating?: { rate: number; counter: number };
  id: number;
}

interface productsApiPropsList extends Array<productsApiProps> {}
