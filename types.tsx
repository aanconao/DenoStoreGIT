export enum MenuBar {
  ABOUT_US = "About us",
  STORE = "Store",
  CONTACT_US = "Contact us",
  SHOPPING_CART = "Cart",
}

export type AboutUs = {
  description: string;
};

export type Products = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type Store = {
  salty: {
    sandwiches: string;
    croissant: string;
  };
  sweet: {
    cakes: string;
    cookies: string;
    cupcakes: string;
    milkShake: string;
  };
};
