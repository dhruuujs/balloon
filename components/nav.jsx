import React from 'react'


function Nav(){

    return(
        <>
        <section className="h-[10vh] w-screen bg-[#222] flex place-content-around">
         <div className=" ml-4">
            <h2 className="font-[Lato] mt-4 text-3xl font-black">Balloon</h2>
        </div>

        <div>
            <input type="search" 
            placeholder="Enter city name" 
            className="bg-gray-400 mt-6 h-8 w-2xs pl-4 outline-0 rounded-sm"/>
        </div>
        </section>
        </>
    )
}

export default Nav;
