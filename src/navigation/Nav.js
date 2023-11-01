import "./Nav.css"
import {FiHeart} from "react-icons/fi"
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai"

function Nav() {
  return (
    <nav>
      <div classsName="nav-container">
        <input
         className="search-item" 
         type="text"
         placeholder="Enter your search shoes"
         />
      </div>

      <div className="profile-conatiner">
        <a href="#">
          <FiHeart className="nav-icons"/>
        </a>

        <a href="#">
            <AiOutlineShoppingCart className="nav-icons"/>
        </a>
          <AiOutlineUserAdd className="nav-icons"/>
        <a href="#">

</a>
        
      </div>
    </nav>
  )
}


export default Nav;