import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="register-container">
      <Link to=".." className="back-button">
        <IoArrowBack /> <span>Back</span>
      </Link>
      <h1>Create Account</h1>
      <p className="join-com">Join the quiz community</p>
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <label>First Name</label>
        <input
          {...register("firstname", { required: true })}
          placeholder="Enter your first name"
        />
        <label>Last Name</label>
        <input
          {...register("lastname", { required: true })}
          placeholder="Enter your last name"
        />
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
        <button type="submit">Log in</button>
        <p className="login-terms">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}
