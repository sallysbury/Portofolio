import image from "../assets/github.png"
// import imagedc from "../assets/dc.png"
function Footfile (){
    
    return(
        <div className="foo flex  items-center flex-col gap-1">
            
            <div className="foot">
                <a href="https://github.com/sallysbury">
                    <img src={image} alt="github" width={25}/>
                </a> 
                {/* <a href="">
                    <img src={imagedc} alt="discord" width={50} />
                </a> */}
            </div>
            <div className="panda text-sm">
                avandasallysbury@gmail.com
            </div>
        </div>

       
    )
}
export default Footfile