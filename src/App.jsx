import "./App.css";

import imagenight from "./assets/clip-path.png";
import midBgImg from "./assets/mid-bg.png";
import midBgImgF8 from "./assets/bg-f8-middle.gif";
import bottomBgImg from "./assets/bot-bg.png";
import imageWater from "./assets/waterflow.gif";
import imageWaterGif from "./assets/waterflow2.gif";
import imgLake from "./assets/lake.png";
import flowAnimation from "./assets/flow_ani.gif";

import imageTear from "./assets/tear.png";
import imageHeartBurn from "./assets/heart-burn.png";
import imgHandOn from "./assets/hand-on.svg";
import imgHandBelow from "./assets/hand-below.svg";
import eyeClose from "./assets/eyes.png";

import iCloudHumand from "./assets/cloud-human.png";

import imgBgF5 from "./assets/bg-f5.png";
import startF52 from "./assets/star-gif.gif";

// frame 6
import imgBgF6Bottom from "./assets/bg-f6-bottom.png";
import imgBgF6Black from "./assets/bg-f6-black.png";
import imgHeartGif from "./assets/heart.gif";

// f7
import imgBgF7 from "./assets/bg-f7.png";
import imgSun from "./assets/sun.png";
import imgSunWrap from "./assets/wrap-sun.png";
import imgSunWrapGif from "./assets/mattroi.gif";
import { useState } from "react";

