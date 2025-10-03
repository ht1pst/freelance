import section4img from "../src/assets/section4img.jpg";  
import preview from "../src/assets/preview3.png"; 
function Section4(){
    return(
       
         <section
                 className="lg:h-screen h-330 bg-cover bg-center text-white"
                      style={{ backgroundImage: `url(${section4img})` }}>
                          <div className="flex justify-center items-center gap-30 pt-2"></div>
                        <div className="flex flex-col items-center justify-center gap-40 lg:pt-30">
                          
                    <div>
                      <h1 className="lg:text-6xl text-3xl font-semibold mx-auto">Tap into a</h1>
                      <h1 className="lg:text-6xl text-3xl font-semibold mt-3 text-pink-600 mx-auto">global talent work</h1>
        <div className="flex flex-col mx-auto mt-10">
            <div>
                <h1 className="font-semibold text-2xl">Post your job</h1>
                <p className="w-70 font-semibold mt-3 text-md ">It's free and easy! Get lots of competitive bids that suit your budget in minutes. Start making your dreams reality.</p>
            </div>
            
            
            <div className="mt-10">
                <h1 className="font-semibold text-2xl">Choose freelancers</h1>
                <p className="w-70 font-semibold mt-3 text-md ">No job is too big or complex. We've got freelancers for jobs of any size or budget, across 2700+ skills. Let our talent bring your ideas to life.</p>
            </div>
            
           </div>
        
        
           <div  className="flex flex-col mx-auto">
        
            <div className="mt-10" >
                <h1 className="font-semibold text-2xl">Pay safely</h1>
                <p className="w-70 font-semibold mt-3 text-md ">Only pay for work when you are 100% satisfied with the outcome. Our milestone payment system protects you every step of the way.</p>
            </div>
            
            
            <div className="mt-10">
                <h1 className="font-semibold text-2xl">We're here to help</h1>
                <p className="w-70 font-semibold mt-3 text-md ">Your time is precious. Let our team of expert recruiters and co-pilots save you time finding talent, even managing your job if needed.</p>
            </div>
        </div>
        
        <div className="mt-10">
        <h1 className="font-semibold text-4xl">Create the future.</h1>
        <a href="#" className="text-pink-600 text-xl pt-10">Get Started now</a>
        </div>
                    
                    </div>
        
                    <div>
                        <img src={preview} alt="" className="lg:w-90 w-75 lg:pt-10"  />
                    </div>
                    </div>
        
        
                </section>
    )
}
export default Section4