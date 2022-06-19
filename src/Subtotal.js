import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import Button from "@mui/material/Button";
import { db } from "./FireBase";
import { Link } from "react-router-dom";

function Subtotal() {
  const [{ basket, user }] = useStateValue();

  const onPayment = () => {
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(user?.email)
      .set({ basket: basket });
    // db.collection("users")
    //   .doc(user?.uid)
    //   .collection("email")
    //   .doc(user?.email)
    //   .set({ basket: basket });
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
      />

      <Button variant="outlined" onClick={onPayment}>
        Proceed to Checkout
      </Button>
    </div>
  );
}

export default Subtotal;
