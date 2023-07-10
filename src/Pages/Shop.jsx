import React from 'react'

const Shop = () => {
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
