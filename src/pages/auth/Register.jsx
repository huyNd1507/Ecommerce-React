import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./Auth.scss";
import registerImage from "../../assets/image/register.jpg";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
<<<<<<< HEAD
      toast.error("Mật khẩu không khớp!");
=======
      toast.error("Password incorrect!");
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
    }
    setIsloading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsloading(false);
<<<<<<< HEAD
        toast.success("Đăng kí thành công ");
=======
        toast.success("Sign up successfully ");
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsloading(false);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <section className="auth">
        <div className="auth-container">
          <div className="form">
<<<<<<< HEAD
            <h2>Đăng ký</h2>
=======
            <h2>Register</h2>
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Xác nhận mật khẩu"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
<<<<<<< HEAD
                Đăng ký
=======
                Register
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
              </button>
            </form>

            <span className="register">
<<<<<<< HEAD
              <p>Bạn đã có tài khoản chưa?</p>
              <Link to="/login">Đăng nhập</Link>
=======
              <p>Do you already have an account??</p>
              <Link to="/login">Log in</Link>
>>>>>>> 1cfc79a1489f45257e8f8bf8e8a4f9f42e8497e3
            </span>
          </div>
          <div className="auth-img">
            <img src={registerImage} alt="Login" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
