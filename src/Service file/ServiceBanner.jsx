import { Link } from "react-router-dom";



const ServiceBanner = () => {

    return (
        <div>
        <div className="   ">
        <div className=" bg-no-repeat bg-cover p-16 w-full "
         style={{
            backgroundImage: "url(https://coolbackgrounds.io/images/backgrounds/white/white-triangle-369b8d2d.jpg)",
          }}
        >
        <p className=" deep text-center text-5xl ">Service</p>
        <div className=" flex justify-center items-center gap-3 mt-5 ">
        <Link to='/'><p className=" deep text-cyan-400 ">Home</p></Link>
        <p>.</p>
        <p className=" deep ">Service</p>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ServiceBanner;