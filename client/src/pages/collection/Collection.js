import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Collection.scss";
import Product from "../../components/product/Product";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";
function Collection() {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState("");
  const categories = useSelector((state) => state.CategoryReducer.categories);
  const [products, setProducts] = useState([]);

  const sortOptions = [
    {
      // key: "price-asc",
      value: "Price-Low To High",
      sort: "price",
    },
    {
      // key: "newest-first",
      value: "Newest First",
      sort: "createdAt",
    },
  ];

  const [sortBy, setSortBy] = useState(sortOptions[0].sort);

  //this data come form react-redux using state menagment tool-kit.
  async function fetchProducts() {
    const url = params.categoryId ?  `/products?populate=image&filters[category][key][$eq]=${params.categoryId}&sort=${sortBy}` :
    `/products?populate=image&sort=${sortBy}`
    const response = await axiosClient.get(url);

    setProducts(response.data.data);
  }

  useEffect(() => {
    setCategoryId(params.categoryId);
    //api call
    fetchProducts();
  }, [params, sortBy]);

  function updateCategory(e) {
    navigate(`/category/${e.target.value}`);
  }
  // function handleSortChange(e) {
  //   const sortKey = e.target.value;
  //   setSortBy(sortKey)
  // }
  return (
    <div className="Collection">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Print and Artwork</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ratione?
            </p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <p className="sort-by-text">Sort by</p>
              <select
                className="select-sort-by"
                name="sort-by"
                id="sort-by"
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((item) => (
                  <option key={item.sort} value={item.sort}>{item.value} </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>category</h3>
              {categories.map((item) => (
                <div key={item.id} className="filter-radio">
                  <input
                    name="category"
                    type="radio"
                    id={item.id}
                    value={item.attributes.key}
                    onChange={updateCategory}
                    checked={item.attributes.key === categoryId}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="product-box">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;