import Cart from "../pages/cart/Cart";
import Catalog from "../pages/catalog/Catalog";
import Contact from "../pages/contact/Contact";
import DeliveryPay from "../pages/deliveryPay/DeliveryPay";
import Login from "../pages/login/Login";
import Storage from "../pages/storage/Storage";
import Terms from "../pages/terms/Terms";
import About from "../pages/about/About";

import Blog from "../pages/blog/Blog";
import Post from "../pages/singleBlogPosts/Post";
import SingleProduct from "../pages/singleProduct/SingleProduct";

export const routes = [
    {path:'/contact', element:<Contact />, exact: true},
    {path:'/terms', element:<Terms />, exact: true},
    {path:'/storage', element:<Storage />, exact: true},
    {path:'/deliverypay', element:<DeliveryPay />, exact: true},
    {path:'/about', element:<About />, exact: true},

    {path:'/trade-in', element:<Catalog />, exact: true},
    {path:'/bicycles', element:<Catalog />, exact: true},
    {path:'/accessories', element:<Catalog />, exact: true},
    {path:'/equipment', element:<Catalog />, exact: true},
    {path:'/catalog/:slug', element:<SingleProduct />, exact: true},

    {path:'/login', element:<Login />, exact: true},
    {path:'/cart', element:<Cart />, exact: true},
    {path:'/blog', element:<Blog />, exact: true},
    {path:'/post', element:<Post />, exact: true},
    {path:'/blog/:slug', element:<Post />, exact: true},
]