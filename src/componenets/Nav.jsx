// import { dexs,tele,x,gecko,cmc,solana,usdtLogo} from "../assets/icons";
// import { socials } from "../constants";
// const Nav = () => {

//   return (
//   <header className='padding-x py-8 absolute z-10 w-full'>
//     <nav className='flex justify-center items-center max-container'>
//       <div className="max-lg:hidden">
//         <div className="flex flex-row items-center justify-center">
//             <a href={socials[0].dexs} target="_blank">
//               <img src={dexs} alt="DexScreener" className="h-16 w-16 object-contain m-4"/>
//             </a>
//             <a href={socials[1].tg} target="_blank">
//               <img src={tele} alt="Telegram" className="h-16 w-16 object-contain m-4"/>
//             </a>
//             <a href={socials[2].x} target="_blank" >
//               <img src={x} alt="X" className="h-14 w-14 object-contain m-4" />
//             </a>
//             <a href="" target="_blank" >
//               <img src={usdtLogo} alt="LOGO" className="w-[25vh] object-contain m-4" />
//             </a>
//             <a href={socials[3].sol} target="_blank" >
//               <img src={solana} alt="Solana" className="h-16 w-16 object-contain m-4" />
//             </a>
//             <a href={socials[4].gecko} target="_blank" >
//               <img src={gecko} alt="Gecko" className="h-16 w-16 object-contain m-4" />
//             </a>
//             <a href={socials[5].cmc} target="_blank" >
//               <img src={cmc} alt="CMC" className="h-16 w-16 object-contain m-4" />
//             </a>
//         </div>
//       </div>
//       <div className="max-lg:block hidden">
//         <div className="flex flex-col-reverse justify-center items-center">
          
//           <a href={socials[3].sol} target="_blank" >
//               <img src={solana} alt="Solana" className="h-12 w-12 object-contain m-2" />
//           </a>
//           <div className="flex flex-row justify-center items-center space-x-6 mb-[1rem] mt-[1rem]">
//             <a href={socials[0].dexs} target="_blank">
//               <img src={dexs} alt="DexScreener" className="h-12 w-12 object-contain m-2"/>
//             </a>
//             <a href={socials[1].tg} target="_blank">
//               <img src={tele} alt="Telegram" className="h-12 w-12 object-contain m-2"/>
//             </a>
//             <a href={socials[2].x} target="_blank" >
//               <img src={x} alt="X" className="h-10 w-10 object-contain m-2" />
//             </a>
  
//             <a href={socials[4].gecko} target="_blank" >
//               <img src={gecko} alt="Gecko" className="h-12 w-12 object-contain m-2" />
//             </a>
//             <a href={socials[5].cmc} target="_blank" >
//               <img src={cmc} alt="CMC" className="h-12 w-12 object-contain m-2" />
//             </a>
//           </div>

//           <div>
//             <a href="" target="_blank" >
//               <img src={usdtLogo} alt="LOGO" className="w-[24vh] object-contain m-4" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>

//   </header>
//   )
// }

// export default Nav;




import { dexs,tele,x,gecko,cmc,solana,usdtLogo,pill} from "../assets/icons";
import { socials } from "../constants";
const Nav = () => {

  return (
  <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-center items-center max-container'>
      <div className="max-lg:hidden">
        <div className="flex flex-row items-center justify-center">
            <a href={socials[0].dexs} target="_blank">
              <img src={dexs} alt="DexScreener" className="h-16 w-16 object-contain m-4"/>
            </a>
            <a href={socials[1].tg} target="_blank">
              <img src={tele} alt="Telegram" className="h-16 w-16 object-contain m-4"/>
            </a>
            <a href="" target="_blank" >
              <img src={usdtLogo} alt="LOGO" className="w-[25vh] object-contain m-4" />
            </a>
            <a href={socials[2].x} target="_blank" >
              <img src={x} alt="X" className="h-14 w-14 object-contain m-4" />
            </a>
            <a href={socials[6].x} target="_blank" >
              <img src={pill} alt="X" className="h-14 w-14 object-contain m-4" />
            </a>

        </div>
      </div>
      <div className="max-lg:block hidden">
        <div className="flex flex-col-reverse justify-center items-center">
      
          <div className="flex flex-row justify-center items-center space-x-6 mb-[1rem] mt-[1rem]">
      
            <a href={socials[1].tg} target="_blank">
              <img src={tele} alt="Telegram" className="h-12 w-12 object-contain m-2"/>
            </a>
            <a href={socials[2].x} target="_blank" >
              <img src={x} alt="X" className="h-10 w-10 object-contain m-2" />
            </a>
            <a href={socials[6].x} target="_blank" >
              <img src={pill} alt="pumpfun" className="h-10 w-10 object-contain m-2" />
            </a>
  

          </div>

          <div>
            <a href="" target="_blank" >
              <img src={usdtLogo} alt="LOGO" className="w-[24vh] object-contain m-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>

  </header>
  )
}

export default Nav;