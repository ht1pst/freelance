import bg from "../src/assets/section9img.jpg";
function Section9(){
    return(
       <section 
         className="lg:h-220  h-260 text-white bg-black md:bg-cover md:bg-center md:bg-no-repeat md:bg-[url('/src/assets/section9img.jpg')]"
                             style={{backgroundImage: ` url(${bg})`, }}>
        <div className="lg:pt-30 lg:px-10 px-6 flex flex-col justify-center ">
            <h1 className="text-5xl leading font-semibold lg:w-200 ">Power your organisation's <span className="text-pink-600">competitive advantage</span></h1>
            <div className="mt-10">
                <h1 className="font-semibold text-2xl mx-auto ">Freelancer Enterprise</h1>
                <p className="lg:w-180 w-60 font-semibold mt-3 text-lg ">Company budget? Get more done for less. Use our workforce of millions to help your business achieve more.</p>
                <a href="#" className="text-pink-600 text-xl mt-20">View more</a>
            </div>

             <div className="mt-10">
                <h1 className="font-semibold text-2xl">Innovation Challenges</h1>
                <p className="lg:w-180 w-60 font-semibold mt-3 text-lg">Transform impossible challenges into breakthrough solutions through the world's largest innovation ecosystem.</p>
                <a href="#" className="text-pink-600 text-xl mt-20">View more</a>
            </div>

             <div className="mt-10">
                <h1 className="font-semibold text-2xl">Freelancer API</h1>
                <p className="lg:w-180 w-60 font-semibold mt-3 text-lg">Millions of professionals on demand. Why hire people when you can simply integrate our talented cloud workforce instead?</p>
                <a href="#" className="text-pink-600 text-xl mt-20">View more</a>
            </div>
        </div>
       </section>
    )
}
export default Section9;