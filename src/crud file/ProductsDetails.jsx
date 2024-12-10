import Swal from "sweetalert2";



const ProductsDetails = ({query}) => {


    const { _id, image, name, price} = query


    const handleDelete = delete_id =>{

          
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
               
                fetch(`http://localhost:5000/seaData/${_id}`, {

                  method: 'DELETE',
                })

                .then( res => res.json())
                .then( data => {
      
                  console.log(data)
      
                  if(data){
                     
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
      
      
                  }
      
                } )
      
            }
          });
 

    }




    return (
        <div>
             
             <div className="card bg-base-100 w-96 shadow-xl  hover:border-[1px] border-cyan-400 ">
              <figure className="px-10 pt-10">
                <img
                  src={image}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title deep "> {name}  </h2>
                <p className=" deep "> {price} </p>
                <div className="card-actions">
                  <button className="btn deep bg-cyan-500 text-white ">Buy Now</button>  
                  <button className="btn deep bg-cyan-500 text-white ">Update</button>
                  <button onClick={() => handleDelete(query._id) } className="btn deep bg-cyan-500 text-white ">Delete</button>
                </div>
              </div>
            </div>

            
        </div>
    );
};

export default ProductsDetails;