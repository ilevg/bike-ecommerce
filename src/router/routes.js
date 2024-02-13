import Accessories from "../pages/accessories/Accessories";
import Bicycles from "../pages/bicycles/Bicycles";
import Cart from "../pages/cart/Cart";
import Catalog from "../pages/catalog/Catalog";
import Contact from "../pages/contact/Contact";
import DeliveryPay from "../pages/deliveryPay/DeliveryPay";
import Equipment from "../pages/equipment/Equipment";
import Login from "../pages/login/Login";
import Storage from "../pages/storage/Storage";
import Terms from "../pages/terms/Terms";
import About from "../pages/about/About";

export const routes = [
    {path:'/contact', element:<Contact />, exact: true},
    {path:'/terms', element:<Terms />, exact: true},
    {path:'/storage', element:<Storage />, exact: true},
    {path:'/deliverypay', element:<DeliveryPay />, exact: true},
    {path:'/deliverypay', element:<DeliveryPay />, exact: true},
    {path:'/about', element:<About />, exact: true},

    {path:'/catalog', element:<Catalog />, exact: true},
    {path:'/accessories', element:<Accessories />, exact: true},
    {path:'/equipment', element:<Equipment />, exact: true},
    {path:'/bicycles', element:<Bicycles />, exact: true},
    {path:'/login', element:<Login />, exact: true},
    {path:'/cart', element:<Cart />, exact: true},
]