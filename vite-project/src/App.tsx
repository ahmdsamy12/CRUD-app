import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { colors, formInputsList, productsList } from "./data";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import { v4 as uuid } from "uuid";
import ErrorSpan from "./ui/ErrorSpan";
import ColorCircle from "./ui/ColorCircle";
import Select from "./ui/Select";

const App = () => {
  const [productToEdit, setProductToEdit] = useState<IProduct>({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageUrl: "",
    },
  });
  console.log(productToEdit);

  const [errorColor, setErrorColor] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(productsList);
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageUrl: "",
    },
  });
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [color, setColor] = useState<string[]>([]);
  console.log(color);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errors = productValidation({
      title: product.title,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price,
    });

    const hasErrors =
      Object.values(errors).some((err) => err === "") &&
      Object.values(errors).every((err) => err === "");
    if (!hasErrors) {
      setErrors(errors);
      return;
    }
    if (color.length === 0) {
      setErrorColor(true);
      return;
    }
    setProducts((prev) => [{ ...product, id: uuid(), colors: color }, ...prev]);
    localStorage.setItem(
      "products",
      JSON.stringify([...products, { id: uuid(), ...product, colors: color }])
    );
    setProduct({
      title: "",
      description: "",
      imageUrl: "",
      price: "",
      colors: [],
      category: {
        name: "",
        imageUrl: "",
      },
    });
    setColor([]);
    setIsOpen(false);
  };

  useEffect(() => {
    const data = localStorage.getItem("products");
    if (data) {
      setProducts(JSON.parse(data));
    }
  }, []);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const openEdit = () => setIsOpenEdit(true);
  const closeEdit = () => setIsOpenEdit(false);

  const renderProductsList = products.map((product) => (
    <ProductCard
      key={product?.id}
      product={product}
      setProductToEdit={setProductToEdit}
      setIsOpenEdit={setIsOpenEdit}
    />
  ));

  const renderProductColors = colors.map((color) => (
    <ColorCircle
      color={color}
      onClick={() =>
        setColor((prev) => {
          if (prev.includes(color)) {
            return prev.filter((c) => c !== color);
          }
          return [...prev, color];
        })
      }
    />
  ));

  const renderFormInputsList = formInputsList.map((inp) => (
    <div className="flex flex-col" key={inp.id}>
      <label htmlFor={inp.id}>{inp.label}</label>
      <Input
        type={inp.type}
        id={inp.id}
        value={product[inp.name]}
        onChange={handleChange}
        name={inp.name}
      />
      {errors[inp.name] && <ErrorSpan text={errors[inp.name]} />}
    </div>
  ));
  return (
    <div className="px-10">
      <Button
        width="w-fit"
        className="bg-indigo-700 my-4 hover:bg-indigo-800"
        onClick={open}
      >
        Add New Product
      </Button>
      <div
        className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
        key={product.id}
      >
        {renderProductsList}
      </div>
      <Modal isOpen={isOpen} close={close} title="Add New Product">
        <form className="space-y-3" onSubmit={handleSubmit}>
          {renderFormInputsList}
          <div className="flex items-center my-4 space-x-2" key={product?.id}>
            {renderProductColors}
          </div>
          <div
            className="flex flex-wrap  items-center my-4 space-x-2"
            key={product?.id}
          >
            {color.map((co) => (
              <span
                className="text-white p-1 rounded-sm mt-2"
                style={{ backgroundColor: co }}
              >
                {co}
              </span>
            ))}
          </div>
          {errorColor && (
            <span className="text-red-500">select one color at least</span>
          )}
          <Select />
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button className="bg-gray-300 hover:bg-gray-400" onClick={close}>
              cancel
            </Button>
          </div>
        </form>
      </Modal>
      //edit menu
      <Modal isOpen={isOpenEdit} close={closeEdit} title="Edit this Product">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor={"title"}>Title</label>
            <Input
              id={"title"}
              value={productToEdit["title"]}
              onChange={handleChange}
              name={"title"}
            />
            {/* {errors[inp.name] && <ErrorSpan text={errors[inp.name]} />} */}
          </div>
          {/* <div className="flex items-center my-4 space-x-2" key={product?.id}>
            {renderProductColors}
          </div>
          <div
            className="flex flex-wrap  items-center my-4 space-x-2"
            key={product?.id}
          >
            {color.map((co) => (
              <span
                className="text-white p-1 rounded-sm mt-2"
                style={{ backgroundColor: co }}
              >
                {co}
              </span>
            ))}
          </div>
          {errorColor && (
            <span className="text-red-500">select one color at least</span>
          )}
          <Select />
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button className="bg-gray-300 hover:bg-gray-400" onClick={closeEdit}>
              cancel
            </Button>
          </div> */}
        </form>
      </Modal>
    </div>
  );
};

export default App;
