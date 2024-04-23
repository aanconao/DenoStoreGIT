import { FunctionComponent } from "preact";
import MenuBarComponent from "../components/MenuBar.tsx";
import { useSignal } from "@preact/signals";
import { MenuBar } from "../types.tsx";
import Store from "../components/Store.tsx";
import { Products } from "../types.tsx";

const PageStore: FunctionComponent = () => {
  const BarMenuSignal = useSignal<MenuBar>(MenuBar.STORE);
  const BarProductSignal = useSignal<Products[]>([]);
  return (
    <>
      <MenuBarComponent BarMenu={BarMenuSignal} />

      <Store ProductsSignal={BarProductSignal} />
    </>
  );
};
export default PageStore;
