import {AiTwotoneStar} from "react-icons/ai"
import { BsFillBagFill } from 'react-icons/bs'

function Card() {
  return (
    <section className="card">
    <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe" className="card-img"></img>
    <div className="card-details">
      <h3 className="class-title">Shoe</h3>
      <section className="card-reviews">
        <AiTwotoneStar className="ratings-star"/>
        <AiTwotoneStar className="ratings-star"/>
        <AiTwotoneStar className="ratings-star"/>
        <span className="total-reviews">3</span>
      </section>

      <section className="card-price">
          <div className="price">
            <del>₹2999</del>  ₹1999
          </div>

          <div className="bag">
              <BsFillBagFill className="bag-icon"/>
          </div>   
      </section>
    </div>
  </section>
  )
}
export default Card;