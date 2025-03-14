import useAuthStore from "../../stores/Authentication.js";
import { useRef } from "react";

const Signup = () => {
  const { setAuthPage, apiBaseUrl } = useAuthStore();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const IsBarber = useRef(null);
  const stats = 0;

  function registerUser(event) {
    event.preventDefault(); // جلوگیری از رفرش شدن صفحه

    const data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      isbarber: IsBarber.current.value,
    };

    fetch(`${apiBaseUrl}/signup/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
        console.log(response.status);
        if (response.status == 200) {
          alert("کد تایید به ایمیل شما ارسال شد!");
          setAuthPage("confrim");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="auth-card mx-auto my-5%">
      <h2 className="auth-title">Sign up</h2>
      <form>
        <label className="auth-label" htmlFor="name">
          Name
        </label>
        <input ref={name} className="auth-input" id="name" />

        <label className="auth-label" htmlFor="email">
          Email
        </label>
        <input ref={email} className="auth-input" type="email" id="email" />

        <label className="auth-label" htmlFor="password">
          Password
        </label>
        <div className="password-wrapper">
          <input
            ref={password}
            className="auth-input"
            type="password"
            id="password"
          />
        </div>

        <div className="flex m-3">
          <span> i'm a barber </span>
          <input type="CheckBox" className="ml3" required ref={IsBarber} />
        </div>

        <button className="auth-btn signup-btn" onClick={registerUser}>
          Sign up
        </button>
      </form>

      <p className="auth-footer">
        Already have an account?{" "}
        <a
          onClick={() => setAuthPage("login")}
          className="auth-link cursor-pointer"
        >
          Log in here!
        </a>
      </p>
    </div>
  );
};

export default Signup;
