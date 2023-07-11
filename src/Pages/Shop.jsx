import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import { Button } from "../components";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";
import "./style-shop.css";
const Shop = () => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
      setLoading(true);
    };

    getCategoriesMap();
  }, []);

  const categoryKeys = Object.keys(categoriesMap);
  const capitalizeFirstLetter = (word) =>
    word.replace(/^\w/, (c) => c.toUpperCase());

  const renderLoadingDiv = () => {
    return Array.from({ length: 15 }, (_, index) => (
      <div className="loading-div" key={index}>
        <div className="loadingImg"></div>
        <h2 className="shop-products-item-category">WAIT</h2>
        <h2 className="shop-products-item-name">We are loading</h2>
        <Rating
          name="half-rating-read"
          defaultValue={5}
          precision={0.5}
          readOnly
          sx={{
            fontSize: "2.3rem",
          }}
        />
        <h2 className="shop-products-item-price">$ Nice Prices </h2>
        <div className="shop-products-button">
          <Button text="Just a second" />
        </div>
      </div>
    ));
  };

  return (
    <section className="shop-products">
      {loading ? (
        <div className="shop-products-items">
          {categoryKeys.map((title) =>
            categoriesMap[title].map((product) => (
              <div className="shop-products-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="shop-products-item-image"
                />
                <h2 className="shop-products-item-category">
                  {title.toUpperCase()}
                </h2>
                <h2 className="shop-products-item-name">
                  {capitalizeFirstLetter(product.name)}
                </h2>
                <Rating
                  name="half-rating-read"
                  defaultValue={product.rate}
                  precision={0.5}
                  readOnly
                  sx={{
                    fontSize: "2.3rem",
                  }}
                />
                {product.offer.available ? (
                  <h2 className="shop-products-item-price">
                    <span className="shop-products-item-old-price">
                      $ {product.price}
                    </span>{" "}
                    $ {product.offer.price}
                  </h2>
                ) : (
                  <h2 className="shop-products-item-price">
                    $ {product.price}
                  </h2>
                )}
                <div className="shop-products-button">
                  <Button text="Add to cart" />
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="loading-layout">{renderLoadingDiv()}</div>
      )}
    </section>
  );
};

export default Shop;