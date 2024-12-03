import React from "react";
import { useState,useEffect } from "react";
// import { useLoaderData } from 'react-router-dom';

function Github(){

    // const data = useLoaderData();


    const[data,setData] =useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok...');
            }
            return response.json();
        })
        
        .then(data => {
            console.log(data);
            setData(data)
        })

        .catch(error=>{
            console.log('THere was a problem with the fetch operation...')
        })
    },[])


    return(
        <>
                   <div className="w-full h-[700px]">
                        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
                            Github Followers: {data.followers ? data.followers :'Loding...!'}
                            <img src="/images/Github-desktop-logo-symbol.png" alt="Github Image Loading...." className="w-36 h-auto" />
                            </div>
                        <div className="text-center">
                            <div className="flex flex-wrap justify-center gap-20 pl-4 pr-4">
                                <img src='images/github-pixecls-01.jpg' alt="" className="h-96 w-96 rounded-md hover:shadow-2xl" />
                                <img src='images/github-pixecls-02.jpg' alt="" className="h-96 w-96 rounded-md hover:shadow-2xl" />
                                <img src='images/github-pixecls-03.jpg' alt="" className="h-96 w-96 rounded-md hover:shadow-2xl" />
                            </div>                        
                        </div>
                   </div>
        </>
    )
}
export default Github

// export const githubInfoLoader = async () => {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         return response.json()
//     }