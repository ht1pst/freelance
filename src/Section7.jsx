import section7img from "../src/assets/section7img2.jpg"; 
import cubes from "../src/assets/cubes_1.png";   

function Section7(){
    return(
        <div className="lg:px-20 px-3 bg-black">
       <section className="  text-white relative overflow-visible lg:h-200 h-210 "> 
       <div className=" bg-[#141414] border border-blue-300 rounded h-200">
        <div className="flex justify-between items-center  ">
            <div className="relative lg:px-10 px-3">
            
              <img 
                src={cubes} 
                alt="" 
                className="lg:w-100 w-50 absolute lg:-top-50 -top-20 "
              />

              <p className="font-semibold lg:mt-30 mt-15 lg:text-4xl text-xl ">Automate your calls with</p>
              <h1 className="font-bold lg:text-7xl text-6xl w-5  ">AI Agents</h1>
              <p className="font-semibold lg:text-xl text-md mt-5 lg:w-170 w-72 ">
                Imagine you can get AI to answer the phone, make sales, set appointments, 
                and generally make your life way easier. It'll cost you less than building 
                a website, and it's the next big thing for businesses in 2025.
              </p>
              <p className="font-semibold lg:text-xl text-md mt-5 lg:w-170 w-72 ">
                Thanks to our extensive global talent network, Freelancer is your best bet 
                for finding AI experts to take your business to the next level.
              </p>
              <h1 className="font-semibold lg:text-4xl text-2xl mt-5 ">
                Ready to grow your business with AI?
              </h1>
              <div className="mt-5">
                <a href="#" className="text-pink-600 font-semibold text-2xl mt-5 ">
                  Explore AI Services
                </a>
              </div>
            </div>

            <div>
                <img src={section7img} alt="" className="h-180 w-00 hidden lg:block"/>
            </div>
        </div>
        </div>
       </section>
       </div>
    )
}
export default Section7;
