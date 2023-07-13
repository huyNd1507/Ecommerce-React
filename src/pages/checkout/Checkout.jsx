import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import {
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  selectCartItems,
  selectCartTotalAmount,
} from "../../redux/slice/cartSlice";
import { selectEmail } from "../../redux/slice/authSlice";
import { selectShippingAddress } from "../../redux/slice/checkoutSlice";
import { toast } from "react-toastify";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
<<<<<<< HEAD
=======
import { FadingBalls } from "react-cssfx-loading";
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Checkout = () => {
<<<<<<< HEAD
  const [message, setMessage] = useState("Đang tiến hành thanh toán...");
=======
  const [message, setMessage] = useState("Đang tiến hành thanh toán");
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
  const [clientSecret, setClientSecret] = useState("");

  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  const customerEmail = useSelector(selectEmail);
  const shippingAddress = useSelector(selectShippingAddress);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, [dispatch, cartItems]);

<<<<<<< HEAD
  // https://qhshop-ecommerce.onrender.com/create-payment-intent
=======
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
  // http://localhost:8080/create-payment-intent

  const description = `eShop payment: email: ${customerEmail}, Amount: ${totalAmount}`;
  useEffect(() => {
<<<<<<< HEAD
    fetch("https://qhshop-ecommerce.onrender.com/create-payment-intent", {
=======
    fetch("   https://qhshop-ecommerce.onrender.com/create-payment-intent", {
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartItems,
        userEmail: customerEmail,
        shipping: shippingAddress,
        description,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((json) => Promise.reject(json));
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        setMessage("Không thể bắt đầu thanh toán");
        toast.error("Đã xảy ra sự cố!!!");
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <section>
<<<<<<< HEAD
        <div className="container">{!clientSecret && <h3>{message}</h3>}</div>
=======
        <div>
          {!clientSecret && (
            <div className="initial-checkout">
              <h3>{message}</h3>
              <FadingBalls color="#FF0000" duration="3s" />
            </div>
          )}
        </div>
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
      </section>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise} key={clientSecret}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Checkout;
