import { adminProp } from "../category/Cate.interface";

export interface OwnProp {
  title: string;
  content: string;
  createdAt: string;
  onClick: () => void;
  image: string;
  category: {
    name: string;
  };
}