function App() {
  const [showLastNight1, setShowLastNight1] = useState(true);
  const [showLastNight2, setShowLastNight2] = useState(true);
  const [showLastNight3, setShowLastNight3] = useState(true);
  console.log({ showLastNight1 });
  return (
    <div className="bg-black min-h-[100vh] w-full  mx-auto text-[#fff] overflow-hidden">
      {/* frame 5 */}
      <div>
        {/* night sleep */}
        <div
          className="relative bgImage pb-[71%]"
          style={{ backgroundImage: `url(${imgBgF6Bottom})` }}
        >
          <div
            className="bgImage pb-[70%] absolute left-0 right-0 top-[0%]"
            style={{ backgroundImage: `url(${startF52})` }}
          >
            <div
              className="bgImage absolute left-0 right-0 top-[35%] -translate-y-1/2"
              style={{
                backgroundImage: `url(${imagenight})`,
              }}
            >
              <p className="absolute text-[#E7444F] font-bold top-[3%] 2xl:top-[15%] left-[30%] text-[93px] opacity-80 hover:opacity-100 duration-200 uppercase">
                Last Night
              </p>
              <p className="flex gap-4 font-bold absolute bottom-[-12%] 2xl:bottom-[2%] right-[24%] text-[93px] opacity-80 hover:opacity-100 duration-200">
                <span>AS I LAY</span>
                <span className="text-[#E7444F]">SLEEPING</span>
              </p>
              <p className="uppercase font-light text-[37px] absolute bottom-[-5%] xl:bottom-[2%] right-0 xl:right-[8%]">
                by antonio machado
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div style={{ backgroundImage: `url(${imgBgF5})` }}>
          <div style={{ backgroundImage: `url(${startF52})` }}>
            <div
              className="bgImage relative"
              style={{ backgroundImage: `url(${imagenight})` }}
            >
              <p
                onClick={() => {
                  setShowLastNight1(!showLastNight1);
                }}
                className={`absolute text-[#E7444F] font-light top-[3%] 2xl:top-[15%] left-[30%] text-[93px] transition-all duration-200 ease-linear uppercase ${
                  showLastNight1
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                Last Night
              </p>
              <p
                onClick={() => {
                  setShowLastNight1(!showLastNight1);
                }}
                className={`flex gap-4 font-light absolute bottom-[-12%] 2xl:bottom-[2%] right-[24%] text-[93px] opacity-80 hover:opacity-100 transition-all duration-200 ease-linear ${
                  showLastNight1
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                <span>AS I WAS</span>
                <span className="text-[#E7444F]">SLEEPING</span>
              </p>

              {/* errror toggle */}
              <p
                onClick={() => {
                  setShowLastNight1(!showLastNight1);
                }}
                className={`absolute text-[#fff] font-light bottom-[-15%] 2xl:bottom-[-5%] left-[26%] text-[93px] opacity-80 hover:opacity-100 transition-all duration-200 ease-linear ${
                  !showLastNight1
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                I DREAMT
              </p>
              <p
                onClick={() => {
                  setShowLastNight1(!showLastNight1);
                }}
                className={`flex gap-4 text-[#E7444F] font-light absolute top-[1%] 2xl:top-[10%] right-[26%] text-[93px] rotate-[-6deg] transition-all duration-200 ease-linear ${
                  !showLastNight1
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                A MARVERLOUS ERROR
              </p>
            </div>

            {/* cloud and people */}
            <div className="relative  mt-[200px] overflow-hidden">
              <img src={iCloudHumand} alt="" className="scale-105 w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* frame 6 */}
      <div id="frame6">
        <div
          style={{ backgroundImage: `url(${imgBgF7})` }}
          className="relative"
        >
          {/* night sleep */}
          {/* <div
            // className="relative"
            style={{ backgroundImage: `url(${startF52})` }}
          >
            <img src={imgBgF6Black} alt="" className="absolute inset-0" />
            <div
              className="bgImage pt-[300px] relative "
              style={{ backgroundImage: `url(${imagenight})` }}
            >
              <a
                href="#frame7"
                className="absolute text-[#fff] font-light bottom-[15%] 2xl:bottom-[18%] left-[26%] text-[93px] opacity-80 hover:opacity-100 duration-200"
              >
                I DREAMT
              </a>
              <p className="flex gap-4 text-[#E7444F] font-light absolute top-[25%] right-[26%] text-[93px] rotate-[-6deg]">
                A MARVERLOUS ERROR
              </p>
            </div>
          </div> */}

          {/* bg top */}

          {/* <div
            className="bgImage pb-[31%] scale-105 overflow-hidden"
            style={{ backgroundImage: `url(${iCloudHumand})` }}
          ></div> */}
        </div>

        {/* bg mid f6 */}
        <div
          className="bgImage pb-[71%] relative"
          style={{ backgroundImage: `url(${midBgImg})` }}
        >
          <div className="absolute left-0 top-[10%] right-0 flex flex-col items-center justify-center">
            <div className="relative">
              <p className="flex font-light text-[#E7444F]  uppercase absolute left-[7%] top-[-5%] text-[152px] 2xl:text-[192px] items-baseline">
                <span className="text-white pr-5 text-[102px] 2xl:text-[142px]">
                  that's a
                </span>
                spring
              </p>
              <p className="flex items-baseline font-light text-[#E7444F] text-[152px] 2xl:text-[192px] uppercase absolute right-[5%] top-[5%]">
                <span className="text-white pr-5 text-[102px] 2xl:text-[142px]">
                  was
                </span>
                breaking
              </p>
              <p className="flex font-light text-[#E7444F] text-[415px] 2xl:text-[517px] uppercase absolute left-[6%] bottom-[-8%]">
                out
              </p>
              <div className="flex font-light text-[#E7444F] text-[265px] 2xl:text-[327px] uppercase absolute right-[5%] bottom-[0%]">
                Heart
                <p className="absolute top-[-20%] 2xl:top-[-20%] left-0 text-[106px] 2xl:text-[146px] text-white">
                  In
                </p>
                <p className="absolute top-[-20%] 2xl:top-[-20%] right-0 text-[106px] 2xl:text-[146px] text-white">
                  My
                </p>
              </div>
              <div>
                <img
                  src={imgHeartGif}
                  alt=""
                  className="relative z-50 w-[3200px] h-auto xxl:scale-125"
                />
              </div>
            </div>
          </div>
        </div>

        {/* bg bottom f6*/}
        <div
          className="bgImage pb-[70%] relative"
          style={{ backgroundImage: `url(${imageWaterGif})` }}
        ></div>
      </div>

      {/* frame 7 */}
      <div id="frame7">
        <div
          style={{ backgroundImage: `url(${imgBgF7})` }}
          className="relative"
        >
          {/* night sleep */}
          <div
            // className="relative"
            style={{ backgroundImage: `url(${startF52})` }}
          >
            <img
              src={imgBgF6Black}
              alt=""
              className="absolute inset-0 w-full"
            />
            <div
              className="bgImage pt-[300px] relative"
              style={{ backgroundImage: `url(${imagenight})` }}
            >
              <p
                onClick={() => {
                  setShowLastNight2(!showLastNight2);
                }}
                className={`absolute text-[#E7444F] font-light top-[28%] 2xl:top-[30%] left-[30%] text-[93px] transition-all duration-200 ease-linear uppercase ${
                  showLastNight2
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                Last Night
              </p>
              <p
                onClick={() => {
                  setShowLastNight2(!showLastNight2);
                }}
                className={`flex gap-4 font-light absolute bottom-[22%] 2xl:bottom-[25%] right-[24%] text-[93px] opacity-80 hover:opacity-100 transition-all duration-200 ease-linear ${
                  showLastNight2
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                <span>AS I WAS</span>
                <span className="text-[#E7444F]">SLEEPING</span>
              </p>

              {/* errror toggle */}
              <p
                onClick={() => {
                  setShowLastNight2(!showLastNight2);
                }}
                className={`absolute text-[#fff] font-light bottom-[17%] 2xl:bottom-[18%] left-[26%] text-[93px] opacity-80 hover:opacity-100 transition-all duration-200 ease-linear ${
                  !showLastNight2
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                I DREAMT
              </p>
              <p
                onClick={() => {
                  setShowLastNight2(!showLastNight2);
                }}
                className={`flex gap-4 text-[#E7444F] font-light absolute top-[26%] 2xl:top-[28%] right-[26%] text-[93px] rotate-[-6deg] transition-all duration-200 ease-linear ${
                  !showLastNight2
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                A MARVERLOUS ERROR
              </p>
            </div>
          </div>

          {/* bg top */}

          <div
            className="bgImage pb-[31%]  scale-105 w-full"
            style={{ backgroundImage: `url(${iCloudHumand})` }}
          ></div>
        </div>

        {/* bg mid */}

        <div
          className="bgImage pb-[71%] relative"
          style={{ backgroundImage: `url(${midBgImg})` }}
        >
          <div className="group">
            <div className="absolute left-[50%] top-[51%] xl:top-[50%] -translate-x-1/2 -translate-y-1/2 xxl:scale-110 w-[500px] h-[500px] ">
              <img
                src={imgSun}
                alt=""
                className={`absolute left-[50%] top-[51%] xl:top-[50%] -translate-x-1/2 -translate-y-1/2 xxl:scale-110 `}
              />
              <img
                src={eyeClose}
                alt=""
                className="absolute top-[27.8%] xxl:top-[25.9%] w-[292px] h-0 group-hover:h-[44px] duration-300 ease-in-out left-[20.9%] xxl:left-[20.8%] xxl:scale-110 "
              />
            </div>

            <img
              src={imgSunWrap}
              alt=""
              className="imgSun absolute left-[50%] top-[46%] 2xl:top-[46.4%] xxl:top-[47%] xxl:scale-110 -translate-x-1/2 -translate-y-1/2 z-50"
            />

            <img
              src={imgSunWrapGif}
              alt=""
              className="imgSunGif opacity-0 absolute left-[50%] top-[46%] 2xl:top-[46.4%] xxl:top-[47%] -translate-x-1/2 -translate-y-1/2 w-[700px] z-40 xxl:scale-110"
            />
          </div>

          {/*  */}
          <div className="absolute left-[1%] 2xl:left-[5%] top-[15%] leading-[120px]">
            <p className="text-[#fff] uppercase text-[78px]">That a</p>
            <p className="text-[#D9495A] uppercase text-[125px]">fierry sun</p>
          </div>
          <div className="absolute left-[1%] 2xl:left-[5%] top-[40%]">
            <p className="text-[#D9495A] uppercase text-[197px]">Light</p>
          </div>
          <div className="absolute left-[1%] 2xl:left-[5%] top-[65%]">
            <p className=" uppercase text-[78px]">inside</p>
          </div>
          {/* right */}
          <div className="absolute right-[1%] 2xl:right-[5%] top-[20%]">
            <p className=" uppercase text-[142px]">was</p>
          </div>
          <div className="absolute right-[1%] 2xl:right-[5%] top-[30%]">
            <p className=" uppercase text-[197px] text-[#D9495A]">giving</p>
          </div>
          <div className="absolute right-[1%] 2xl:right-[5%] top-[52%]">
            <p className=" uppercase text-[105px]">my</p>
          </div>
          <div className="absolute right-[1%] 2xl:right-[5%] top-[60%]">
            <p className=" uppercase text-[146px] text-[#D9495A]">heart</p>
          </div>
        </div>
        {/* bg bottom */}
        <div
          className="bgImage pb-[71%] relative"
          style={{ backgroundImage: `url(${bottomBgImg})` }}
        >
          {/* hand */}
          <div
            className="bgImage pb-[30%] absolute top-0 left-0 right-0"
            style={{ backgroundImage: `url(${imgHandOn})` }}
          ></div>
          {/* text */}
          <div className="absolute top-[55%] -translate-y-1/2 left-[5%] xl:left-[10%] xl:right-[10%] right-[5%] flex gap-16 justify-center">
            <img
              src={imageHeartBurn}
              className="animation-custom left-0 xxl:scale-150 "
              alt=""
            />

            <div className="break-normal flex-1 text-[64px] leading-[64px] xxl:leading-[80px] uppercase font-light max-w-[520px] hover:opacity-60 duration-200 text-center">
              <p>
                It was <span className="text-[#D9495A]">fiery</span> because I
                felt
              </p>
              <p>
                <span className="text-[#D9495A]">warmth</span> as from a
                <span className="text-[#D9495A]"> hearth</span>,
              </p>
              <p>
                and sun because it
                <span className="text-[#D9495A]"> gave light</span>
              </p>
              <p>
                and
                <span className="text-[#D9495A]"> brought tears</span> to my
                eyes.
              </p>
            </div>
            <img
              src={imageTear}
              alt=""
              className="animation-custom1 right-0 xxl:scale-150"
            />
          </div>
          {/* hand below */}
          <div
            className="bgImage absolute bottom-0 left-0 right-0"
            style={{ backgroundImage: `url(${imgHandBelow})` }}
          ></div>
        </div>

        {/* cloud and people */}
        <div
          className="relative bgImage pb-[70%]"
          style={{ backgroundImage: `url(${imgBgF6Bottom})` }}
        >
          <img src={imgBgF6Black} alt="" className="absolute inset-0 w-full" />

          <div
            className="bgImage pb-[80%] absolute left-0 right-0 top-[0%]"
            style={{ backgroundImage: `url(${startF52})` }}
          >
            <div
              className="bgImage absolute left-0 right-0 top-[0%] mt-[200px]"
              style={{ backgroundImage: `url(${imagenight})` }}
            >
              <p
                onClick={() => {
                  setShowLastNight3(!showLastNight3);
                }}
                className={`absolute text-[#E7444F] font-light top-[3%] 2xl:top-[15%] left-[30%] text-[93px] transition-all duration-200 ease-linear uppercase ${
                  showLastNight3
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                Last Night
              </p>
              <p
                onClick={() => {
                  setShowLastNight3(!showLastNight3);
                }}
                className={`flex gap-4 font-light absolute bottom-[-12%] 2xl:bottom-[2%] right-[24%] text-[93px] opacity-80 hover:opacity-100 transition-all duration-200 ease-linear ${
                  showLastNight3
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                <span>AS I WAS</span>
                <span className="text-[#E7444F]">SLEEPING</span>
              </p>

              {/* errror toggle */}
              <p
                onClick={() => {
                  setShowLastNight3(!showLastNight3);
                }}
                className={`absolute text-[#fff] font-light bottom-[-15%] 2xl:bottom-[-5%] left-[26%] text-[93px] opacity-80 hover:opacity-100 transition-all duration-200 ease-linear ${
                  !showLastNight3
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                I DREAMT
              </p>
              <p
                onClick={() => {
                  setShowLastNight3(!showLastNight3);
                }}
                className={`flex gap-4 text-[#E7444F] font-light absolute top-[1%] 2xl:top-[10%] right-[26%] text-[93px] rotate-[-6deg] transition-all duration-200 ease-linear ${
                  !showLastNight3
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-0"
                }`}
              >
                A MARVERLOUS ERROR
              </p>
            </div>
          </div>
          <img
            src={iCloudHumand}
            alt=""
            className="absolute left-0 scale-105 right-0 bottom-0 w-full"
          />
        </div>
      </div>

      {/* frame 8 */}
      <div id="frame8">
        <div
          style={{ backgroundImage: `url(${imgBgF7})` }}
          className="relative"
        >
          {/* night sleep */}
          {/* <div
            // className="relative"
            style={{ backgroundImage: `url(${startF52})` }}
          >
            <img src={imgBgF6Black} alt="" className="absolute inset-0" />
            <div
              className="bgImage pt-[300px] relative"
              style={{ backgroundImage: `url(${imagenight})` }}
            >
              <p className="absolute text-[#fff] font-light bottom-[15%] 2xl:bottom-[18%] left-[26%] text-[93px]">
                I DREAMT
              </p>
              <p className="flex gap-4 text-[#E7444F] font-light tex absolute top-[25%] right-[26%] text-[93px] rotate-[-6deg]">
                A MARVERLOUS ERROR
              </p>
            </div>
          </div> */}

          {/* bg top */}

          {/* <div
            className="bgImage pb-[31%]  scale-105"
            style={{ backgroundImage: `url(${iCloudHumand})` }}
          ></div> */}
        </div>
        <div
          className="bgImage pb-[71%]"
          style={{ backgroundImage: `url(${midBgImgF8})` }}
        ></div>

        {/*  */}
        <div
          className="relative bgImage pb-[70%]"
          style={{ backgroundImage: `url(${imgBgF6Bottom})` }}
        >
          <img
            src={imgBgF6Black}
            alt=""
            className="absolute top-0 left-0 right-0 w-full h-[400px] xl:h-[800px] w-full"
          />
          <div
            className="bgImage pb-[70%] absolute left-0 right-0 top-[0%]"
            style={{ backgroundImage: `url(${startF52})` }}
          >
            <div
              className="bgImage absolute left-0 right-0 top-[50%] -translate-y-1/2"
              style={{
                backgroundImage: `url(${imagenight})`,
              }}
            >
              <p className="absolute text-[#E7444F] font-bold top-[3%] 2xl:top-[15%] left-[30%] text-[93px] uppercase">
                Last Night
              </p>
              <p className="flex gap-4 font-bold absolute bottom-[-12%] 2xl:bottom-[2%] right-[24%] text-[93px]">
                <span>AS I LAY</span>
                <span className="text-[#E7444F]">SLEEPING</span>
              </p>
              <p className="uppercase font-light text-[37px] absolute bottom-[-5%] xl:bottom-[2%] right-0 xl:right-[8%]">
                by antonio machado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
