import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

//Sometimes APIs will not have all the data
//In our case image and price is missing from one of the values
//.url will give cannot read undefined error
//Props helps to detect that and throw error in console.
const Product = ({ name, image, price }) => {
  //Using short circuit to handle default values
  const url = image && image.url;
  return (
    <article className="product">
      <h4>{name || "Default name"}</h4>
      <img src={url || defaultImage} alt={name}></img>
      <p>{price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

//Deafult props saves us in case of missing props
// Product.defaultProps = {
//   name: "Default name",
//   image: { url: defaultImage },
//   price: 3.99,
// };

export default Product;
