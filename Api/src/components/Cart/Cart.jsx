import { useEffect, useState } from "react";
import './Cart.css';

function Cart() {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [carts, setCarts] = useState(initialCart);
  const [total, setTotal] = useState(0);

  const calculateTotal = (carts) => {
    return carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  useEffect(() => {
    const totalAmount = calculateTotal(carts);
    setTotal(totalAmount);
  }, [carts]);

  const handleInc = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    const newTotal = calculateTotal(updatedCart);
    setCarts(updatedCart);
    setTotal(newTotal);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    checkTotal(newTotal, updatedCart);
  };

  const handleDec = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    const newTotal = calculateTotal(updatedCart);
    setCarts(updatedCart);
    setTotal(newTotal);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    checkTotal(newTotal, updatedCart);
  };

  const RemoveItems = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    const newTotal = calculateTotal(updatedCart);
    setCarts(updatedCart);
    setTotal(newTotal);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    checkTotal(newTotal, updatedCart);
  };

  const checkTotal = (calculatedTotal, cart) => {
    const sum = calculateTotal(cart);
    if (calculatedTotal !== sum) {
      console.error("Total mismatch: calculated =", calculatedTotal, "expected =", sum);
    }
  };

  if (!carts.length) return <div className="empycart">Cart is Empty <span>add some Items</span></div>;

  return (
    <div className="container mx-auto mt-10">
      <div className="my-5">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="heading">
            <h1>Shopping Cart</h1>h
            <h2>{carts.length} Items</h2>
          </div>
          <hr />
          <div className="subheading mt-10 mb-5 row">
            <h3 className="col-6">Product Details</h3>
            <h3 className="col-2">Quantity</h3>
            <h3 className="col-2">Price</h3>
            <h3 className="col-2">Total</h3>
          </div>
          {carts.map((cart) => (
            <div className="flex items-center hover:bg-gray -mx-8 px-6 py-5" key={cart.id}>
              <div className="content col-12">
                <div className="w-20 col-2">
                  <img className="image" src={cart.image} alt="" />
                </div>
                <div className="description col-4">
                  <span className="category">{cart.category}</span>
                  <span className="title">{cart.title}</span>
                  <button
                    className="remove-btn bg-danger text-decoration-none my-2"
                    onClick={() => RemoveItems(cart.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="buttons col-2">
                  <button className="m-1" onClick={() => handleDec(cart.id)} disabled={cart.quantity <= 1}>
                    -
                  </button>
                  <input type="text" className="w-" value={cart.quantity} readOnly />
                  <button className="m-1" onClick={() => handleInc(cart.id)}>
                    +
                  </button>
                </div>
                <span className="col-2">${cart.price}</span>
                <span className="col-2">${(cart.price * cart.quantity).toFixed(2)}</span>
              </div>
              <hr />
            </div>
          ))}
          <button className="btn-left bg-info">Back to Shopping</button>
          <div className="text-right bg-info">
            <h3 className=" mt-4">Total: ${total.toFixed(2)}</h3>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;
