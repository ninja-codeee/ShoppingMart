import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { asyncdeleteproduct, asyncloadproducts, asyncupdateproduct } from '../store/actions/productAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const ProductDetails = () => {
  const { id } = useParams();
  const {
    productReducer:{ products } ,
   userReducer : { users },
   } = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);
  console.log(product,users);
  

const navigate = useNavigate();

  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (product) {
      reset({
        image: product.image,
        title: product.title,
        price: product.price,
        description: product.description,
      });
    }
  }, [product, reset]);

  const UpdateproductHandler = (data) => {
    dispatch(asyncupdateproduct({ ...data, id: product.id }

    ));

    dispatch(asyncloadproducts())
  };

 const DeleteHandler = (id) => {
  dispatch(asyncdeleteproduct(id));
  navigate("/products");
  
 }
   


  if (!product) {
    return (
      <div className="text-white text-center py-20 text-xl animate-pulse">
        ⚠️ Product not found or still loading...
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 p-6">

    {product ? (
      <>
        <div className="max-w-4xl mx-auto p-6 my-10 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl shadow-[0_0_50px_#0ff5] border border-zinc-800 text-white">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-72 object-contain rounded-2xl border border-zinc-700 mb-6 shadow-md"
          />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
            {product.title}
          </h1>
          <h3 className="text-xl font-semibold text-green-400 mt-2">₹ {product.price}</h3>
          <p className="text-zinc-300 mt-4">{product.description}</p>
          <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-300 text-black font-bold hover:shadow-[0_0_30px_#0ff5] transition">
            🛒 Add to Cart
          </button>
        </div>


        {users && users.isAdmin &&  
        
        <form
          onSubmit={handleSubmit(UpdateproductHandler)}
          className="w-full max-w-3xl mx-auto mt-10 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black p-12 rounded-3xl border border-zinc-800 shadow-[0_0_100px_#0ff5] flex flex-col gap-8 transition-all duration-500"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-center bg-gradient-to-r from-sky-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
            ✨ Update Product
          </h2>

          <p className="text-center text-base text-zinc-400">
            You’re in full control. Update with precision. Build with purpose.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input {...register('title')} type="text" placeholder="Product Title" className="..." />
            <input {...register('price')} type="number" placeholder="Price (₹)" className="..." />
          </div>

          <input {...register('image')} type="url" placeholder="Image URL" className="..." />
          <textarea {...register('description')} rows="5" placeholder="Description..." className="..." />

          <button
  type="submit"
  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 hover:from-green-400 hover:to-green-600 transition-all duration-300 ease-in-out"
>
  ✅ Update Product
</button>
          <button
  type="button"
          onClick={()=> DeleteHandler(product.id)}
  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 hover:from-red-400 hover:to-red-600 transition-all duration-300 ease-in-out"
>
   Delete Product
</button>
        </form> 
        
        }



        
      </>
    ) : (
      <div className="text-white text-center py-20 text-xl animate-pulse">
        ⏳ Loading product details...
      </div>
    )}
  </div>
);

};

export default ProductDetails;
