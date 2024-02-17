import Icons from "../Icons/Icons";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-red-200 pt-1">
      <div className="textStructure mt-32 px-20">
        <div className="masker">
          <h1 className='text-[7vw] text-red-950 font-semibold leading-none tracking-tight font-["Founders_Grotesk"]'>
            ANA FARIYA
          </h1>
        </div>
        <div className="masker flex pt-2 pb-2 gap-5">
          <div className="w-[9vw] mt-2 h-[6vw] relative -top-[1vw] bg-red-600"> </div>
          <h1 className='text-[7vw] text-red-950 font-semibold leading-none tracking-tight font-["Founders_Grotesk"]'>
            FRONTEND
          </h1>
          
        </div>
        <div className="masker">
          <h1 className='text-[7vw] text-red-950 font-semibold leading-none tracking-tight font-["Founders_Grotesk"]'>
            WEB DEVELOPER
          </h1>
        </div>
      </div>
      <div className="border-t-2 border-red-400 w-full mt-12"></div>
      <Icons />
      <div className="pb-20 border-t-2 border-red-400 mt-22 w-full mb-20"></div>
    </div>
  );
}

export default LandingPage;
