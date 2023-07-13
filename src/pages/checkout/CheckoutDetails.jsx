import React, { useState } from "react";
import "./Checkout.scss";
import { CountryDropdown } from "react-country-region-selector";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SAVE_SHIPPING_ADDRESS } from "../../redux/slice/checkoutSlice";
import CheckoutSummary from "../../components/checkoutSummary/CheckoutSummary";

const initialAddressState = {
  name: "",
  phone: "",
  city: "",
  country: "",
};

const CheckoutDetails = () => {
  const [shippingAddress, setShippingAddress] = useState({
    ...initialAddressState,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShipping = (e) => {
    const { name, value } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
    // console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SAVE_SHIPPING_ADDRESS(shippingAddress));
    navigate("/checkout");
  };

  return (
    <div className="container">
      <div className="breadcumb">
        <Link to="/">Home</Link>
        <span>
          <AiOutlineDoubleRight />
        </span>
        <Link to="/shop">ChekoutDetails</Link>
      </div>
      <div className="row flex-reverse">
        <div className="col-7 col-sm-12 ">
          <div className="custumer-info">
<<<<<<< HEAD
            <h2>Thông tin vận chuyển</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Họ tên</label>
=======
            <h2>Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>FullName</label>
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
                <input
                  type="text"
                  required
                  name="name"
                  value={shippingAddress.name}
                  onChange={(e) => handleShipping(e)}
                />
              </div>
              <div className="form-group">
<<<<<<< HEAD
                <label>Số điện thoại</label>
=======
                <label>Phone</label>
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
                <input
                  type="number"
                  required
                  name="phone"
                  value={shippingAddress.phone}
                  onChange={(e) => handleShipping(e)}
                />
              </div>
              <div className="form-group">
<<<<<<< HEAD
                <label>Địa chỉ</label>
=======
                <label>Address</label>
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
                <input
                  type="text"
                  required
                  name="city"
                  value={shippingAddress.city}
                  onChange={(e) => handleShipping(e)}
                />
              </div>
              <CountryDropdown
                className="form-group-select"
                valueType="short"
                value={shippingAddress.country}
                onChange={(val) =>
                  handleShipping({
                    target: {
                      name: "country",
                      value: val,
                    },
                  })
                }
              />
<<<<<<< HEAD
              <button className="--btn --btn-primary ">
                Tiến hành thanh toán
              </button>
=======
              <button className="--btn --btn-primary ">Make a payment</button>
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
            </form>
          </div>
        </div>
        <div className="col-5 col-sm-12 ">
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
