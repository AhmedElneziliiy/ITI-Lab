import { Rating } from "./rating";

export interface ProductApi {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}