import React from "react";
import PropTypes from "prop-types";

//Sometimes APIs will not have all the data
//In our case image and price is missing from one of the values
//.url will give cannot read undefined error
//Props helps to detect that and throw error in console.
const Product = ({ name, image, price }) => {
  return (
    <article className="product">
      <h4>{name}</h4>
      <p>{price}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
};

export default Product;
