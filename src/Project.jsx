import { useState } from "react";
export default function Project() {


    const [textS, setText] = useState(false);
    function textToggle() {
        setText(!textS);
    }

    return (
        <main className="ml-[27vw] mt-[5vh] w-[62vw] bg-[#20809c] relative p-[2vh] rounded-lg">
            <h1 className="text-3xl font-semibold text-[white]">My Projects</h1>
            <hr className="bg-[#f9d76f] w-[4%] border-none h-[0.7vh] rounded-md mt-[2vh] mb-[2vh]" />
            <nav className="absolute flex justify-evenly w-[50%] text-[#ced0d0] bg-[#284149] p-[2vh] rounded-r-lg rounded-bl-lg right-0 top-0">
                <a href="/" >About</a>
                <a href="/certificate">Certificates</a>
                <a href="/project" className="text-[#f9d76f]">Projects</a>
                <a href="/more">More</a>
                <a href="/contact">Contact</a>
            </nav>
            <div className="flex gap-[1vw] mt-[3vh]">
                <div className="box  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/clonings.png" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p className="text-[#fafafa] text-center">Clonings AI</p>
                        <h3 className="text-center">Frontend</h3>
                        <p className="text-center">React.js | Chakra UI</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-regular fa-eye"></i> Preview</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-figma"></i> Figma</a></div>

                </div>
                <div className="box  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/cortextual.png" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p className="text-[#fafafa] text-center">Cortextual AI Website</p>
                        <h3 className="text-center">Frontend</h3>
                        <p className="text-center">WordPress</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-regular fa-eye"></i> Preview</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-figma"></i> Figma</a></div>

                </div>
                <div className="box  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/FashioSwap.png" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p className="text-[#fafafa] text-center">FashionSwap App</p>
                        <h3 className="text-center">Design + Frontend</h3>
                        <p className="text-center">Figma | React.js | Chakra UI</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-regular fa-eye"></i> Preview</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-figma"></i> Figma</a></div>

                </div>
            </div>
            <div className="flex gap-[1vw] mt-[3vh]">
                <div className="box  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/clonings.png" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p className="text-[#fafafa] text-center">Clonings AI</p>
                        <h3 className="text-center">Frontend</h3>
                        <p className="text-center">React.js | Chakra UI</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-regular fa-eye"></i> Preview</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-figma"></i> Figma</a></div>

                </div>
                <div className="box  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/cortextual.png" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p className="text-[#fafafa] text-center">Cortextual AI Website</p>
                        <h3 className="text-center">Frontend</h3>
                        <p className="text-center">WordPress</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-regular fa-eye"></i> Preview</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-figma"></i> Figma</a></div>

                </div>
                <div className="box  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/FashioSwap.png" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p className="text-[#fafafa] text-center">FashionSwap App</p>
                        <h3 className="text-center">Design + Frontend</h3>
                        <p className="text-center">Figma | React.js | Chakra UI</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-regular fa-eye"></i> Preview</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-figma"></i> Figma</a></div>

                </div>
            </div>
            <div className="flex gap-[1vw] mt-[3vh]">
                <div className="box  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/clonings.png" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p className="text-[#fafafa] text-center">Clonings AI</p>
                        <h3 className="text-center">Frontend</h3>
                        <p className="text-center">React.js | Chakra UI</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-regular fa-eye"></i> Preview</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-figma"></i> Figma</a></div>

                </div>
                <div className="box  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/cortextual.png" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p className="text-[#fafafa] text-center">Cortextual AI Website</p>
                        <h3 className="text-center">Frontend</h3>
                        <p className="text-center">WordPress</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-regular fa-eye"></i> Preview</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-figma"></i> Figma</a></div>

                </div>
                <div className="box  rounded-lg text-[#afbec2] w-[50%]">

                    <div className="pic h-[30vh] rounded-lg"><img className="rounded-lg" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/projects/FashioSwap.png" alt="" /></div>
                    <div className="content p-[2vh]">
                        <p className="text-[#fafafa] text-center">FashionSwap App</p>
                        <h3 className="text-center">Design + Frontend</h3>
                        <p className="text-center">Figma | React.js | Chakra UI</p>
                    </div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-regular fa-eye"></i> Preview</a></div>
                    <div className="btn bg-[#204c5e] text-[#e2c86c] rounded-md text-center my-[1vh] mx-[0.2vw] p-[0.2vh]"><a href=""><i class="fa-brands fa-figma"></i> Figma</a></div>

                </div>
            </div>



        </main>
    )
}