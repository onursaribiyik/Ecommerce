import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import LoginSignup from "../pages/LoginSignup";
import ShopCategory from "../pages/ShopCategory";
import men_banner from "../assets/Frontend_Assets/banner_mens.png";
import women_banner from "../assets/Frontend_Assets/banner_women.png";
import kid_banner from "../assets/Frontend_Assets/banner_kids.png";

const ROUTES = [
  {
    path: "/",
    public: true,
    element: <Shop />,
  },
  {
    path: "/mens",
    public: true,
    element: <ShopCategory banner={men_banner} category={"men"} />,
  },
  {
    path: "/womens",
    public: true,
    element: <ShopCategory banner={women_banner} category={"women"} />,
  },
  {
    path: "/kids",
    public: true,
    element: <ShopCategory banner={kid_banner} category={"kid"} />,
  },
  {
    path: "/product/:productId",
    public: true,
    element: <Product />,
  },
  {
    path: "/cart",
    public: true,
    element: <Cart />,
  },
  {
    path: "/login",
    public: true,
    element: <LoginSignup />,
  },
];
export default ROUTES;
