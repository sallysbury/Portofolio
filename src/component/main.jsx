import image from "../assets/panda.png"
function Main() {
    return (
        <div className="flex justify-between items-center px-10 py-20">
            <div className="img w-2/5">
                <img className="img rounded-[40%]" src={image} alt="photos" width={1000}/>
            </div>

            <div className="text w-2/5">
                <h1 className="h1 w-2/4 bg-yellow-300 text-3xl font-bold">Holla</h1><br/>
                    <text className="text text-3xl">
                        im avanda sallysbury, a <span className="span bg-yellow-300">Full Stack Web Developer</span> with high interest in the software industry.
                    </text>
            </div>
        </div>
    
    )
}
export default Main