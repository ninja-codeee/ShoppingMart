import { useForm } from 'react-hook-form';
import { Link , useNavigate } from 'react-router-dom';
import { asyncloginuser } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Loginhandler = (user) => {
    dispatch(asyncloginuser(user));
    navigate("/")   
    reset();
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-zinc-800 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(Loginhandler)}
        className="w-full max-w-sm bg-zinc-900 p-8 rounded-2xl shadow-[0_0_40px_-10px_rgba(0,255,255,0.3)] border border-zinc-700 flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-2 tracking-tight">
          Login to Sheryians Mart
        </h2>

        <input
          {...register('email')}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white placeholder-zinc-400 border border-transparent focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500 transition"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white placeholder-zinc-400 border border-transparent focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500 transition"
        />

        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-xl shadow-lg transition"
        >
          Login
        </button>
        <Link
  to="/register"
  className="text-sm text-zinc-400 hover:text-teal-400 transition-all duration-300 hover:tracking-wide hover:scale-105 text-center"
>
  Don't have an account? <span className="underline underline-offset-2">Register</span>
</Link>

      </form>
    </div>
  );
};

export default Login;
