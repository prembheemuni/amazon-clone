import "./Product.css";
import { useStateValue } from "./StateProvider";
import Button from '@mui/material/Button';
function Product({ title, image, price, rating, id }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  };
  return (
    <div className="product zoom">
      <div className="product__info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />
      <Button variant="outlined" onClick={addToBasket}>Add to Cart</Button>
    </div>
  );
}

export default Product;
