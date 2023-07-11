import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "../components";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";
import "./style-shop.css";

const Shop = () => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);

      setLoading(true);
    };

    getCategoriesMap();
  }, []);

  console.log(Object.keys(categoriesMap));
  const categoryKeys = Object.keys(categoriesMap);
  const capitalizeFirstLetter = (word) =>
    word.replace(/^\w/, (c) => c.toUpperCase());

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const renderLoadingDiv = () => {
    return Array.from({ length: 15 }, (_, index) => (
      <div className="loading-div" key={index}>
        <div className="loadingImg"></div>
        <h2 className="shop-products-item-category">Espere</h2>
        <h2 className="shop-products-item-name">Estamos carregando</h2>
        <Rating
          name="half-rating-read"
          defaultValue={5}
          precision={0.5}
          readOnly
          sx={{
            fontSize: "2.3rem",
          }}
        />
        <h2 className="shop-products-item-price">R$ Boms preços </h2>
        <div className="shop-products-button">
          <Button text="Just a second" />
        </div>
      </div>
    ));
  };

  return (
    <section className="shop-products">
      {loading ? (
        <>
          <div className="category-buttons">
            <button
              className={`${
                selectedCategory === null ? "active" : ""
              } category-button btn btn-slide-about rounded-r-[2rem] rounded-b-[2rem] text-white `}
              onClick={() => handleCategorySelect(null)}>
              ALL
            </button>
            {categoryKeys.map((title) => (
              <button
                key={title}
                className={`${
                  selectedCategory === title ? "active" : ""
                } category-button btn btn-slide-about  rounded-r-[2rem] rounded-b-[2rem] text-white `}
                onClick={() => handleCategorySelect(title)}>
                {title.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="shop-products-items">
            {categoryKeys.map(
              (title) =>
                (selectedCategory === null || selectedCategory === title) &&
                categoriesMap[title].map((product) => (
                  <div className="shop-products-item relative" key={product.id}>
                    {product.offer.available ? (
                      <p className="absolute top-6 right-3 bg-[#82C55B] rounded-full text-[1.3rem] text-white w-[80px] h-[80px] flex justify-center items-center">
                        Promoção!
                      </p>
                    ) : (
                      ""
                    )}
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
                          R$ {product.price}
                        </span>{" "}
                        R$ {product.offer.price}
                      </h2>
                    ) : (
                      <h2 className="shop-products-item-price">
                        R$ {product.price}
                      </h2>
                    )}
                    <div className="shop-products-button">
                      <Button text="Adicionar ao carrinho" />
                    </div>
                  </div>
                ))
            )}
          </div>
        </>
      ) : (
        <div className="loading-layout">{renderLoadingDiv()}</div>
      )}
    </section>
  );
};

export default Shop;
