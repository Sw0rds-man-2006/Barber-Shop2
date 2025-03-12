import useAuthStore from "../stores/Authentication.js";
import "../css/login.css";
import { useRef } from "react";

const ResetPassword = () => {
  const { setAuthPage, apiBaseUrl } = useAuthStore();

  const email = useRef(null);
  const newPassword = useRef(null);

  function sendCode(event) {
    event.preventDefault();

    const data = {
      email: email.current.value,
      new_password: newPassword.current.value,
    };

    fetch(`${apiBaseUrl}/reset-password/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("response data:", data);
        alert("کد به ایمیل شما ارسال شد!");
        setAuthPage("confirm");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("مشکلی رخ داد، دوباره تلاش کنید.");
      });
  }

  return (
    <div className="auth-card mx-auto my-5%">
      <h2 className="auth-title">Reset password</h2>
      <form onSubmit={sendCode}>
        <label className="auth-label" htmlFor="email">
          Email
        </label>
        <input
          className="auth-input"
          ref={email}
          type="email"
          id="forgotEmail"
        />

        <label className="auth-label" htmlFor="password">
          New password
        </label>
        <div className="password-wrapper">
          <input
            className="auth-input"
            ref={newPassword}
            type="text"
            id="newpassword"
          />
        </div>

        <button type="submit" className="auth-btn login-btn">
          Submit
        </button>
      </form>

      <p className="auth-footer">
        <a
          className="auth-link cursor-pointer"
          onClick={() => setAuthPage("login")}
        >
          Back to login
        </a>
      </p>
    </div>
  );
};

export default ResetPassword;
