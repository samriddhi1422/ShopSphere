import Header from "./pages/header";
import Footer from "./pages/footer";
import Products from "./pages/products";
import HeroSec from "./pages/heroSec";
import Knowus from "./pages/Knowus";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <>
        <Header/>
       <Outlet/>
        <Footer/>
        </>
    )
}