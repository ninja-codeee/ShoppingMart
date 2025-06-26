
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Cart = lazy(() => import("../pages/Cart"))
const AuthWrapper = lazy(() => import("./AuthWrapper"))
const PageNotFound = lazy(() => import("../pages/user/PageNotFound"))
const ProductDetails = lazy(() => import("../pages/user/UserProfile"))
const CreateProduct = lazy(() => import("../admin/CreateProduct"))
const Register = lazy(() => import("../pages/Register"))
const Login  = lazy(() => import("../pages/Login"))
const Products = lazy(() => import("../pages/Products"))
const Home = lazy(() => import("../pages/Home"))
const UserProfile = lazy(() => import("../pages/user/UserProfile"));




const Mainroutes = () => {
  return (  
    <div className="text-white w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />


// Auth routes


       

        <Route
        path="/admin/create-product"
         element={
         <AuthWrapper>
          <CreateProduct />
         </AuthWrapper>
         }
          />

        <Route path="/admin/user-profile" element={
          
         <AuthWrapper>

          <UserProfile />
          
         </AuthWrapper> 
          } />

        <Route path="/admin/product/:id" element={
          
          <AuthWrapper>

          <ProductDetails />
          
          </AuthWrapper>
          
          } />
        <Route path="cart" element={
          
          <AuthWrapper>

          <Cart />
          
          </AuthWrapper>
          
          } />

   



        <Route path="*" element={<PageNotFound />} />
      </Routes>

      
    </div>

    
  );
};

export default Mainroutes;
