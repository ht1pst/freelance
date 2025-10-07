import section2img from "../src/assets/section2.jpg";  
import preview from "../src/assets/preview3.png"; 
import img1 from "../src/assets/adobe.svg";
import img2 from "../src/assets/facebook.svg";
import img3 from "../src/assets/deloitte.svg";
import img4 from "../src/assets/ntc.png";
import img5 from "../src/assets/ibm.svg";
import img6 from "../src/assets/airbus.svg";
import img7 from "../src/assets/tel.svg";
import img8 from "../src/assets/fuji.svg";
import img9 from "../src/assets/google.svg";

function Section2() {
  return (
    <section
      className="relative lg:h-screen h-350 bg-black text-white 
                 md:bg-cover md:bg-center md:bg-no-repeat"
      style={{ backgroundImage: `url(${section2img})` }}
    >
      {/* Dark overlay for md and above */}
      <div className="hidden md:block absolute inset-0 bg-black/60"></div>

      {/* Top Logos Row */}
      <div className="relative z-10 flex flex-col lg:flex-row md:flex-row justify-center items-center lg:gap-30 md:gap-5 pt-2">
        <div>
          <h1 className="text-lg md:text-sm font-semibold">As used by</h1>
        </div>

        <div className="flex gap-4 items-center overflow-x-auto md:overflow-x-visible whitespace-nowrap max-w-[300px] md:max-w-[500px]">
          <img src={img1} alt="" className="w-24 md:w-12 md:h-12 h-24 object-contain flex-shrink-0" />
          <img src={img2} alt="" className="w-24 md:w-12 md:h-12 h-24 object-contain flex-shrink-0" />
          <img src={img3} alt="" className="w-24 md:w-12 md:h-12 h-24 object-contain flex-shrink-0" />
          <img src={img4} alt="" className="w-24 md:w-10 md:h-6 h-6 object-contain flex-shrink-0" />
          <img src={img5} alt="" className="w-24 md:w-10 md:h-6 h-6 object-contain flex-shrink-0" />
          <img src={img6} alt="" className="w-24 md:w-12 md:h-12 h-24 object-contain flex-shrink-0" />
          <img src={img7} alt="" className="w-24 md:w-12 md:h-12 h-24 object-contain flex-shrink-0" />
          <img src={img8} alt="" className="w-24 md:w-10 md:h-10 h-24 object-contain flex-shrink-0" />
          <img src={img9} alt="" className="w-24 md:w-12 md:h-12 h-24 object-contain flex-shrink-0" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-40 lg:pt-30 md:pt-10">
        <div>
          <div className="pl-3 md:pl-0">
            <h1 className="text-4xl leading-normal font-semibold w-70 mx-auto md:mx-0">
              <span className="text-pink-600">Make it real</span> with Freelancer
            </h1>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row gap-10 mt-6">
            <div className="flex flex-col mx-auto">
              <h1 className="font-semibold text-xl">The best talent</h1>
              <p className="w-70 font-semibold mt-3 text-md">
                Discover reliable professionals by exploring their portfolios and immersing yourself in the feedback shared on their profiles.
              </p>
            </div>

            <div className="flex flex-col mx-auto">
              <h1 className="font-semibold text-xl">Fast bids</h1>
              <p className="w-70 font-semibold mt-3 text-md">
                Get quick, no-obligation quotes from skilled freelancers. 80% of jobs receive bids within 60 seconds. Your idea is just moments from reality.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row gap-10 mt-10">
            <div className="flex flex-col mx-auto">
              <h1 className="font-semibold text-xl">Quality work</h1>
              <p className="w-70 font-semibold mt-3 text-md">
                With Freelancer's talent pool of over 60 million professionals at your fingertips, you'll find quality talent to get what you need done.
              </p>
            </div>

            <div className="flex flex-col mx-auto">
              <h1 className="font-semibold text-xl">Be in control</h1>
              <p className="w-70 font-semibold mt-3 text-md">
                Stay in the loop while on the move. Chat with your freelancers and get real time updates with our mobile app. Anytime, anywhere.
              </p>
            </div>
          </div>

          <div className="mt-10 pl-3 md:pl-0">
            <h1 className="font-semibold text-2xl flex justify-center md:justify-start">
              Make your dreams a reality.
            </h1>
            <a href="#" className="text-pink-600 text-xl pt-10">Get Started now</a>
          </div>
        </div>

        <div>
          <img src={preview} alt="" className="lg:w-90 md:w-130 w-80 lg:pt-10" />
        </div>
      </div>
    </section>
  );
}

export default Section2;
