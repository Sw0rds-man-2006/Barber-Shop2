import useAuthStore from "../../stores/Authentication.js";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const ConfirmCode = () => {
  const { setAuthPage, apiBaseUrl } = useAuthStore();
  const navigate = useNavigate();

  const code = useRef(null);

  function verifyCode(event) {
    event.preventDefault();

    const data = {
      code: code.current.value,
    };

    fetch(`${apiBaseUrl}/verify/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
        console.log("response data:", data);
        if (response.status == 200) {
          alert("کد تایید صحیح بود!");
          navigate("/panel");
        } else {
          alert("کد تایید اشتباه است");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("مشکلی رخ داد، دوباره تلاش کنید.");
      });
  }

  return (
    <div className="auth-card mx-auto my-5%">
      <h2 className="auth-title">Confirm Code</h2>
      <form onSubmit={verifyCode}>
        <p>A code has been sent to your email</p>
        <label className="auth-label" htmlFor="code">
          Enter the code
        </label>
        <input className="auth-input" type="text" ref={code} id="code" />

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

export default ConfirmCode;
