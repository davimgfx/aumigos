import React, { useState, useRef, useEffect} from "react";

const Cart = ({ cartItems, setCartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const itemInTheCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const itemPriceTotal = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  const cartRef = useRef(null);

  console.log(itemPriceTotal)
  const capitalizeFirstLetter = (word) =>
    word.replace(/^\w/, (c) => c.toUpperCase());

  const addCartItem = (productToAdd) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    if (updatedCartItems.find((cartItem) => cartItem.id === productToAdd.id)) {
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...updatedCartItems, { ...productToAdd, quantity: 1 }]);
    }
  };

  const removeCartItem = (productToRemove) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? {
            ...cartItem,
            quantity:
              cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity,
          }
        : cartItem
    );

    if (
      updatedCartItems.find((cartItem) => cartItem.id === productToRemove.id)
    ) {
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...updatedCartItems, { ...productToRemove, quantity: 1 }]);
    }
  };

  const clearCartItem = (productToClear) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== productToClear.id
    );
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isCartOpen && (
        <div className="text-[2.6rem] fixed top-0 right-[0] w-[50rem] bg-white z-[250] h-[100vh] is-cart-open py-[2rem] px-[1.2rem]"  ref={cartRef}>
          <div className="flex justify-around items-center">
            <h2>Shopping Cart ({itemInTheCart})</h2>
            <i
              className="fa-solid fa-x text-[2rem] cursor-pointer"
              onClick={() => setIsCartOpen(false)}></i>
          </div>

          <div className="overflow-y-scroll h-[80%] flex gap-[2rem] flex-col my-[2rem]">
            {cartItems.map((cartItem) => (
              <div
                className="flex items-center justify-between"
                key={cartItem.id}>
                <div className="flex gap-[2rem] items-center">
                  <img
                    src={cartItem.image}
                    className="w-[100px] h-[100px] border-solid border-1 border-[#ccc] rounded-[1.2rem]"
                    alt={cartItem.name}
                  />
                  <div className="text-[1.4rem] text-[#383838]">
                    <h2 className="text-[1.8rem] text-black">
                      {capitalizeFirstLetter(cartItem.name)}
                    </h2>
                    <h2>
                      <i
                        className="fa-solid fa-arrow-left cursor-pointer"
                        onClick={() => removeCartItem(cartItem)}></i>{" "}
                      {cartItem.quantity}{" "}
                      <i
                        className="fa-solid fa-arrow-right cursor-pointer"
                        onClick={() => addCartItem(cartItem)}></i>{" "}
                      x R${" "}
                      {cartItem.offer.available
                        ? cartItem.offer.price
                        : cartItem.price}
                    </h2>
                  </div>
                </div>
                <div
                  className="flex justify-center items-center cursor-pointer mr-[1rem] h-[25px] w-[25px] bg-[#fbb042] rounded-full"
                  onClick={() => clearCartItem(cartItem)}>
                  <i className="fa-solid fa-x text-[1rem] "></i>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-around items-center text-[2.2rem] text-[#383838] ">
            <h2>SubTotal:</h2>
            <h2>R$ {itemPriceTotal.toFixed(2)}</h2>
          </div>
        </div>
      )}
      <div className="absolute top-[10rem] right-[13rem] z-[102]">
        <div
          className="text-[2rem] w-[50px] h-[50px] bg-[#fbb042] rounded-full flex justify-center items-center fixed cursor-pointer text-white hover:border-solid hover:border-2 hover:bg-white  hover:text-[#fbb042]"
          onClick={() => setIsCartOpen(true)}>
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
