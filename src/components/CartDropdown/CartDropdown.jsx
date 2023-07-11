import React, { useState } from "react";

const Cart = ({ cartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const itemInTheCart = cartItems
    .map((item) => item.quantity)
    .reduce((acc, item) => acc + item, 0);
  const capitalizeFirstLetter = (word) =>
    word.replace(/^\w/, (c) => c.toUpperCase());
  return (
    <>
      {isCartOpen ? (
        <div className="text-[2.6rem] fixed top-0 right-[0] w-[50rem] bg-white z-[250] h-[100vh] is-cart-open py-[2rem] px-[1.2rem]">
          <div className="flex justify-around items-center">
            <h2>Shopping Cart</h2>
            <i
              className="fa-solid fa-x text-[2rem] cursor-pointer"
              onClick={() => {
                isCartOpen && setIsCartOpen(false);
              }}></i>
          </div>

          <div className="overflow-y-scroll h-[80%] flex gap-[2rem] flex-col my-[2rem]">
            {cartItems.map((cartItem) => (
              <div className="flex items-center justify-between">
                <div className="flex gap-[2rem] items-center">
                  <img
                    src={cartItem.image}
                    className="w-[100px] h-[100px] border-solid border-1 border-[#ccc] rounded-[1.2rem]"
                  />
                  <div>
                    <h2>{capitalizeFirstLetter(cartItem.name)}</h2>
                    {cartItem.offer.available ? (
                      <h2>
                        <i class="fa-solid fa-arrow-left"></i>{" "}{cartItem.quantity}{" "}<i class="fa-solid fa-arrow-right"></i> x R$ {cartItem.offer.price}
                      </h2>
                    ) : (
                      <h2>
                        <i class="fa-solid fa-arrow-left"></i>
                        {" "}{cartItem.quantity}{" "}
                        <i class="fa-solid fa-arrow-right"></i> x R${" "}
                        {cartItem.price}
                      </h2>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center cursor-pointer mr-[1rem] h-[25px] w-[25px] bg-[#fbb042] rounded-full">
                  <i className="fa-solid fa-x text-[1rem] "></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="absolute top-[10rem] right-[13rem] z-[102]">
        <div
          className="text-[2rem] w-[50px] h-[50px] bg-[#fbb042] rounded-full flex justify-center items-center fixed cursor-pointer text-white hover:border-solid hover:border-2 hover:bg-white  hover:text-[#fbb042]"
          onClick={() => {
            setIsCartOpen(true);
          }}>
          <i className="fa-solid fa-cart-shopping text-[1.6rem]"></i>
        </div>

        {itemInTheCart > 0 && (
          <div className="text-[1.2rem] w-[25px] h-[25px] bg-[#fbb042] rounded-full flex justify-center items-center fixed cursor-pointer text-white mx-[3.6rem] z-[190] my-[-0.5rem]">
            <p>{itemInTheCart >= 99 ? "99+" : itemInTheCart}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
