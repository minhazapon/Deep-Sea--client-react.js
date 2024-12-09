
import { TiShoppingCart } from "react-icons/ti";



const ProductsDetails = ({query}) => {

    const {image, name, price} = query

    return (
        <div>

            <div className="card card-compact bg-base-100 w-96 shadow-xl hover:border-[1px] border-cyan-500 ">
              <figure>
                <img className="  w-full h-[300px] "
                  src={image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title deep "> {name} </h2>
                <p className=" deep text-gray-400 "> {price} </p>
                <div className="card-actions justify-end">
                  <div className=" flex items-center  gap-3 ">
                  <p><TiShoppingCart className=" h-[30px] w-[30px] text-cyan-400 "></TiShoppingCart></p> 
                  <button className="btn  text-white bg-cyan-600 deep ">Add Cart</button>
                  </div>  
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default ProductsDetails;