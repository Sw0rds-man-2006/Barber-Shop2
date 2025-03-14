import useAuthStore from "../stores/Authentication";
import Login from "../components/authentication/Login.jsx";
import Signup from "../components/authentication/SignUp.jsx";
import ResetPassword from "../components/authentication/ResetPassword.jsx";
import Confrimcode from "../components/authentication/confrimcode.jsx";
const Authentication = () => {
  const { currentAuthPage } = useAuthStore(); // دریافت وضعیت از استور

  return (
    <div className="bg w-100vw h-95vh min-h-600px overflow-hidden">
      {currentAuthPage === "login" && <Login />}
      {currentAuthPage === "signup" && <Signup />}
      {currentAuthPage === "reset" && <ResetPassword />}
      {currentAuthPage === "confrim" && <Confrimcode />}
    </div>
  );
};

export default Authentication;
