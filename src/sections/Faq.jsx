import { useState } from "react";
import {  usdtLogo } from "../assets/icons";
import { contractAddy } from "../constants";

// AccordionItem component
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hs-accordion bg-[#061936] border-t border-b border-white">
      <button
        className="hs-accordion-toggle inline-flex items-center justify-between w-full font-semibold text-start text-white py-4 px-5 disabled:opacity-50"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls={`accordion-content-${title}`}
        onClick={toggleAccordion}
      >
        <span className="font-mons">{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isOpen ? 'transform rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`accordion-content-${title}`}
        className={`hs-accordion-content ${isOpen ? "" : "hidden"} w-full overflow-hidden transition-[height] duration-300`}
      >
        <div className="pb-4 px-5">
          <p className="text-white">
            <span className="font-mons">{content}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-lg:w-screen mt-[6rem] max-lg:mt-[4rem]">
        <img src={usdtLogo} className="mb-4 p-2 max-lg:w-95 " width={95} alt="" />
        <span className="mb-4 font-mons font-bold text-center text-4xl text-white">How to buy upsidedowntrump</span>
        <div className="hs-accordion-group w-full max-w-[600px] mx-auto max-lg:max-w-[90%]">
          <AccordionItem
            title="1. Download and Install Phantom"
            content={`Phantom is a crypto wallet app used for storing and managing Solana tokens. After creating a wallet, be sure to write down your recovery phrase on a piece of paper and store it somewhere safe.`}
          />
          <AccordionItem
            title="2. Purchase Some Solana"
            content={`From inside the Phantom app, you can purchase Solana using Moonpay or other providers.`}
          />
          <AccordionItem
            title="3. Swap Your SOL for USDT"
            content={      <p className="mt-[0.5em]">
              Within the Phantom app browser, head to{" "}
              <a
                href="https://www.pump.fun"
                className="border-2 border-white p-2 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                pump.fun
              </a>{" "}
              and buy some $USDT.
            </p>}
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
