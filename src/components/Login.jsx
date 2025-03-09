import { useState, useEffect } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../servise/auth";
import { Validation } from "../components";
import {
  signinUserFailure,
  signinUserStart,
  signinUserSuccess,
} from "../slice/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(signinUserStart());
    const user = { email, password };
    try {
      const response = await AuthService.userLogin(user);
      dispatch(signinUserSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(signinUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) navigate("/");
  }, []);

  return (
    <form className="form">
      <h2>Log In</h2>
      <Validation />
      <Input
        type={"email"}
        placeholder={"Email"}
        state={email}
        setState={setEmail}
      />
      <Input
        type={"password"}
        placeholder={"Password"}
        state={password}
        setState={setPassword}
      />
      <button
        className="btn btn-soft btn-primary"
        onClick={onSubmit}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "loading..." : "LogIn"}
      </button>
    </form>
  );
}

export default Login;
