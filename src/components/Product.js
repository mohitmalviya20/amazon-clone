import { Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./css/Product.css";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  console.log(basket);
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <Button className="product_button" onClick={addToBasket}>
        Add to Basket
      </Button>
    </div>
  );
}

export default Product;
