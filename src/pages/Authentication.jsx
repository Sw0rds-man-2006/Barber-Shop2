import useAuthStore from "../stores/Authentication";
import Login from "../components/Login.jsx";
import Signup from "../components/SignUp.jsx";
import ResetPassword from "../components/ResetPassword.jsx";
import Confrimcode from "../components/confrimcode.jsx";
const Authentication = () => {
  const { currentAuthPage } = useAuthStore(); // دریافت وضعیت از استور

  return (
    <div className="bg w-100vw h-92vh overflow-hidden">
      {currentAuthPage === "login" && <Login />}
      {currentAuthPage === "signup" && <Signup />}
      {currentAuthPage === "reset" && <ResetPassword />}
      {currentAuthPage === "confrim" && <Confrimcode />}
    </div>
  );
};

export default Authentication;
