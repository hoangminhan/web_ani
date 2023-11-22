import "./App.css";

import imagenight from "./assets/clip-path.png";
import midBgImg from "./assets/mid-bg.png";
import midBgImgF8 from "./assets/bg-f8-middle.gif";
import bottomBgImg from "./assets/bot-bg.png";
import imageWater from "./assets/waterflow.gif";
import imageWaterGif from "./assets/song-nuoc.gif";
import imageTear from "./assets/tear.png";
import imageHeartBurn from "./assets/heart-burn.png";
import imgHandOn from "./assets/hand-on.svg";
import imgHandBelow from "./assets/hand-below.svg";

import iCloudHumand from "./assets/cloud-human.png";

import imgBgF5 from "./assets/bg-f5.png";
import startF5 from "./assets/star-gif.gif";
import startF52 from "./assets/star-gif.gif";

// frame 6
import imgBgF6 from "./assets/bg-f6.png";
import imgBgF6Heart from "./assets/bg-f6-heart.png";
import imgBgF6Water from "./assets/bg-f6-water.png";
import imgBgF6Group from "./assets/f6-group.png";
import imgBgF6Bottom from "./assets/bg-f6-bottom.png";
import imgBgF6Black from "./assets/bg-f6-black.png";
import imgHeartGif from "./assets/heart.gif";
import imgHeart from "./assets/heart.png";

// f7
import imgBgF7 from "./assets/bg-f7.png";
import imgSun from "./assets/sun.png";
import imgSunWrap from "./assets/wrap-sun.png";
import imgSunWrapGif from "./assets/sun.gif";

