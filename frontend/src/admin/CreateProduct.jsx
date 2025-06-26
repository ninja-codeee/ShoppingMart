import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asynccreateproduct } from '../store/actions/productaction';

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CreateproductHandler = (product) => {
    product.id = nanoid();
    dispatch(asynccreateproduct(product))
    console.log(product);
    navigate("/products");
    reset();
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-tr from-zinc-950 via-black to-zinc-900 flex items-center justify-center px-4">
      <form
  onSubmit={handleSubmit(CreateproductHandler)}
  className="w-full max-w-2xl bg-zinc-900/70 backdrop-blur-lg p-12 rounded-3xl border border-zinc-800 shadow-[0_0_80px_#0ff5] flex flex-col gap-8 animate-fade-in transition-all duration-500"
>
  <h2 className="text-4xl font-extrabold tracking-tight text-center bg-gradient-to-r from-sky-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
    ✨ Create a Product
  </h2>

  <p className="text-center text-base text-zinc-400">
    You’re in full control. Add with precision. Build with purpose.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <input
      {...register('title')}
      type="text"
      placeholder="Product Title"
      className="col-span-1 px-5 py-4 rounded-xl bg-zinc-800 text-white placeholder:text-zinc-500 border border-zinc-700 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400 transition-all"
    />

    <input
      {...register('price')}
      type="number"
      placeholder="Price (₹)"
      className="col-span-1 px-5 py-4 rounded-xl bg-zinc-800 text-white placeholder:text-zinc-500 border border-zinc-700 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400 transition-all"
    />
  </div>

  <input
    {...register('image')}
    type="url"
    placeholder="Image URL"
    className="w-full px-5 py-4 rounded-xl bg-zinc-800 text-white placeholder:text-zinc-500 border border-zinc-700 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 transition-all"
  />

  <textarea
    {...register('description')}
    rows="5"
    placeholder="Write a short product description..."
    className="w-full px-5 py-4 rounded-xl bg-zinc-800 text-white placeholder:text-zinc-500 border border-zinc-700 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
  />

  <button
    type="submit"
    className="w-full py-4 rounded-xl font-bold text-lg tracking-wide bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-300 text-zinc-900 hover:shadow-[0_0_40px_#0ff5] transition-all duration-300"
  >
    ✅ Create Product
  </button>
</form>

    </div>
  );
};

export default CreateProduct;
