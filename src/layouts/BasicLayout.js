import TopNav from "./nav/TopNav";



const BasicLayout = ({children}) => {
  return ( 

    <div className="container mx-auto w-full bg-oy-01">

      <div>
        <TopNav></TopNav>
      </div>

      <div className="container mx-auto h-[60vh] bg-sb-03">

        <div>
          {children}
        </div>
        
        </div>


    </div>

   );
}
 
export default BasicLayout;