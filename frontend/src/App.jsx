import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Mainroutes from "./routes/Mainroutes"
import Nav from "./components/Nav"
import { asynccurrentuser } from "./store/actions/userAction"
import { asyncloadproducts } from "./store/actions/productaction"


const App = () => {

  const dispatch = useDispatch();
 const { users } = useSelector((state) => state.userReducer);
  const {products} = useSelector((state) => state.productReducer)



  useEffect(()=>{
  !users &&   dispatch(asynccurrentuser());
  },[users])


  useEffect(()=>{
   products.length == 0  && dispatch(asyncloadproducts());
  },[products])



  return (
    <div className='bg-black h-full w-screen text-white'>

    <Nav />
    <Mainroutes />


    </div>
  )
}

export default App
