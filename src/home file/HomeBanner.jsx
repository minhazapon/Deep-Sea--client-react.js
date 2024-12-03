


const HomeBanner = () => {


    return (
        <div className=" mb-10 bg-no-repeat bg-cover "
        
        style={{
            backgroundImage: "url(https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vNzQwN2ZiZjgtYTkzYy00MzIwLWFkYzktZTQzYTljNDQ0ZTg1LmpwZWc.webp)",
          }}
        
        >


            <div className=" flex-col md:flex-row lg:flex-row flex justify-center  gap-64 p-10 ">
            <div className=" text-white mt-10 ">
            <p className=" deep text-3xl">/01</p>
            <p className=" bg-cyan-400 h-[3px] w-[250px] mt-5 "></p>
            <p className=" mt-5 deep text-4xl ">Work Collection</p>
            <p className=" text-2xl deep mt-3 ">Action Collection</p>
            <p className=" text-2xl deep mt-3 ">Science Collection</p>
            </div>
            <div className=" mt-52">
            <p className=" text-xl deep text-white ">Our Mission</p>
            <p className=" deep text-7xl mt-5  "><span className=" text-cyan-400 ">Artificial</span><br></br>
            <span className=" text-white ">Intelligence</span><br></br>
            <span className=" text-cyan-400 ">Development</span></p>
            </div>
            </div>


            <div className=" flex-col md:flex-row lg:flex-row mt-10 flex  justify-between items-center">
 
                
            
                <div className=" bg-black p-14 w-full opacity-80  ">
                   <p className=" text-xl text-cyan-400 deep ">Events</p>
                   <p className=" text-xl deep text-white mt-5 ">Stet clita kasd gubergren sea takimata</p>
                   <p className=" deep mt-5 text-gray-500 ">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing<br></br> elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                   <p className=" text-xl deep text-cyan-400 mt-5 cursor-pointer ">View Calender</p>
                </div>
                
               

                <div className=" bg-cyan-700 p-14 w-full opacity-80 ">
                   <p className=" text-xl text-cyan-400 deep ">News</p>
                   <p className=" text-xl deep text-white mt-5 ">Sample Post</p>
                   <p className=" deep mt-5 text-gray-300 ">Leads. Leads. Leads. If lead generation is<br></br> one of the main goals of your marketing</p>
                   <p className=" text-xl deep text-cyan-400 mt-5 cursor-pointer  ">Read More</p>
                </div>



            </div>
            
        </div>
    );
};

export default HomeBanner;