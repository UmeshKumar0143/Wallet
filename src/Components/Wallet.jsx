import React from "react";

const Wallet = () => {
  return (
    <div
      id="main"
      className="flex justify-center items-center w-full h-screen bg-[url(./img/image.png)] bg-cover"
    >
      <div className="flex flex-col justify-center items-center">
        <button className="px-6 py-4 font-bold mb-20 text-white text-xl bg-[#4909E1]">
          Select Wallet
        </button>
        <div
          id="wallet-contain"
          className="flex flex-col justify-center items-center gap-10 w-[28rem] h-[32rem] bg-[#0ED8B9] rounded-2xl"
        >
          <div id="winsap">
            <h1 className="text-white font-bold text-5xl tracking-wider">
              WinSwap
            </h1>
          </div>
          <div className="w-96 h-56 rounded-xl bg-white" id="coins">
            <div id="part-top" className="flex w-full h-1/2 p-2">
              <div id="yousend" className="w-1/2 px-2 h-full flex flex-col  ">
                <h1 className="text-gray-900">You Send</h1>
                <div id="yousend-inner" className="flex items-center gap-3">
                  <div id="logo" className="w-14 h-14 bg-black rounded-[50%]">
                    <img src="" alt="" />
                  </div>
                  <div id="name">
                    <h1 className="text-zinc-700 font-semibold text-xl tracking-wide">
                      SOl
                    </h1>
                  </div>
                </div>
              </div>

              <div
                id="balance"
                className="w-1/2 flex flex-col items-center gap-2 h-full"
              >
                <h5>Balance 0.91SOL</h5>
                <h6 className="text-lg font-semibold">0.91</h6>
              </div>
            </div>

            <div id="to-div" className="w-full flex justify-center">
              <h1>to</h1>
            </div>

            <div id="part-bottom" className="w-full flex  h-1/2 ">
              <div
                id="you-recieve"
                className="w-1/2 px-2 h-full flex flex-col  "
              >
                <h1 className="text-gray-900">You receive</h1>
                <div id="you-recieve-inner" className="flex items-center gap-3">
                  <div
                    id="logo"
                    className="w-14 h-14 rounded-[50%] overflow-hidden border-none  "
                  >
                    <img
                      src="https://winp.org/assets/img/logo/logo.png"
                      alt=""
                    />
                  </div>
                  <div id="name">
                    <h1 className="text-zinc-700 font-semibold text-xl tracking-wide">
                      WNP
                    </h1>
                  </div>
                </div>
              </div>
              <div id="balance" className='w-1/2 flex flex-col items-center justify-center gap-2 h-full' >
                                <h1 className="text-lg font-semibold">470,04</h1>
                            </div>
            </div>
          </div>
          <div id="swap" className="flex flex-col gap-2">
            <button className="px-8 py-2 rounded-3xl text-3xl uppercase font-semibold bg-black text-white">Swap</button>
            <h4 className="text-white">Powered by <span className="underline">Winp.org</span></h4>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Wallet;
