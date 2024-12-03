


const Who = () => {
    return (
        <div className=" mt-20 mb-20 ml-16 mr-16  ">


            <div className=" flex-col md:flex-row lg:flex-grow flex justify-between items-center gap-10">

               <div>
                  <img className=" h-[600px]" src="https://webdesign-finder.com/deepdigital-ai-v2/wp-content/uploads/2023/06/img_72.png" alt="" />
               </div>
               
               <div className=" flex justify-center ">

               <div>
                <p className=" deep text-6xl">Who We Are</p>
                <p className=" mt-10 text-xl deep ">Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br></br> sed do eiusmod tempor.
                </p>
                <p className=" deep text-xl text-gray-400 mt-10 ">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor<br></br> reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                <p className=" mt-14 deep "><span className=" text-cyan-400">Just Call Me Now</span> or <span className=" text-cyan-400">Request a Call</span></p>
                <p className=" text-xl mt-7 deep ">1-800-123-4567 <span className=" text-cyan-400 ">&</span> 1-800-123-4568</p>
                <div className="  mt-6 flex justify-start">
                <form class="max-w-sm ">
                    <label for="phone-input" class=" deep block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                            </svg>
                        </div>
                        <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                    </div>
                    <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400 deep ">Select a phone number that matches the format.</p>
                    <div>
                        <input className=" mt-5 btn bg-cyan-400 w-full text-white deep " type="submit" value="Submit" />
                    </div>
                </form>
                </div>
                <div className=" mt-5 flex items-center gap-5 ">
                 <div>
                    <p className=" deep text-xl ">Eunice D. Matherne</p>
                    <p className=" mt-5 deep text-gray-400 ">Cofounder</p>
                 </div> 
                 <img  src="https://webdesign-finder.com/deepdigital-ai-v2/wp-content/uploads/2023/06/signature_5.png" alt="" />

               </div>
               </div>

               </div>
               
              




            </div>
            
        </div>
    );
};

export default Who;