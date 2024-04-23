import { FunctionComponent } from "preact";
import { Products } from "../types.tsx";
import { Signal } from "@preact/signals";

type ProductSignal = {
  ProductsSignal: Signal<Products[]>;
};

const ProductsComponent: FunctionComponent<ProductSignal> = ({
  ProductsSignal,
}) => {
  const newProduct = (product: Products) => {
    return newProduct;
  };
  return (
    <div>
      <h1>Store</h1>
      {ProductsSignal.value.map((P) => (
        <div key={P.id}></div>
      ))}
    </div>
  );
};

export default ProductsComponent;
