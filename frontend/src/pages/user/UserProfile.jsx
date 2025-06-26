import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { asyncdeleteuser, asynclogoutuser, asyncupdateusers } from '../../store/actions/userAction';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const {
    userReducer: { users },
  } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const UpdateUserHandler = (data) => {
    console.log(data);
    dispatch(asyncupdateusers({ ...data, id: users?.id }));
  };

  const LogoutHandler = () => {
    dispatch(asynclogoutuser(users.id));
    navigate('/login');
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(users.id));
    navigate('/login');
  };

  return users ? (
    <div 
    
    className="relative min-h-screen bg-[#0e0e0e] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-5 z-0"
        style={{
          backgroundImage: `url('/assets/snacks-dabba-logo.png')`, // 🖼 Replace with actual path
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0f0f]/80 to-[#111]/90 backdrop-blur-md z-0" />

      <div
      
      
      className="relative z-10 w-full px-4 sm:px-0">
        <form
          onSubmit={handleSubmit(UpdateUserHandler)}
          className="w-full max-w-2xl mx-auto bg-[#0f0f0f] px-12 py-10 rounded-3xl border border-neutral-800 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col gap-8 transition-all duration-300"
        >

          <h2 className="text-4xl font-bold text-center text-neutral-100 tracking-tight">
           Hii, {users.username}
          </h2>
          <h2 className="text-4xl font-bold text-center text-neutral-100 tracking-tight">
            🛠️ Update Your Profile
          </h2>

          <p className="text-center text-sm text-neutral-400">
            Manage your identity with elegance and intent.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              {...register('username')}
              type="text"
              placeholder="Username"
              className="bg-[#1a1a1a] text-white px-5 py-3 rounded-xl border border-neutral-700 focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-neutral-500 text-sm transition-all"
            />
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="bg-[#1a1a1a] text-white px-5 py-3 rounded-xl border border-neutral-700 focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-neutral-500 text-sm transition-all"
            />
          </div>

          <input
            {...register('password')}
            type="password"
            placeholder="Password"
            className="bg-[#1a1a1a] text-white px-5 py-3 rounded-xl border border-neutral-700 focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-neutral-500 text-sm transition-all"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-between mt-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              ✅ Update User
            </button>

            <button
              type="button"
              onClick={LogoutHandler}
              className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              🚪 Logout
            </button>

            <button
              type="button"
              onClick={DeleteHandler}
              className="flex-1 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              ❌ Delete User
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <p className="text-center text-white mt-10">Loading...Please Wait</p>
  );
};

export default UserProfile;
  