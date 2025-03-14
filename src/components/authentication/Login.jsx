import useAuthStore from "../../stores/Authentication";
import "../../css/login.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Login = () => {
  const { setAuthPage, apiBaseUrl } = useAuthStore();
  const navigate = useNavigate(); // استفاده از useNavigate برای تغییر مسیر

  const phone_number = useRef(null);
  const password = useRef(null);

  function loginUser(event) {
    event.preventDefault(); // جلوگیری از رفرش شدن صفحه

    const data = {
      phone_number: phone_number.current.value,
      password: password.current.value,
    };

    fetch(`${apiBaseUrl}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) =>
        response.json().then((data) => {
          console.log("response data:", data);
          console.log(response.status);
          if (response.status === 200) {
            alert("شما وارد پنل خود شدید!");
            navigate("/panel"); // تغییر مسیر صحیح
          } else {
            alert("ورود ناموفق بود");
          }
        })
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="auth-card mx-auto my-5%">
      <h2 className="auth-title">Log in</h2>
      <form>
        <label className="auth-label" htmlFor="number">
          Phone number
        </label>
        <input
          className="auth-input"
          ref={phone_number}
          type="phone_number"
          id="loginphone_number"
        />

        <label className="auth-label" htmlFor="password">
          Password
        </label>
        <div className="password-wrapper">
          <input
            className="auth-input"
            ref={password}
            type="password"
            id="loginPassword"
          />
          <p
            onClick={() => setAuthPage("reset")}
            className="text-gray cursor-pointer"
          >
            i forgot my password
          </p>
        </div>

        <button
          type="submit"
          className="auth-btn login-btn"
          onClick={loginUser}
        >
          Log in
        </button>
      </form>

      <p className="auth-footer">
        Don't have an account?{" "}
        <a
          className="auth-link cursor-pointer"
          onClick={() => setAuthPage("signup")}
        >
          Sign up for free!
        </a>
      </p>
    </div>
  );
};

export default Login;
