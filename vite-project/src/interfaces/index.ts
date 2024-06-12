export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageUrl: string;
  };
}

export interface IFormInputs {
  id: string;
  name: "title" | "description" | "price" | "imageUrl";
  type: string;
  label: string;
}
