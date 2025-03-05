import { Input } from "./ui";

function Login() {
  return (
    <form className="form">
      <h2>Log In</h2>
      <Input type={"text"} placeholder={"Username"} />
      <Input type={"password"} placeholder={"Password"} />
      <button className="btn btn-soft btn-primary">Log In</button>
    </form>
  );
}

export default Login;
