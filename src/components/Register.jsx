import { Input } from "./ui";

function Register() {
  return (
    <form className="form">
      <h2>Resgister</h2>
      <Input type={"text"} placeholder={"Username"} />
      <Input type={"email"} placeholder={"Email"} />
      <Input type={"password"} placeholder={"Password"} />
      <button className="btn btn-soft btn-primary">Sign In</button>
    </form>
  );
}

export default Register;
