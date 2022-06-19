import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "./FireBase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .onSnapshot((s) =>
        setOrders(s.docs.map((each) => ({ id: each.id, data: each.data() })))
      );
    //console.log(orders)
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div>
        <Order ord={orders[0]} />
      </div>
    </div>
  );
}

export default Orders;
