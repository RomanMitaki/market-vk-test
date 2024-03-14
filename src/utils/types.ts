export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type TGetProductResponse = {
  result: 1 | 0;
  data?: TProduct[];
};

export type TProductMapped = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  qty: number;
};
