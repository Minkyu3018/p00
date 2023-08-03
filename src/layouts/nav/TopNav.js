import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";

const TopNav = () => {
  return (

    <>
      <div className="flex ml-6  text-black ">

        <div className="flex justify-between ">

          <div>
          <img className="farmImage w-16 mt-2 " alt="cocofarm" src="cocofarm3.png" />
          </div>

          <div className="m-5 ml-10 mb-3 mt-auto text-xl hover:underline">
            <Link to={"/"}>FarmerList</Link>
          </div>

          <div className="m-5 ml-7 mb-3 mt-auto text-xl hover:underline">
            <Link to={"/mypage"}>MyPage</Link>
          </div>

          <div className="m-5 ml-7 mb-3 mt-auto text-xl hover:underline">
            <Link to={"/"}>Q&A</Link>
          </div>

          <div className="m-5 ml-7 mb-3 mt-auto text-xl hover:underline">
            <Link to={"/"}>Store</Link>
          </div>

        </div>

        <div className="flex mr-4 ml-auto">
          <div>
          <LoginNav/>
          </div>
        </div>

      </div>

    </>

  );
}

export default TopNav;