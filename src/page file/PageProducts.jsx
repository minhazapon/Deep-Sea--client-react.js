import { useQuery } from "@tanstack/react-query";
import ProductsDetails from "./ProductsDetails";




const PageProducts = () => {
   

    const {data: query} = useQuery({

        queryKey:['query'],
        queryFn: async () => {
             
            const res = await fetch('https://deepsea-server-express-js.onrender.com/deepData')
            return res.json()
  
        }

    })


    return (
        <div className=" mt-20 ml-16 mr-16 mb-10 ">

              
              <div className=" flex justify-center  ">
                <div className=" grid  md:grid-cols-3 gap-5 ">
                  
                   {

                   query?.map( query => <ProductsDetails query={query} ></ProductsDetails>  )

                   }

                </div>
              </div>

            
        </div>
    );
};

export default PageProducts;