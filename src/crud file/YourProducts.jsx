import { useQuery } from "@tanstack/react-query";



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

            <div>


              

            </div>
            
        </div>
    );
};

export default YourProducts;