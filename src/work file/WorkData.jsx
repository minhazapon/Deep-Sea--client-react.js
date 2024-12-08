import { useEffect } from "react";
import { useState } from "react";
import WorkDataDetails from "./WorkDataDetails";



const WorkData = () => {

    const [work, setWork] = useState([])


    useEffect( () => {
        fetch('work.json')
        .then( res => res.json())
        .then( data => setWork(data) )
    } , [])

    return (
        <div className=" mt-20 flex justify-center ">
        <div className=" grid  md:grid-cols-3 gap-5 ">
        {work.map( work =>  <WorkDataDetails work={work} ></WorkDataDetails> )}
        </div>
        </div>
    );
};

export default WorkData;