import BasicLayout from "../layouts/BasicLayout";


const MainPage = () => {

  const farmers = [
    {
      name: "농부1",
      farmName: "농장1",
      image: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjdfMjU3/MDAxNTg3OTU0Mzk2NDIx.19AzVkM9-bWazLwBw2nON1C0A-NjHdvo2P1HVyu9Zm8g.bFBOOQssIda5snENXIq3aoDA3ijxt3kUcGW7XvvTBcEg.JPEG.shrinkles/2020_04_%EC%A7%81%EC%97%85_01_023_%EB%86%8D%EB%B6%801.jpg?type=w800",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "농부2",
      farmName: "농장2",
      image: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjdfMjU3/MDAxNTg3OTU0Mzk2NDIx.19AzVkM9-bWazLwBw2nON1C0A-NjHdvo2P1HVyu9Zm8g.bFBOOQssIda5snENXIq3aoDA3ijxt3kUcGW7XvvTBcEg.JPEG.shrinkles/2020_04_%EC%A7%81%EC%97%85_01_023_%EB%86%8D%EB%B6%801.jpg?type=w800",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "농부3",
      farmName: "농장3",
      image: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjdfMjU3/MDAxNTg3OTU0Mzk2NDIx.19AzVkM9-bWazLwBw2nON1C0A-NjHdvo2P1HVyu9Zm8g.bFBOOQssIda5snENXIq3aoDA3ijxt3kUcGW7XvvTBcEg.JPEG.shrinkles/2020_04_%EC%A7%81%EC%97%85_01_023_%EB%86%8D%EB%B6%801.jpg?type=w800",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "농부4",
      farmName: "농장4",
      image: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjdfMjU3/MDAxNTg3OTU0Mzk2NDIx.19AzVkM9-bWazLwBw2nON1C0A-NjHdvo2P1HVyu9Zm8g.bFBOOQssIda5snENXIq3aoDA3ijxt3kUcGW7XvvTBcEg.JPEG.shrinkles/2020_04_%EC%A7%81%EC%97%85_01_023_%EB%86%8D%EB%B6%801.jpg?type=w800",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "농부5",
      farmName: "농장5",
      image: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjdfMjU3/MDAxNTg3OTU0Mzk2NDIx.19AzVkM9-bWazLwBw2nON1C0A-NjHdvo2P1HVyu9Zm8g.bFBOOQssIda5snENXIq3aoDA3ijxt3kUcGW7XvvTBcEg.JPEG.shrinkles/2020_04_%EC%A7%81%EC%97%85_01_023_%EB%86%8D%EB%B6%801.jpg?type=w800",
      reviews: 12,
      rating: 4.5,
    }

  ];



  return (

    <div>

      <div className="">
        <BasicLayout>
          <div className="">
            <div className="mt-1 text-xl ">
              소비자페이지 - 생산자 리스트
            </div>

            <ul className="flex flex-wrap container mt-2 ">
              <div className=" w-full ">
                {farmers.map((farmer, index) => (
                  <li className="flex h-auto bg-white m-2 p-2 rounded-md border-2 border-gray-400" key={index}>
                    <div className="w-36">
                      {/* <div className="text-red-500 font-extrabold">No. {index + 1}</div> */}
                      <div className="flex  items-center hover:cursor-pointer">
                        <img src={farmer.image} alt={farmer.name} className="w-36 h-32"></img>
                      </div>
                      <div className="text-center text-gray-700 font-extrabold mt-3">
                        <div className="font-bold text-xl hover:cursor-pointer">{farmer.name}</div>
                        <div className="text-red-500">{farmer.farmName}</div>
                        <div>리뷰 {farmer.reviews} 평점 {farmer.rating}</div>
                      </div>

                    </div>

                    <div className="w-full bg-sb-03 ml-5 whitespace-pre-line" >
                    <div className="ml-3">안녕하세요?<br/>
충북 괴산군 감물에 귀농한지 11년차(2023년)
주 재배 작물은 감물감자 꿀고구마 대학찰옥수수 
청결고추 메주콩 서리태 찹쌀 절임배추 등을 재배하고 있으며<br/>
(텃밭작물 상추,가을무,오이,가지,토마토,김장용쪽파,갓 등)<br/>

이 모든 작물의 재배과정과 수익분석 내용을 동영상으로 제작하여
 텃밭이나 주말농장을 하시는 분들에게도 미력하나마 도움을 주고
  풀뿌리 농장의 농사과정을 기록하기 위해 만든 채널입니다.<br/><br/>

※ 채널이 조금 안정되면 귀농10년의 과정과 귀농을 꿈꾸는 
분들을 위하여 귀농에 관하여도 영상으로 올릴예정입니다.<br/>

※ 2023년엔 풀뿌리농장 여행채널로 
풀뿌리농장 시골살이TV 도 잘 키워 볼 예정입니다.<br/>

석성수: 010-5336-0647
이메일 문의: spdlqj2580@naver.com
</div>
                    </div>
                  </li>

                ))}
              </div>

            </ul>
          </div>


        </BasicLayout>

      </div>

    </div>

  );
}

export default MainPage;