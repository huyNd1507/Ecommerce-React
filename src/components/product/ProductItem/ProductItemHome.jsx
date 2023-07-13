import React from "react";
import "./ProductItem.scss";
import { useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa";

import {
  ADD_TO_CART,
  CALCULATE_TOTAL_QUANTITY,
} from "../../../redux/slice/cartSlice";
import { Link } from "react-router-dom";

const ProductItemHome = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };
  return (
<<<<<<< HEAD
    <div className="col-3 col-md-6 col-sm-12">
=======
    <div className="col-3 col-md-6 ">
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
      <div className="product-card">
        <Link to={`/product-details/${product.id}`}>
          <div className="product-card-img">
            <img src={product.imageURL} alt={product.name}></img>
          </div>
        </Link>

        <div className="product-card-info">
<<<<<<< HEAD
          <div className="product-btn">
            <button
              className="--btn --btn-black"
              onClick={() => addToCart(product)}
            >
              Mua ngay
            </button>
            <button className="--btn --btn-black">
              <FaCartPlus onClick={() => addToCart(product)} />
            </button>
          </div>
=======
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
          <Link to={`/product-details/${product.id}`}>
            <div className="product-card-name">
              <h2>{product.name}</h2>
            </div>
          </Link>
          <div className="product-card-price">
            <span className="curr-price">${product.price}</span>
          </div>
<<<<<<< HEAD
=======
          <div className="product-btn">
            <button
              className="--btn --btn-black"
              onClick={() => addToCart(product)}
            >
              Thêm vào giỏ
            </button>
          </div>
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
        </div>
      </div>
    </div>
  );
};

export default ProductItemHome;
