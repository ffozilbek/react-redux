import { useState } from "react";
import { Input } from "./ui";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../servise/auth";
import { Validation } from "../components";
import {
  signinUserFailure,
  signinUserStart,
  signinUserSuccess,
} from "../slice/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(signinUserStart());
    const user = { email, password };
    try {
      const response = await AuthService.userLogin(user);
      dispatch(signinUserSuccess(response.user));
      console.log(response);
    } catch (error) {
      dispatch(signinUserFailure(error.response.data.errors));
    }
  };

  return (
    <form className="form">
      <h2>Log In</h2>
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
