import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);

  const baseLinkStyles = `relative px-4 py-2 text-base font-medium rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[1px] hover:scale-105 hover:text-sky-300`;

  return (
    <nav className="w-full backdrop-blur-md bg-black/50 border-b border-zinc-800 text-white px-6 py-4 flex justify-center items-center gap-6 sticky top-0 z-50 shadow-md">
      
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseLinkStyles} ${
            isActive
              ? "text-sky-400 bg-zinc-900/70 shadow-inner shadow-sky-400/30 ring-1 ring-sky-500/20"
              : ""
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          `${baseLinkStyles} ${
            isActive
              ? "text-sky-400 bg-zinc-900/70 shadow-inner shadow-sky-400/30 ring-1 ring-sky-500/20"
              : ""
          }`
        }
      >
        Products
      </NavLink>

      {user ? (
        <>
          {user?.isAdmin && (
            <NavLink
              to="/admin/create-product"
              className={`${baseLinkStyles} text-pink-400 hover:text-pink-300 hover:shadow-pink-500/20`}
            >
              Create Product
            </NavLink>
          )}

          {/* Settings Button */}
          <NavLink
            to="/admin/user-profile"
            className="relative group inline-flex items-center justify-center px-6 py-2 rounded-full font-medium bg-gradient-to-br from-fuchsia-700 to-pink-500 text-white border border-white/10 shadow-md transition-all duration-300 hover:scale-105 hover:ring-2 ring-pink-400/40"
          >
            <span className="absolute inset-0 rounded-full bg-white opacity-10 blur-lg group-hover:opacity-20 transition duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3a.75.75 0 00-.75.75v.43a6.966 6.966 0 00-2.556 1.473l-.305-.305a.75.75 0 00-1.06 1.06l.305.305A6.967 6.967 0 004.18 9.75h-.43a.75.75 0 000 1.5h.43a6.966 6.966 0 001.473 2.556l-.305.305a.75.75 0 101.06 1.06l.305-.305a6.967 6.967 0 002.556 1.473v.43a.75.75 0 001.5 0v-.43a6.966 6.966 0 002.556-1.473l.305.305a.75.75 0 101.06-1.06l-.305-.305a6.966 6.966 0 001.473-2.556h.43a.75.75 0 000-1.5h-.43a6.966 6.966 0 00-1.473-2.556l.305-.305a.75.75 0 00-1.06-1.06l-.305.305A6.966 6.966 0 0011.25 4.18v-.43A.75.75 0 0010.5 3h-.75zM12 15a3 3 0 110-6 3 3 0 010 6z"
                />
              </svg>
              Settings
            </span>
          </NavLink>

          {/* Cart Button */}
          <NavLink
            to="cart"
            className="relative group inline-flex items-center justify-center px-6 py-2 rounded-full font-medium bg-gradient-to-br from-cyan-700 via-sky-600 to-blue-700 text-white border border-white/10 shadow-md transition-all duration-300 hover:scale-105 hover:ring-2 ring-cyan-400/50"
          >
            <span className="absolute inset-0 rounded-full bg-white opacity-10 blur-lg group-hover:opacity-20 transition duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-cyan-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h13L17 13M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              Cart
            </span>
          </NavLink>
        </>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${baseLinkStyles} ${
              isActive
                ? "text-sky-400 bg-zinc-900/70 shadow-inner shadow-sky-400/30 ring-1 ring-sky-500/20"
                : ""
            }`
          }
        >
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
