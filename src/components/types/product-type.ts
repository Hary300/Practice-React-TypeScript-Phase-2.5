export type Product = {
  id: string;
  name: string;
  price: number;
  discount: number;
  category: Array<string>;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  specs: {
    brand: string;
    weight: string;
    dimensions: string;
    connectivity?: string;
    material?: string;
    capacity?: string;
    resolution?: string;
    warranty: string;
  };
};
