import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="advertisement"
          className="checkout__ad"
        />
        <h2 className="checkout__title">Your shopping Basket</h2>
        
        {basket.map((each) => (
        <CheckoutProduct
          title={each.title}
          image={each.image}
          price={each.price}
          rating={each.rating}
          id={each.id}
        />
      ))}
      
        
      </div>
      

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
