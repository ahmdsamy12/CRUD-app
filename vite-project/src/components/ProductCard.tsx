import { IProduct } from "../interfaces";
import Button from "../ui/Button";
import { txtSlicer } from "../utils";
import Image from "./Image";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  setIsOpenEdit: (value: boolean) => void;
}

const ProductCard = ({ product, setProductToEdit, setIsOpenEdit }: IProps) => {
  const handleEdit = () => {
    setProductToEdit(product);
    setIsOpenEdit(true);
  };
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Image src={product.imageUrl} alt="product-name" />
      <h3>{product.title}</h3>
      <p>{txtSlicer(product.description)}</p>
      <div className="flex items-center my-4 space-x-2">
        {product.colors.map((color) => (
          <span
            className={`w-5 h-5 rounded-full cursor-pointer`}
            style={{
              backgroundColor: color,
            }}
            key={color}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span>{product.price}</span>
        <Image
          src={product.imageUrl}
          alt="product name"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700" onClick={handleEdit}>
          Edit
        </Button>
        <Button className="bg-red-700">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
