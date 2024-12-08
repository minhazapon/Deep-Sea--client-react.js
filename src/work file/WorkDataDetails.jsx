


const WorkDataDetails = ({work}) => {

    const {image, name, title} = work

    return (
        <div>

        <div className=" bg-base-100 w-96 shadow-xl  hover:border-[1px] border-gray-300 ">
          <figure className="">
            <img
              src={image}
              alt="Shoes"
              className="  " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title deep "> {name} </h2>
            <p className="deep text-cyan-400 "> {title}  </p>
           
          </div>
        </div>
            
        </div>
    );
};

export default WorkDataDetails;