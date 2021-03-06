import React from "react";
import classes from "./Order.module.css";
import formatPrice from "../../helpers/price";

const Order = props => {
  let ingredients = null;
  if (props.ingredients) {
    ingredients = Object.keys(props.ingredients).map((ing, i) => (
      <span
        key={i}
        style={{
          textTransform: "capitalize",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {ing}: {`(${props.ingredients[ing]}) `}
      </span>
    ));
  }
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredients}</p>
      <p>
        Price: <strong>{formatPrice.format(props.price)}</strong>
      </p>
    </div>
  );
};

export default Order;

// const ingredients = [];

// for (let key in props.ingredients) {
//   ingredients.push({ name: key, amount: props.ingredients[key] });
// }
// const ingredientOutput = ingredients.map((ing, i) => (
//   <span
//     key={i}
//     style={{
//       textTransform: "capitalize",
//       margin: "0 8px",
//       border: "1px solid #ccc",
//       padding: "5px",
//     }}
//   >
//     {ing.name} ({ing.amount})
//   </span>
// ));
