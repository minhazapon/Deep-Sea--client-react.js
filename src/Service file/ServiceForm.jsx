

const ServiceForm = () => {


    return (
        <div className=" mt-20 mb-10 ">

        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <div class="bg-white max-w-4xl mx-auto w-full">
            <div class="grid grid-cols-6 h-full">
              <div class="bg-cyan-700 p-10 col-span-2">
                <h2 class=" deep mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Infos Contact</h2>
                <p class=" deep font-bold text-blue-100 py-8 border-b border-gray-300">
                  Location Address
                  <span class=" deep font-normal text-xs text-blue-300 block">Romada, 16/A, YoYo City, USA</span>
                </p>
                <p class=" deep font-bold text-blue-100 py-8 border-b border-gray-300">
                  Phone Number
                  <span class=" deep font-normal text-xs text-blue-300 block">+889 (909) 567 87 9</span>
                </p>
                <p class=" deep font-bold text-blue-100 py-8 border-b border-gray-300">
                  Email Address
                  <span class=" deep font-normal text-xs text-blue-300 block">DeepSea@gmail.com</span>
                </p>
                <p class=" deep font-bold text-blue-100 py-8 border-b border-gray-300">
                  Web Address
                  <span class=" deep font-normal text-xs text-blue-300 block">www.deepsea.com</span>
                </p>
        
              </div>


              <div class="bg-blue-50 p-14 col-span-4">
                <form>

                <h2 class=" deep mb-14 font-bold text-4xl text-cyan-700 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Contact Us</h2>
                <div class="grid gap-6 mb-6 grid-cols-2">
                  <div class="flex flex-col">
                    <input class="py-4 bg-white rounded-full px-6 placeholder:text-xs"  placeholder="FullName" name="fullName" ></input>
                  </div>
                  <div class="flex flex-col">
                    <input class="py-4 bg-white rounded-full px-6 placeholder:text-xs"  placeholder="Your Topic" name="topic" ></input>
                  </div>
                </div>
                <div class="grid gap-6 mb-6 grid-cols-2">
                  <div class="flex flex-col">
                    <input class="py-4 bg-white rounded-full px-6 placeholder:text-xs"  placeholder="Email Adresse" name="email" ></input>
                  </div>
                  <div class="flex flex-col">
                    <input class="py-4 bg-white rounded-full px-6 placeholder:text-xs"  placeholder="Phone Number" name="email" ></input>
                  </div>
                </div>
                <div class="mb-6">
                  <textarea class="w-full rounded-2xl placeholder:text-xs px-6 py-4" placeholder="Your Message" name="message" id="" rows="8"></textarea>
                </div>
                <div class="flex justify-center">
                  <button class="rounded-full bg-cyan-700 text-white font-bold py-4 px-6 min-w-40 hover:bg-cyan-400 deep transition-all">Submit</button>
                </div>

                </form>
                
              </div>
              
            </div>
          </div>
        </div>
            
        </div>
    );
};

export default ServiceForm;