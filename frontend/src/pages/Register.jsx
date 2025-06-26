<div className="min-h-screen w-screen bg-neutral-950 flex items-center justify-center px-4">
  <form
    onSubmit={handleSubmit(RegisterHandler)}
    className="w-full max-w-md backdrop-blur-xl bg-neutral-900/80 border border-neutral-800 p-10 rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.05)] flex flex-col gap-7 animate-fade-in"
  >
    <h2 className="text-3xl font-bold text-center text-white tracking-wide">
      Join <span className="text-amber-400">Sheryians Mart</span>
    </h2>

    <p className="text-center text-sm text-neutral-400">
      Let's get you started on your journey 👑
    </p>

    <input
      {...register('username')}
      type="text"
      placeholder="Choose your username"
      className="w-full px-4 py-3 rounded-xl bg-neutral-800 text-white placeholder:text-neutral-500 border border-neutral-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
    />

    <input
      {...register('email')}
      type="email"
      placeholder="Your email address"
      className="w-full px-4 py-3 rounded-xl bg-neutral-800 text-white placeholder:text-neutral-500 border border-neutral-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
    />

    <input
      {...register('password')}
      type="password"
      placeholder="Create a strong password"
      className="w-full px-4 py-3 rounded-xl bg-neutral-800 text-white placeholder:text-neutral-500 border border-neutral-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
    />

    <button
      type="submit"
      className="mt-4 w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 transition-colors text-black font-semibold tracking-wide shadow-md shadow-amber-900"
    >
      Register
    </button>

    <p className="text-center text-sm text-neutral-500">
      Already have an account?{' '}
      <Link
        to="/login"
        className="text-amber-400 hover:underline transition"
      >
        Log in
      </Link>
    </p>
  </form>
</div>
