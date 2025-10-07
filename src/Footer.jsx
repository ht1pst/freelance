function Footer(){
    return(
       <section className="bg-black text-white">
        <div className="pt-10">
        <h2 className="border border-1 border-gray-800 "></h2>
        <div className="lg:flex justify-center gap-50 mt-5">
            <div>
                <h1 className="font-semibold text-lg hidden lg:block">83,818,071</h1>
                <p className="text-sm hidden lg:block">Registered Users</p>
            </div>

             <div>
                <h1 className="font-semibold text-lg hidden lg:block">25,033,824</h1>
                <p className="text-sm hidden lg:block">Total Jobs Posted</p>
            </div>
            <div className="px-3 ">
                <p className="text-sm">Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 142 189 759)</p>
                <p className="text-sm">Copyright © 2025 Freelancer Technology Pty Limited (ACN 142 189 759)</p>
            </div>
        </div>
        </div>
       </section>
    )
    }
export default Footer;