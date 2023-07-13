import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.scss";
import resetImg from "../../assets/image/passw.jpg";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const ResetPassword = (e) => {
    e.preventDefault();
    setIsloading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsloading(false);
        toast.success("Vui lòng kiểm tra email của bạn");
      })
      .catch((error) => {
        setIsloading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className="auth">
        <div className="auth-container">
          <div className="auth-img">
            <img src={resetImg} alt="Login" />
          </div>
          <div className="form">
            <h2>Reset Password</h2>
            <form onSubmit={ResetPassword}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Send
              </button>
              <div className="links">
                <p>
                  <Link to="/login">- Login</Link>
                </p>
                <p>
                  <Link to="/register">- Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reset;
