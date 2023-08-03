import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import ConsumerLoginPage from "../pages/consumer/ConsumerLoginPage";
import FarmerLoginPage from "../pages/farmer/FarmerLoginPage";



const router = createBrowserRouter([

  {
    path:"/",
    element: <MainPage></MainPage>

  },
  {
    path:"/mypage",
    element: <MyPage></MyPage>

  },
  {
    path:"/cocofarm/consumer/login",
    element:<ConsumerLoginPage></ConsumerLoginPage>
  },  
  {
    path:"/cocofarm/farmer/login",
    element:<FarmerLoginPage></FarmerLoginPage>
      
  },

            


])

export default router;