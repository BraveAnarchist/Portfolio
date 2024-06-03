import { useState } from "react";
export default function More() {


    const [textS, setText] = useState(false);
    function textToggle() {
        setText(!textS);
    }

    return (
        <main className="ml-[27vw] mt-[5vh] w-[62vw] bg-[#20809c] relative p-[2vh] rounded-lg">
            <h1 className="text-3xl font-semibold text-[white]">Side Projects</h1>
            <hr className="bg-[#f9d76f] w-[4%] border-none h-[0.7vh] rounded-md mt-[2vh] mb-[2vh]" />
            <nav className="absolute flex justify-evenly w-[50%] text-[#ced0d0] bg-[#284149] p-[2vh] rounded-r-lg rounded-bl-lg right-0 top-0">
                <a href="/" >About</a>
                <a href="/certificate">Certificates</a>
                <a href="/project">Projects</a>
                <a href="/more" className="text-[#f9d76f]">More</a>
                <a href="/contact">Contact</a>
            </nav>
            <div className="flex gap-[1vw] mt-[3vh]">
                <div className="box bg-[#206679]  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/pigletz.jpg" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p>Marketing & BizDev • Content Creator</p>
                        <h3 className="text-[#fafafa] text-lg font-bold">Pigletz</h3>
                        <p>I create and manage the Pigletz community's social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the community's reach and impact through partnerships in the Web3 space.</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-solid fa-globe"></i> Website</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-youtube"></i> YouTube</a></div>

                </div>
                <div className="box bg-[#206679]  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/sha-beats.jpg" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p>Beat Making • Sound Design</p>
                        <h3 className="text-[#fafafa] text-lg font-bold">Music Production</h3>
                        <p>Produced over 100 instrumentals in different genres, collaborated with artists and my beats are on popular streaming platforms like Spotify, iTunes, Amazon and Deezer. They can also be purchased exclusively on my beatstore for musicians to create their unique sound.</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-solid fa-globe"></i> Website</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-youtube"></i> YouTube</a></div>

                </div>
            </div>


            <div className="flex gap-[1vw] mt-[8vh]">
                <div className="box bg-[#206679]  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/prompt-engineering.jpg" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p>Stable Diffusion • Midjourney</p>
                        <h3 className="text-[#fafafa] text-lg font-bold">Prompt Engineering</h3>
                        <p>I use AI tools to create images from prompts. Focusing on clear instructions, I achieve precise visuals, eliminate unwanted details and ensure consistent results. This skill is ideal for development of apps that demand unique and consistent outcomes.</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-solid fa-image"></i> Example</a></div>
                    

                </div>
                <div className="box bg-[#206679] rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/sha-pixels.png" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p>Multimedia Design • 3D Rendering</p>
                        <h3 className="text-[#fafafa] text-lg font-bold">Digital Content Creation</h3>
                        <p>My digital art portfolio, which includes a wide collection of graphic designs, 3D models and short video animations created for various purposes. I have long experience working with popular softwares like Adobe Photoshop, After Effects, Premiere Pro and Blender.</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></div>

                </div>
            </div>



        </main>
    )
}