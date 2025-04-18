import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();
  return (
    <section className="login-container">
      <Link to=".." className="back-button">
        <IoArrowBack /> <span>Back</span>
      </Link>
      <h1>Welcome Back</h1>
      <p className="login-to-continue">Login to continue</p>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <label>Phone number</label>
        <input
          {...register("telnumber", { required: true })}
          placeholder="Tel number"
        />
        {errors.telnumber && <p className="required">Tel number is required</p>}
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && <p className="required">Password is required</p>}
        <button type="submit" onClick={() => navigate("/home")}>
          Log in
        </button>
        <p className="login-terms">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}
