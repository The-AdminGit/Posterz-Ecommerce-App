import React, { useState, useEffect } from "react";
import "./ProductDetails.scss";
import dummyImg from "../../assets/naruroFrame.jpg";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";

import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);

  const quantity = cart.find(item => item.key === params.productId)?.quantity || 0;

  async function fetchData() {
    const productResponse = await axiosClient.get(
      `/products?filters[key][$eq]=${params.productId}&populate=image`
    );

    // console.log("productResponse", productResponse);

    if (productResponse.data.data.length > 0) {
      setProduct(productResponse.data.data[0]);
    }
  }

  useEffect(() => {
    setProduct(null);
    fetchData();
  }, [params]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="productDetails ">
      <div className="container">
        <div className="product-layout">
          <div className="product-img center ">
            <img
              src={product.attributes.image.data.attributes.url}
              alt="product img"
            />
          </div>
          <div className="product-info">
            <h1 className="heading">{product.attributes.title}</h1>
            <h3 className="price">{product.attributes.price}</h3>
            <p className="description">{product.attributes.desc}</p>
            <div className="cart-option">
              <div className="quantity-selector">
                <span
                  className="btn decriment"
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  -
                </span>
                <span className="quantity">{quantity}</span>
                <span className="btn increment" onClick={()=>dispatch(addToCart(product))}>
                  +
                </span>
              </div>
              <button className="btn-primary add-to-cart" onClick={()=>dispatch(addToCart(product))}>Add to card</button>
            </div>
            <div className="return-policy">
              <ul>
                <li>
                  This product is made to oder and is typically printed in 3-6
                  working days, Your emter order will ship out togther
                </li>
                <li>
                  Since this product is printed on demand especilly for you,it
                  is for not eligible cancelled the return, Read our Return
                  Policy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
