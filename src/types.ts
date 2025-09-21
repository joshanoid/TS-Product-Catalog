export type Product = {
  id: number;
  name: string;
  ibu: number;
  abv: number;
  description: string;
  image_url: string;
};

export type Products = ReadonlyArray<Product>;

export type ProductsResponse = {
  metadata: {
    createdAt: string;
    id: string;
    name: string;
    private: boolean;
  };
  record: Products;
};

export type ProductsStore = {
  products: Products;
  loading: boolean;
  error: Error | null;
};
