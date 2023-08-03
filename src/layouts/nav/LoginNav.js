import { Link } from "react-router-dom";


const LoginNav = () => {
  return ( 

    <div>
      <Link to="/cocofarm/farmer/login">
        <button 
        className="border-white w-28 h-10 m-3 mt-7 p-2 border-2 rounded-md
         hover:bg-white hover:text-sb-02 text-center">
            FarmerIn
        </button>
      </Link>
      
      <Link to="/cocofarm/consumer/login">
        <button 
        className="border-white w-28 h-10 m-3 mt-7 p-2 border-2 rounded-md
         hover:bg-white hover:text-sb-02 text-center">
            UserIn
        </button>
      </Link>
    </div>


   );
}
 
export default LoginNav;