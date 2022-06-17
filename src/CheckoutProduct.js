import "./CheckoutProduct.css";
import React from "react";
import { useStateValue } from "./StateProvider";
import Button from '@mui/material/Button';

function CheckoutProduct({ title, image, rating, price, id }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt={title} />
      <div className="checkoutProduct__info">
        <h2 className="checkoutProduct__title"> {title}</h2>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <Button className = "checkoutProduct_button" variant = "outlined" onClick={removeItem}>Remove Item</Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
