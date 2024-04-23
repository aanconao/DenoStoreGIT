import { FunctionComponent } from "preact";
import MenuBarComponent from "../components/MenuBar.tsx";
import { useSignal } from "@preact/signals";
import { MenuBar } from "../types.tsx";

const PageStore: FunctionComponent = () => {
  const barMenu = useSignal<MenuBar>;
  return <div></div>;
};
export default PageStore;
