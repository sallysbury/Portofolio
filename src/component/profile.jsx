import image from "../assets/puppy.png"
// import imagecss from "../assets/css.png"
function Profile (){
    return (
        <div className="flex justify-between items-center px-10 py-20">

            <div className="tex w-2/5" >
                <h1 className="about w-2/4 bg-black text-yellow-300 text-3xl">About me</h1><br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ducimus vel, mollitia illo, dolore temporibus nam consequuntur explicabo obcaecati provident, culpa recusandae ut consectetur rerum. Voluptatem eos omnis dolorem modi ipsam placeat a? Repellat, aut! Ex odio molestiae illum iste dicta in quod et provident fugit adipisci architecto, enim eum, modi exercitationem odit! Aliquam, sequi esse! Earum, cumque dicta. Quidem, voluptatibus. Ipsa id iure quo minima hic? Nam aliquam quaerat veniam quod consequatur, voluptatibus mollitia omnis illo illum autem, iure sit neque suscipit distinctio nesciunt. Facere eligendi voluptates vel quas sequi modi at incidunt magni aut vitae molestiae eum, nam tempore harum nesciunt nobis aliquam repudiandae ipsam fugiat obcaecati assumenda veniam rerum? Expedita, perferendis veritatis! Reprehenderit nesciunt debitis corrupti sunt odit ratione ea impedit repellat esse nihil assumenda, quia quam, aspernatur fugit! Deleniti ab esse voluptas recusandae fugiat repellendus. Vitae doloribus harum beatae. Alias quam voluptatem similique vel et rem.
            </div>

            <div>
                <img className="img rounded-[80%]" src={image} alt="photos" width={200} />
            </div>

            <div className="text w-2/5">
                <h1 className="h1 w-2/4 bg-white text-3xl">Detail</h1><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui delectus ipsum unde facilis ab quae quos eos nemo dolor pariatur provident sit consequatur autem perferendis quidem nostrum possimus, dicta error beatae odit? Tenetur voluptas sint obcaecati illo autem, modi labore cumque. Mollitia id unde impedit, ex libero minus quia dicta suscipit eos nobis illum aut harum! Vel, dolor nihil fugiat neque, laudantium explicabo odio enim ex recusandae, veritatis a dignissimos. Ab sed sunt, tempora officia pariatur dolorum quis similique suscipit sapiente totam aliquid voluptates incidunt culpa placeat, laboriosam, obcaecati atque praesentium alias perferendis? Unde tenetur eum consequatur hic quos?  
            </div>

        </div>

    )
}
export default Profile