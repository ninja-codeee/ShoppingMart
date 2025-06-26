import { useDispatch , useSelector } from 'react-redux'
import { asyncupdateusers } from '../store/actions/userAction';

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const IncreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    copyuser.cart[index] = {
      product,
      quantity: copyuser.cart[index].quantity + 1,
    };

    dispatch(asyncupdateusers(copyuser.id, copyuser));
  };

  const DecreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    const currentQty = copyuser.cart[index].quantity;
    if (currentQty > 1) {
      copyuser.cart[index] = {
        product,
        quantity: currentQty - 1,
      };

      dispatch(asyncupdateusers(copyuser.id, copyuser));
    }
  };
const DelteCartHandler = (index) => {
  const copyuser = {...users , cart : [...users.cart]};

  copyuser.cart.splice(index , 1);

  dispatch(asyncupdateusers(copyuser.id , copyuser))
}
  const cartItems = users?.cart?.length > 0 ? users.cart.map((c, index) => {
    return (
      <li
        key={c.product.id}
        className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-md p-5 mb-6 hover:shadow-green-500/20 transition-shadow duration-300"
      >
        <img
          className="w-32 h-32 object-contain rounded-xl bg-zinc-800 p-2 shadow-inner"
          src={c.product.image}
          alt={c.product.title}
        />

        <div className="flex-1 text-white">
          <h2 className="text-lg font-semibold mb-1 tracking-wide">{c.product.title}</h2>
          <p className="text-sm text-gray-400 mb-2">Price: <span className="text-green-400 font-medium">${c.product.price}</span></p>
          <p className="text-sm text-gray-400 mb-4">Qty: <span className="text-white font-medium">{c.quantity}</span></p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => DecreaseQuantityHandler(index, c.product)}
              className="bg-zinc-800 hover:bg-zinc-700 text-white text-lg px-3 py-1 rounded-lg border border-zinc-600"
            >-</button>
            <span className="text-white font-bold">{c.quantity}</span>
            <button
              onClick={() => IncreaseQuantityHandler(index, c.product)}
              className="bg-green-600 hover:bg-green-500 text-white text-lg px-3 py-1 rounded-lg"
            >+</button>
          </div>
          <button
  onClick={() => DelteCartHandler(index)}
  className="mt-4 bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-lg text-sm"
>
  ❌ Delete
</button>

        </div>
      </li>
    );
  }) : (
    <p className="text-white text-center mt-10 text-lg">🛒 Cart is empty or user not loaded.</p>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-black py-10 px-4">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">🛍️ Your Cart</h1>
      <ul className="max-w-4xl mx-auto space-y-4">{cartItems}</ul>
    </div>
  );
};

export default Cart;
