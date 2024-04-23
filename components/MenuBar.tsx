import { Signal } from "@preact/signals";
import { MenuBar } from "../types.tsx";
import { FunctionComponent } from "preact";

type BarMenuProps = {
  BarMenu: Signal<MenuBar>;
};

const MenuBarComponent: FunctionComponent<BarMenuProps> = ({ BarMenu }) => {
  return (
    <div>
      <div
        onClick={() => {
          BarMenu.value == MenuBar.ABOUT_US;
        }}
      >
        ABOUT_US
      </div>
    </div>
  );
};

export default MenuBarComponent;
