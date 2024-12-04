

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';


import { FaRegUserCircle } from "react-icons/fa";

const News = () => {

    return (
        <div className=" mt-20 mb-20 ml-16 mr-16 ">
            <div>
              <p className=' text-6xl deep  text-center mb-10 '>Latest News</p>
            </div>
            <div>
            <>
            <Swiper
            pagination={{
            type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
            <SwiperSlide>
              
            <div>

            <div className=' flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10'>

            <div className=" bg-base-100 w-96 shadow-xl border-[1px] ">
            <figure className="">
            <img
            src="https://webdesign-finder.com/deepdigital-ai-v2/wp-content/uploads/2023/06/img_74-800x800.jpg"
            alt="Shoes"
            className=" w-full " />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className=" text-xs deep ">23, may 2023</h2>
            <p className=' text-2xl deep '>simple post with image</p>
            <p className=' text-xl mt-5 text-gray-400 deep '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum adipisci </p>
            <div className=' mt-5'>
            <p className=' flex justify-center'><FaRegUserCircle></FaRegUserCircle></p>
            <p className=' mt-2  deep text-xl'>EMMA JHONSON</p>
            </div>
            </div>
            </div>


            <div className=" bg-base-100 w-96 shadow-xl border-[1px] ">
            <figure className="">
            <img
            src="https://webdesign-finder.com/deepdigital-ai-v2/wp-content/uploads/2023/06/img_87-800x800.jpg"
            alt="Shoes"
            className=" w-full " />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className=" text-xs deep ">23, may 2023</h2>
            <p className=' text-2xl deep '>simple post with image</p>
            <p className=' text-xl mt-5 text-gray-400 deep '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum adipisci </p>
            <div className=' mt-5'>
            <p className=' flex justify-center'><FaRegUserCircle></FaRegUserCircle></p>
            <p className=' mt-2  deep text-xl'>EMMA JHONSON</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
            <div className=' flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10'>
            <div className=" bg-base-100 w-96 shadow-xl border-[1px] ">
            <figure className="">
            <img
            src="https://webdesign-finder.com/deepdigital-ai-v2/wp-content/uploads/2023/06/img_85-800x800.jpg"
            alt="Shoes"
            className=" w-full " />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className=" text-xs deep ">23, may 2023</h2>
            <p className=' text-2xl deep '>simple post with image</p>
            <p className=' text-xl mt-5 text-gray-400 deep '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum adipisci </p>
            <div className=' mt-5'>
            <p className=' flex justify-center'><FaRegUserCircle></FaRegUserCircle></p>
            <p className=' mt-2  deep text-xl'>EMMA JHONSON</p>
            </div>
            </div>
            </div>
            <div className=" bg-base-100 w-96 shadow-xl border-[1px] ">
            <figure className="">
            <img
            src="https://webdesign-finder.com/deepdigital-ai-v2/wp-content/uploads/2023/06/img_86-800x800.jpg"
            alt="Shoes"
            className=" w-full " />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className=" text-xs deep ">23, may 2023</h2>
            <p className=' text-2xl deep '>simple post with image</p>
            <p className=' text-xl mt-5 text-gray-400 deep '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum adipisci </p>
            <div className=' mt-5'>
            <p className=' flex justify-center'><FaRegUserCircle></FaRegUserCircle></p>
            <p className=' mt-2  deep text-xl'>EMMA JHONSON</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </SwiperSlide>
            </Swiper>
            </>
            </div>
        </div>
    );
};

export default News;