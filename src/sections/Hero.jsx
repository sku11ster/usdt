import { eagle} from "../assets/icons";
import { contractAddy } from "../constants";
const Hero = () => {
  const videoStyle = {
    transform: 'rotateX(180deg)'  // Invert the video by rotating it around the x-axis
  };
  return (
    <div className="relative lg:h-screen z-0 flex flex-col items-center justify-center">
      <div className="flex lg:flex-row flex-col max-lg:mt-[8rem] lg:mt-[36rem] items-end justify-center w-full h-1/2 mb-[2em]">
        <div className="w-1/4 max-lg:w-full max-lg:mt-[18rem] "> 
          <video style={videoStyle} src={eagle} autoplay="True" loop="True" muted="muted" playsinline="" controlslist="nodownload"></video>
        </div>
        <div className="w-1/4 p-4 max-lg:w-full flex flex-col max-lg:items-center">
          <h1 className="font-mons text-6xl tracking-wider max-lg:text-center max-lg:text-4xl text-white font-bold mb-4 max-lg:mb-0">Trump Movement on the Blockchain.</h1>
          {/* <span className="lg:text-right tracking-wider transform rotate-180 text-white text-2xl font-mons mb-2 max-lg:text-center">MAKE THE DOLLAR GREAT AGAIN</span> */}
          <br/>
          <a href="https://pump.fun" className=" block mt-[2rem] max-lg:mt-[2rem]">
            <span className=" bg-[#061936] text-white font-bold text-xl border-2 px-8 py-2 rounded-md ">
              Pump Fun
            </span>
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mb-[2rem]">
        <div className="w-full max-lg:w-[95vw] max-lg:p-5 p-20 border-[#BB133E] border-4 lg:border-[0.4rem] flex flex-col justify-center items-center">
          <span className="text-6xl max-lg:text-2xl font-mons text-white font-bold tracking-[0.2em]">USDT MEMECOIN</span>
          <span className="text-4xl max-lg:text-xl  font-mons text-white tracking-[0.2em] text-center">MAKE THE DOLLAR GREAT AGAIN</span>

        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-[8rem] max-lg:mb-[6em]">

        <div className="text-center font-bold rounded-md w-full p-2">
          <span className="text-white text-3xl max-lg:text-xl ">SOL </span>
          <br/>
          <span className="lg:text-3xl font max-lg:text-[0.8em] font-mons text-white ">{contractAddy[0].address}</span>

        </div>

      </div>
    </div>
  );
};

export default Hero;

