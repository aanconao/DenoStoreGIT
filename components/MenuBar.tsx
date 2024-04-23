import { Signal } from "@preact/signals";
import { MenuBar } from "../types.tsx";
import { FunctionComponent } from "preact";

type BarMenuProps = {
  BarMenu: Signal<MenuBar>;
};

const MenuBarComponent: FunctionComponent<BarMenuProps> = ({ BarMenu }) => {
  return (
    <div class="menu">
      <div
        onClick={() => {
          BarMenu.value == MenuBar.ABOUT_US;
        }}
      >
        ABOUT US
      </div>
      <div
        onClick={() => {
          BarMenu.value == MenuBar.CONTACT_US;
        }}
      >
        CONTACT US
      </div>

      <div
        onClick={() => {
          BarMenu.value == MenuBar.SHOPPING_CART;
        }}
      >
        CART
      </div>

      <div
        onClick={() => {
          BarMenu.value == MenuBar.STORE;
        }}
      >
        STORE
      </div>
    </div>
  );
};

export default MenuBarComponent;
