export interface PostProp {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  admin: adminProp;
  category: {
    name: string;
  };
}

export interface adminProp {
  id: string;
  name: string;
  family: string;
  email: string;
  image: string;
  username: string;
  createdAt: string;
  bio: string;
  job: string;
}

export interface ItemProp {
  name: string;
  onClick: () => void;
  // className: string;
  isActive: boolean;
}

export interface dataProp {
  id: string;
  name: string;
  image: string;
}

export interface CateProp {
  id: string;
  name: string;
  posts: PostProp[];
}
