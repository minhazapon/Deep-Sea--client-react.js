import { useQuery } from "@tanstack/react-query";
import ProductsDetails from "./ProductsDetails";



const YourProducts = () => {


    const {data: query} = useQuery({
         
        queryKey: ['data'],
        queryFn: async () => {
           
            const res = await fetch('http://localhost:5000/seaData')
            return res.json()
    
        }

    })

    
    return (
        <div className=" mt-20 mb-20 ml-10 mr-10 ">

            <div className=" flex justify-center ">

             
                
                <div className=" grid  md:grid-cols-3 gap-10 ">
                       
                       {
                           
                           query?.map( query =>  <ProductsDetails  query={query} ></ProductsDetails>  )


                       }

                </div>

              

            </div>
            
        </div>
    );
};

export default YourProducts;