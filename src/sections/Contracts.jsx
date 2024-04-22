import { contractAddy } from "../constants"
import  { useState } from 'react';




const Contracts = () => {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddy[0].address)
        .then(() => setCopied(true))
        .catch((error) => console.error('Failed to copy:', error));
    };
  return (
    <div className="bg-black w-full h-[10rem] flex flex-row justify-center items-center">
        <span className="text-6xl max-lg:text-3xl text-white font-spider">{contractAddy[0].address}</span>
         <img width={20} src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png" className="filter invert text-3xl max-lg:text-xl" onClick={copyToClipboard} style={{ marginLeft: '8px', cursor: 'pointer' }} />
         <span className="text-white text-sm max-lg:text-sm">{copied ? ' Copied!' : 'Copy'}</span>
    </div>
  )
}

export default Contracts