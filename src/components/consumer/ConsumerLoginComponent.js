import KakaoLoginComponent from "./KakaoLoginComponent";


const ConsumerLoginComponent = () => {
  return ( 

    <div className="border-2 bg-gray-200 rounded-md ml-auto mr-auto mt-14 w-[600px] h-[450px]">
    
      <div className="m-2">
        <label className="text-orange-500 font-bold">Email</label>
        <div>
          <input type="text" name="email" value="Consumer_01"
          onChange={()=>{}}
          className="border-2 m-2 p-3 rounded-md w-[560px]">            
          </input>
        </div>
        
      </div>
      <div className="m-2">
        <label className="text-orange-500 font-bold">Password</label>
        <div>
          <input type="password" name="pw" value="1111"
          onChange={()=>{}}
          className="border-2 m-2 p-3 rounded-md w-[560px]">            
          </input>
        </div>
        
      </div>

      <div className="h-[20vh] text-center">
        {/* <Link to="/products/list"> */}
        
        
          <button 
            className="bg-blue-400 font-semibold text-center mt-5 h-14 w-4/6 rounded-md" 
            
            >
            LOGIN
          </button>       
        
          
          <KakaoLoginComponent></KakaoLoginComponent>
          
        
        
        {/* </Link> */}
      </div>

    </div>
   );
}
 
export default ConsumerLoginComponent;