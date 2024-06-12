import car from "../assets/car-race-438467_1280.jpg";
import { v4 as uuid } from "uuid";
import { IFormInputs, IProduct } from "../interfaces";

export const productsList: IProduct[] = [
  {
    id: uuid(),
    title: "2022 genesis cvce: nomise",
    description:
      "2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise",
    imageUrl: car,
    price: "1000000",
    colors: ["#ff5733", "#33ff57", "#3357ff"],
    category: {
      name: "Cars",
      imageUrl: car,
    },
  },

  {
    id: uuid(),
    title: "2022 genesis cvce: nomise",
    description:
      "2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise",
    imageUrl: car,
    price: "1000000",
    colors: ["#ff33a1", "#33ffa1", "#a133ff"],
    category: {
      name: "Cars",
      imageUrl: car,
    },
  },

  {
    id: uuid(),
    title: "2022 genesis cvce: nomise",
    description:
      "2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise",
    imageUrl: car,
    price: "1000000",
    colors: ["#57ff33", "#a157ff", "#ff33a1"],
    category: {
      name: "Cars",
      imageUrl: car,
    },
  },

  {
    id: uuid(),
    title: "2022 genesis cvce: nomise",
    description:
      "2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise",
    imageUrl: car,
    price: "1000000",
    colors: ["#33a1ff", "#a1ff33", "#ff5733"],
    category: {
      name: "Cars",
      imageUrl: car,
    },
  },

  {
    id: uuid(),
    title: "2022 genesis cvce: nomise",
    description:
      "2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise",
    imageUrl: car,
    price: "1000000",
    colors: ["#a1ff57", "#5733ff", "#33ffa1"],
    category: {
      name: "Cars",
      imageUrl: car,
    },
  },

  {
    id: uuid(),
    title: "2022 genesis cvce: nomise",
    description:
      "2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise",
    imageUrl: car,
    price: "1000000",
    colors: ["#ff3357", "#57a1ff", "#a13357"],
    category: {
      name: "Shoue",
      imageUrl: car,
    },
  },

  {
    id: uuid(),
    title: "2022 genesis cvce: nomise",
    description:
      "2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise",
    imageUrl: car,
    price: "1000000",
    colors: ["#33ff57", "#ff5733", "#5733ff"],
    category: {
      name: "Shoue",
      imageUrl: car,
    },
  },

  {
    id: uuid(),
    title: "2022 genesis cvce: nomise",
    description:
      "2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise",
    imageUrl: car,
    price: "1000000",
    colors: ["#a1ff33", "#ff33a1", "#3357ff"],
    category: {
      name: "Shoue",
      imageUrl: car,
    },
  },

  {
    id: uuid(),
    title: "2022 genesis cvce: nomise",
    description:
      "2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise",
    imageUrl: car,
    price: "1000000",
    colors: ["#57ffa1", "#a15733", "#33ff57"],
    category: {
      name: "Shoue",
      imageUrl: car,
    },
  },

  {
    id: uuid(),
    title: "2022 genesis cvce: nomise",
    description:
      "2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise 2022 genesis cvce: nomise",
    imageUrl: car,
    price: "1000000",
    colors: ["#ff33a1", "#33a1ff", "#57ff33"],
    category: {
      name: "Shoue",
      imageUrl: car,
    },
  },
];

export const formInputsList: IFormInputs[] = [
  {
    id: "title",
    name: "title",
    type: "text",
    label: "Title",
  },
  {
    id: "description",
    name: "description",
    type: "text",
    label: "Description",
  },
  {
    id: "image",
    name: "imageUrl",
    type: "text",
    label: "product image URL",
  },
  {
    id: "price",
    name: "price",
    type: "text",
    label: "Product price",
  },
];

export const colors: string[] = [
  "#354fdf",
  "#ff5733",
  "#33ff57",
  "#57a0ff",
  "#ff33a8",
  "#a833ff",
  "#ff8c33",
  "#33fff3",
  "#f333ff",
  "#33ff8c",
  "#ff3380",
  "#33d4ff",
  "#d433ff",
  "#80ff33",
];
