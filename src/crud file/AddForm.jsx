import Swal from "sweetalert2";



const AddForm = () => {

    
   const handleAdd = e => {

     e.preventDefault();


     const form = e.target 

     const image = form.image.value
     const name = form.name.value
     const price = form.price.value
     const type = form.type.value
     const allValue = { image, name, price, type }

     fetch('http://localhost:5000/seaData',{
      
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(allValue)
     })
     .then( res => res.json())
     .then( data => {
     console.log(data)

     if(data){
      Swal.fire({
          title: 'Added Done!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      form.reset()  
     }

     } )
   }




    return (
        <div className=" mt-20 mb-20 ml-5 mr-5 ">

        <div class="mx-14 mt-10 border-2 border-cyan-500 rounded-lg">
          <div class="mt-10 text-center font-bold"></div>
          <div class="mt-3 text-center text-4xl font-bold deep ">Add Your <span className=" text-cyan-400 ">Products</span></div>
          <div class="p-8">

            <form onSubmit={handleAdd} >
            <div class="flex gap-4">
              <input required type="url" name="image" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Image" id="" />
              <input required type="text" placeholder="Name" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" name="name" />
            </div>
            <div class="my-6 flex gap-4">
              <input required type="text" name="price"  class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Price" />
              <input required type="text" name="type"  class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Type" />
            </div>
            <div class="">
              <textarea required name="textarea" id="text" cols="30" rows="10" class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300">Message</textarea>
            </div>
            <div class="text-center">
              <input type="submit" className="cursor-pointer deep rounded-lg bg-cyan-600 px-8 py-5 text-sm font-semibold text-white" value="Add Products" />
            </div>
            </form>
          
          </div>
        </div>
            
        </div>
    );
};

export default AddForm;