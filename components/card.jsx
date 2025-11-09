import sun from "../src/assets/sun.svg"

function Card(){


return(
    <section id="weatherCard" className="h-[545px] w-[1026px] p-6 rounded-[30px] mt-10 justify-center-safe">
        <div className="currentTime overflow-hidden">
            <h2 className="mt-5 ml-4 font-[Lato] font-bold text-[1.5em] text-gray-950">Current Weather</h2>
            <h3 className="ml-4 text-gray-950 font-[Lato] font-medium text-2xl">7:35 PM</h3>
        </div>

        <div className="weatherInfo font-[Montserrat] mt-10 ml-10 text-gray-950 flex">
            <img src={sun}
            className="h-32 w-32 mt-3"/>
            <h1 className="font-extrabold ml-3 mt-6 text-8xl">19°</h1>
        
        <div className="flex flex-col">
            <h2 className="font-extrabold mt-6 ml-3 text-6xl">Clear</h2>
            <h2 className="text-3xl ml-3 font-semibold">Feels like 18°</h2>
        </div>
        
        
        
        </div>
    </section>
)
}


export default Card;