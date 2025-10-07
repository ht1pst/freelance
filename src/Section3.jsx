import iwatch from "../src/assets/iwatch.jpg";
import img1 from "../src/assets/section3img1.jpg";  
import img2 from "../src/assets/section3img2.jpg";  
import img3 from "../src/assets/section3img3.jpg";  
import img4 from "../src/assets/section3img4.jpg";  
function Section3(){
    return(
        <section className="bg-black lg:pt-40 pt-20 md:pt-10 lg:h-200 h-130">
            <div className="flex lg:flex-row md:flex-row flex-col gap-5 md:gap-2 justify-center lg:px-10 px-2">
                <div>
                    <img src={iwatch} alt="" className="w-140 md:w-119 rounded-xl" />
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-4 lg:gap-3 gap-3 md:py-5  ">
                    <img src={img1} alt="" className=" lg:w-70 md:w-55  mx-auto lg:rounded-xl rounded-md" />
                     <img src={img2} alt="" className="  lg:w-70 md:w-55 mx-auto lg:rounded-xl rounded-md"/>
                     <img src={img3} alt="" className=" lg:w-70 md:w-55 mx-auto lg:rounded-xl rounded-md"/>
                     <img src={img4} alt="" className=" lg:w-70 md:w-55 mx-auto lg:rounded-xl rounded-md" />
                </div>
            </div>
        </section>
    )
}
export default Section3;