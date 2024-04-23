import { FunctionComponent } from "preact";
import MenuBarComponent from "../components/MenuBar.tsx";
import { useSignal } from "@preact/signals";
import { MenuBar } from "../types.tsx";

const PageStore: FunctionComponent = () => {
  const BarMenuSignal = useSignal<MenuBar>(MenuBar.STORE);
  return (
    <>
      <MenuBarComponent BarMenu={BarMenuSignal} />
    </>
  );
};
export default PageStore;
