import {roadmap} from '../constants/index';
const Roadmap = () => {
  return (
    <div>
        <h1 id="Roadmap" className="flex flex-col items-center justify-center padding">
            <span className=" drop-shadow text-white font-mons font-bold text-8xl max-lg:text-5xl">ROADMAP</span>
        </h1>
        <div className="flex w-full flex-row max-lg:flex-col items-center justify-center">
            {roadmap.map((item, index) => (
              <div className='mb-[4rem] flex items-center justify-center text-center text-white font-mons font-bold text-3xl m-4 w-[22rem] h-[10rem] rounded-md bg-[#162b51] px-[2rem]' key={index}><span className='drop-shadow'>Phase {index + 1}:<br/>{item.content}</span></div>
            ))}
        </div>
    </div>
  )
}

export default Roadmap