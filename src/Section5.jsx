import img1 from "../src/assets/the.svg";
import img2 from "../src/assets/cn.svg";
import img3 from "../src/assets/wall.svg";
import img4 from "../src/assets/cnn.svg";
import img5 from "../src/assets/bloom.svg";
import img6 from "../src/assets/yahoo.svg";
import img7 from "../src/assets/business.svg";
import img8 from "../src/assets/forbes.svg";
import section5img from "../src/assets/section5img.jpg";
import section5img1 from "../src/assets/section5img1.jpg";
import section5img2 from "../src/assets/section5img2.png";
import section5img3 from "../src/assets/section5img3.jpg";
import section5img4 from "../src/assets/section5img4.png";
function Section5(){
    return(
        <section className="bg-black h-180">
            <div>
                <div className="flex flex-col lg:flex-row  lg:px-10 px-3 justify-center gap-8 items-center pt-10">
                   <h1 className="text-lg font-semibold text-white">As used by</h1>
                   <div className="flex gap-4 items-center overflow-x-auto whitespace-nowrap max-w-[300px]">
<img src={img1} alt=""  className="h-5"/>
<img src={img2} alt=""  className="h-8"/>
<img src={img3} alt="" className="h-5" />
<img src={img4} alt="" className="h-5" />
<img src={img5} alt="" className="h-5" />
<img src={img6} alt=""  className="h-5"/>
<img src={img7} alt="" className="h-5" />
<img src={img8} alt=""  className="h-5"/>
</div>
                </div>

<div className="justify-center flex lg:flex-row flex-col-reverse items-center gap-5 lg:px-10 px-3 pt-20">
                <div className="grid lg:grid-cols-2 grid-cols-4 lg:gap-3 gap-3  ">
                    <img src={section5img1} alt="" className=" lg:w-70  mx-auto lg:rounded-xl rounded-md"/>
                     <img src={section5img2} alt=""  className=" lg:w-70  mx-auto lg:rounded-xl rounded-md"/>
                      <img src={section5img3} alt=""  className=" lg:w-70  mx-auto lg:rounded-xl rounded-md"/>
                       <img src={section5img4} alt=""  className=" lg:w-70  mx-auto lg:rounded-xl rounded-md"/>
                </div> 
                <div>
                    <img src={section5img} alt=""  className="w-140 rounded-xl"/>
                </div>
               
                </div>
            </div>
        </section>
    )
}
export default Section5;