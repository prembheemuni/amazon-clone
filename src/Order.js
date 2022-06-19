import React from "react";
import CheckoutProduct from "./CheckoutProduct";

function Order({ ord }) {
  //console.log("this is me");
  const cart = ord?.data.basket;
  console.log(ord);

  return (
    <div>
      {cart?.map((each) => (
        <CheckoutProduct
        title={each.title}
        image={each.image}
        price={each.price}
        rating={each.rating}
        id={each.id}
      />
      ))}
    </div>
  );
}

export default Order;
