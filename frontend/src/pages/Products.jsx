import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateusers } from "../store/actions/userAction";
import { useEffect, useState, useCallback } from "react";
import axios from "../api/axiosconfig";
import InfiniteScroll from "react-infinite-scroll-component";
import debounce from "lodash.debounce";

const Products = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchproducts = useCallback(
    debounce(async () => {
      if (isLoading || !hasMore) return;
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `/products?_limit=6&_start=${products.length}`
        );
        if (data.length < 6) setHasMore(false);
        setProducts((prev) => [...prev, ...data]);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    [products.length, hasMore, isLoading]
  );

  useEffect(() => {
    fetchproducts();
  }, []);

  const AddtoCartHandler = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const index = copyuser.cart.findIndex((c) => c?.product.id === product.id);
    if (index === -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[index].quantity += 1;
    }
    dispatch(asyncupdateusers(users.id, copyuser));
  };

  const renderproduct = products.map((product) => (
    <div
      key={product.id}
      className="relative group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-md hover:shadow-green-400/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
    >
      <div className="overflow-hidden rounded-t-3xl bg-zinc-800">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-56 w-full object-contain p-5 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h1 className="text-xl font-bold mb-2 text-white line-clamp-1 tracking-tight">
            {product.title}
          </h1>
          <p className="text-sm text-gray-300 mb-4 line-clamp-3 leading-relaxed">
            {product.description}
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-extrabold text-emerald-400">
              ${product.price}
            </p>
            <button
              onClick={() => AddtoCartHandler(product)}
              className="bg-gradient-to-tr from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 px-6 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-green-300/30 active:scale-95 transition-all"
            >
              🎢 Add to Cart
            </button>
          </div>
          <Link
            to={`/admin/product/${product.id}`}
            className="text-xs mt-4 inline-block underline underline-offset-4 text-emerald-300 hover:text-emerald-400 transition"
          >
            More Info →
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-black text-white px-4 py-14">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-400 drop-shadow-sm">
          🎩 Explore Our Premium Collection
        </h1>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Curated for modern devs. Shop the essentials with style.
        </p>
      </div>

      <InfiniteScroll
        dataLength={products.length}
        next={fetchproducts}
        hasMore={hasMore}
        loader={
          <div className="text-center py-6 text-gray-400 animate-pulse">
            Loading more products...
          </div>
        }
        endMessage={
          <div className="text-center py-6 text-gray-400">
            You've seen it all... for now 😎
          </div>
        }
        scrollThreshold={0.9}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {renderproduct}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Products;