function App() {
  return (
    <div className="bg-black min-h-[100vh] w-full  mx-auto text-[#fff]">
      {/* frame 5 */}
      <div
        style={{ backgroundImage: `url(${imgBgF5})` }}
        // className="bg-red-100"
      >
        {/* night sleep */}
        <div style={{ backgroundImage: `url(${startF5})` }}>
          <div
            // bg-no-repeat  relative
            className="bgImage relative pt-[200px]"
            style={{
              backgroundImage: `url(${imagenight})`,
            }}
          >
            <a
              href="#frame6"
              className="absolute text-[#E7444F] font-bold top-[25%] xl:top-[30%] left-[30%] text-[82px] opacity-80 hover:opacity-100 duration-200"
            >
              Last Night
            </a>
            <p className="flex gap-4 font-bold absolute bottom-[17%] xl:bottom-[20%] right-[24%] text-[82px]">
              <span>ASILAY</span>
              <span className="text-[#E7444F]">SLEEPING</span>
            </p>
            <p className="uppercase font-light text-[32px] absolute bottom-[20%] right-[5%] xl:right-[8%]">
              by antonio machado
            </p>
          </div>
        </div>

        {/*  */}
        <div style={{ backgroundImage: `url(${startF52})` }}>
          <div
            className="bgImage relative mt-[200px]"
            style={{ backgroundImage: `url(${imagenight})` }}
          >
            <p className="absolute text-[#E7444F] font-light top-[10%] xl:top-[20%] left-[30%] text-[70px]">
              Last Night
            </p>
            <p className="flex gap-4 font-light absolute bottom-[-5%] xl:bottom-[8%] right-[25%] text-[70px]">
              <span>AS I WAS</span>
              <span className="text-[#E7444F]">SLEEPING</span>
            </p>
          </div>

          {/* cloud and people */}
          <div
            className="bg-transparent mt-[200px]"
            // className="bgImage relative mt-[200px]"
            // style={{ backgroundImage: `url(${iCloudHumand})` }}
          >
            <img src={iCloudHumand} alt="" />
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
          <div
            // className="relative"
            style={{ backgroundImage: `url(${startF52})` }}
          >
            <img src={imgBgF6Black} alt="" className="absolute inset-0" />
            <div
              className="bgImage pt-[300px] relative"
              style={{ backgroundImage: `url(${imagenight})` }}
            >
              <a
                href="#frame7"
                className="absolute text-[#fff] font-light bottom-[23%] left-[26%] text-[65px] opacity-80 hover:opacity-100 duration-200"
              >
                I DREAMT
              </a>
              <p className="flex gap-4 text-[#E7444F] font-light tex absolute top-[30%] right-[26%] text-[65px] rotate-[-6deg]">
                A MARVERLOUS ERROR
              </p>
            </div>
          </div>

          {/* bg top */}

          <div
            className="bgImage pb-[31%]"
            style={{ backgroundImage: `url(${iCloudHumand})` }}
          ></div>
        </div>

        {/* bg mid f6 */}
        <div
          className="bgImage pb-[71%] relative"
          style={{ backgroundImage: `url(${midBgImg})` }}
        >
          <div className="absolute left-0 top-[10%] right-0 flex flex-col items-center justify-center">
            <div className="relative">
              <p className="flex font-light text-[#E7444F] text-[100px] uppercase absolute left-[7%] top-[12%]">
                <span className="text-white pr-5">that's a</span> spring
              </p>
              <p className="flex font-light text-[#E7444F] text-[100px] uppercase absolute right-[10%] top-[15%]">
                <span className="text-white pr-5">was</span> breaking
              </p>
              <p className="flex font-light text-[#E7444F] text-[300px] uppercase absolute left-[6%] bottom-[-5%]">
                out
              </p>
              <div className="flex font-light text-[#E7444F] text-[200px] uppercase absolute right-[5%] bottom-[1%]">
                Heart
                <p className="absolute top-0 left-0 text-[50px] text-white">
                  In
                </p>
                <p className="absolute top-0 right-0 text-[50px] text-white">
                  My
                </p>
              </div>
              <div>
                <img src={imgHeartGif} alt="" className="relative z-50" />
              </div>
            </div>
          </div>
        </div>

        {/* bg bottom f6*/}
        <div
          className="bgImage pb-[70%] relative"
          style={{ backgroundImage: `url(${imageWater})` }}
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
            <img src={imgBgF6Black} alt="" className="absolute inset-0" />
            <div
              className="bgImage pt-[300px] relative"
              style={{ backgroundImage: `url(${imagenight})` }}
            >
              <a
                href="#frame8"
                className="absolute text-[#fff] font-light bottom-[23%] left-[26%] text-[65px] opacity-70 hover:opacity-100 duration-200"
              >
                I DREAMT
              </a>
              <p className="flex gap-4 text-[#E7444F] font-light tex absolute top-[30%] right-[26%] text-[65px] rotate-[-6deg]">
                A MARVERLOUS ERROR
              </p>
            </div>
          </div>

          {/* bg top */}

          <div
            className="bgImage pb-[31%] "
            style={{ backgroundImage: `url(${iCloudHumand})` }}
          ></div>
        </div>

        {/* bg mid */}

        <div
          className="bgImage pb-[71%] relative"
          style={{ backgroundImage: `url(${midBgImg})` }}
        >
          <div>
            {/* <img
              src={imgSun}
              alt=""
              className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"
            /> */}
            {/* <img
              src={imgSunWrap}
              alt=""
              className="imgSun absolute left-[50%] top-[46%] -translate-x-1/2 -translate-y-1/2"
            /> */}
            <img
              src={imgSunWrapGif}
              alt=""
              className="imgSunGif  absolute left-[49%] top-[41%] -translate-x-1/2 -translate-y-1/2 w-[700px] z-50"
            />
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
              className="animation-custom left-0"
              alt=""
            />

            <p className="flex-1 text-[64px] leading-[64px] uppercase font-light max-w-[500px] hover:opacity-60 duration-200">
              It was <span className="text-[#D9495A]">fiery</span> because I
              felt <span className="text-[#D9495A]">warmth</span> as from a{" "}
              <span className="text-[#D9495A]">hearth</span>, and sun because it{" "}
              <span className="text-[#D9495A]">gave light</span> and{" "}
              <span className="text-[#D9495A]">brought tears</span> to my eyes.
            </p>
            <img src={imageTear} alt="" className="animation-custom right-0" />
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
          <img src={imgBgF6Black} alt="" className="absolute inset-0" />

          <div
            className="bgImage pb-[80%] absolute left-0 right-0 top-[0%]"
            style={{ backgroundImage: `url(${startF52})` }}
          >
            <div
              className="bgImage absolute left-0 right-0 top-[0%] mt-[200px]"
              style={{ backgroundImage: `url(${imagenight})` }}
            >
              <p className="absolute text-[#E7444F] font-light xl:top-[20%] left-[30%] text-[70px]">
                Last Night
              </p>
              <p className="flex gap-4 font-light absolute bottom-[-5%] xl:bottom-[8%] right-[25%] text-[70px]">
                <span>AS I WAS</span>
                <span className="text-[#E7444F]">SLEEPING</span>
              </p>
            </div>
          </div>
          <img
            src={iCloudHumand}
            alt=""
            className="absolute left-0 right-0 bottom-0"
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
          <div
            // className="relative"
            style={{ backgroundImage: `url(${startF52})` }}
          >
            <img src={imgBgF6Black} alt="" className="absolute inset-0" />
            <div
              className="bgImage pt-[300px] relative"
              style={{ backgroundImage: `url(${imagenight})` }}
            >
              <p className="absolute text-[#fff] font-light bottom-[23%] left-[26%] text-[65px]">
                I DREAMT
              </p>
              <p className="flex gap-4 text-[#E7444F] font-light tex absolute top-[30%] right-[26%] text-[65px] rotate-[-6deg]">
                A MARVERLOUS ERROR
              </p>
            </div>
          </div>

          {/* bg top */}

          <div
            className="bgImage pb-[31%]"
            style={{ backgroundImage: `url(${iCloudHumand})` }}
          ></div>
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
            className="absolute top-0 left-0 right-0 w-full h-[400px] xl:h-[800px]"
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
              <p className="absolute text-[#E7444F] font-bold xl:top-[15%] left-[30%] text-[82px]">
                Last Night
              </p>
              <p className="flex gap-4 font-bold absolute bottom-[-12%] xl:bottom-[2%] right-[24%] text-[82px]">
                <span>ASILAY</span>
                <span className="text-[#E7444F]">SLEEPING</span>
              </p>
              <p className="uppercase font-light text-[32px] absolute bottom-[-5%] xl:bottom-[2%] right-0 xl-right-[8%]">
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
