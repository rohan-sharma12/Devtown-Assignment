import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";
import {AiOutlineShoppingCart} from "react-icons/ai"
import "./Sidebar.css"

function Sidebar() {
  return (
    <>
    <section className="sidebar">
    <div className=".logo-container">
      <h1><AiOutlineShoppingCart/></h1>
    </div>

    <Category/>
    <Price/>
    <Colors/>   
    </section>
    </>
  )
}

export default Sidebar;