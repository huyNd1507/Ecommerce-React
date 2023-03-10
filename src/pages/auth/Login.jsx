import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { BsGoogle } from "react-icons/bs";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import "./Auth.scss";
import loginImage from "../../assets/image/login.webp";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";
import { selectPreviousURL } from "../../redux/slice/cartSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const previousURL = useSelector(selectPreviousURL);
  const navigate = useNavigate();

  const redicretUser = () => {
    if (previousURL.includes("cart")) {
      return navigate("/cart");
    }
    navigate("/");
  };

  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsloading(false);
        toast.success("Đăng nhập thành công");
        redicretUser();
      })
      .catch((error) => {
        setIsloading(false);
        toast.error(error.message);
      });
  };

  // SignIn with Google
  const provider = new GoogleAuthProvider();
  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Đăng nhập thành công");
        redicretUser();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className="auth">
        <div className="auth-container">
          <div className="auth-img">
            <img src={loginImage} alt="Login" />
          </div>
          <div className="form">
            <h2>Đăng nhập</h2>
            <form onSubmit={loginUser}>
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
              <button type="submit" className="--btn --btn-primary --btn-block">
                Đăng nhập
              </button>
              <div className="links">
                <Link to="/reset">Quên mật khẩu ?</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block"
              onClick={signWithGoogle}
            >
              <BsGoogle className="button-icon" /> Đăng nhập với Google
            </button>
            <span className="register">
              <p>Bạn đã có tài khoản chưa?</p>
              <Link to="/register">Đăng kí</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
