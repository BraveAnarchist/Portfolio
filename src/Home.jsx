import { useState } from "react";
export default function Home() {
    const [textS, setText] = useState(false);
    function textToggle() {
        setText(!textS);
    }
    let arr = ["https://oktayshakirov.com/assets/images/html.png", "https://oktayshakirov.com/assets/images/css.png", "https://oktayshakirov.com/assets/images/java-script.png", "https://oktayshakirov.com/assets/images/react.png", "https://oktayshakirov.com/assets/images/next.png", "https://oktayshakirov.com/assets/images/node.png", "https://oktayshakirov.com/assets/images/typescript.png", "https://oktayshakirov.com/assets/images/npm.png", "https://oktayshakirov.com/assets/images/php.png", "https://oktayshakirov.com/assets/images/mysql.png", "https://oktayshakirov.com/assets/images/python.png", "https://oktayshakirov.com/assets/images/linux.png", "https://oktayshakirov.com/assets/images/wordpress.png", "https://oktayshakirov.com/assets/images/git.png", "https://oktayshakirov.com/assets/images/adobe.png", "https://oktayshakirov.com/assets/images/figma.png"];

    return (
        <main className="ml-[27vw] mt-[5vh] w-[62vw] bg-[#20809c] relative p-[2vh] rounded-lg">
            <h1 className="text-3xl font-semibold text-[white]">About Me</h1>
            <hr className="bg-[#f9d76f] w-[4%] border-none h-[0.7vh] rounded-md mt-[2vh] mb-[2vh]" />
            <nav className="absolute flex justify-evenly w-[50%] text-[#ced0d0] bg-[#284149] p-[2vh] rounded-r-lg rounded-bl-lg right-0 top-0">
                <a href="/" className="text-[#f9d76f]">About</a>
                <a href="/certificate">Certificates</a>
                <a href="/project">Projects</a>
                <a href="/more">More</a>
                <a href="contact">Contact</a>
            </nav>
            <div className="intro bg-[#206679] p-[2vh] rounded-lg text-[#afbec2]"><p>
                Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.</p>
                <div style={textS ? { display: "block" } : { display: "none" }}><p><br></br>Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.<br></br><br></br>

                    In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.<br></br><br></br>

                    If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.<br></br></p>
                </div>
                <div id="moreText" style={{ width: "20%", margin: "3vh auto", color: "#d5e1e5", cursor: "pointer" }} onClick={textToggle}>
                    {textS ? (<><i class="fa-solid fa-arrow-up"></i> Hide Text <i class="fa-solid fa-arrow-up"></i></>) : (<><i class="fa-solid fa-arrow-down"></i> Show More <i class="fa-solid fa-arrow-down"></i></>)} </div>
            </div>
            <h2 className="text-2xl text-[#fafafa] w-[20%] font-semibold mx-auto mt-[4vh] mb-[2vh]">Primary Focus</h2>
            <div className="flex gap-[1vw]">
                <div className="box bg-[#206679] p-[2vh] rounded-lg text-[#afbec2] w-[50%]">
                    <div className="flex">
                        <i class="fa-solid fa-globe text-[#d8c36e] text-3xl mr-[1vw]"></i>
                        <div className="content">
                            <h3 className="text-[#fafafa] text-lg font-bold">Web Design & Development</h3>
                            <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                        </div>
                    </div>
                </div>
                <div className="box bg-[#206679] p-[2vh] rounded-lg text-[#afbec2] w-[50%]">
                    <div className="flex">
                        <i class="fa-solid fa-laptop-code text-[#d8c36e] text-3xl mr-[1vw]"></i>
                        <div className="content">
                            <h3 className="text-[#fafafa] text-lg font-bold">Full-Stack Solutions</h3>
                            <p>Developing scalable web applications using JavaScript Frameworks, SQL Databases, PHP and Python.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[1vw] mt-[3vh]">
                <div className="box bg-[#206679] p-[2vh] rounded-lg text-[#afbec2] w-[50%]">
                    <div className="flex">
                        <i class="fa-solid fa-mobile-screen-button text-[#d8c36e] text-3xl mr-[1vw]"></i>
                        <div className="content">
                            <h3 className="text-[#fafafa] text-lg font-bold">Mobile Apps & Games</h3>
                            <p>Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
                        </div>
                    </div>
                </div>
                <div className="box bg-[#206679] p-[2vh] rounded-lg text-[#afbec2] w-[50%]">
                    <div className="flex">
                        <i class="fa-solid fa-chart-column text-[#d8c36e] text-3xl mr-[1vw]"></i>
                        <div className="content">
                            <h3 className="text-[#fafafa] text-lg font-bold">Marketing & SEO</h3>
                            <p>Using SEO and marketing strategies to boost online visibility and promote products or services.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl text-[#fafafa] w-[26%] font-semibold mx-auto mt-[4vh] mb-[2vh]">Exploring Creativity</h2>
            <div className="flex gap-[1vw]">
                <div className="box bg-[#206679] p-[2vh] rounded-lg text-[#afbec2] w-[50%]">
                    <div className="flex">
                        <i class="fa-solid fa-camera text-[#d8c36e] text-3xl mr-[1vw]"></i>
                        <div className="content">
                            <h3 className="text-[#fafafa] text-lg font-bold">Web Design & Development</h3>
                            <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                        </div>
                    </div>
                </div>
                <div className="box bg-[#206679] p-[2vh] rounded-lg text-[#afbec2] w-[50%]">
                    <div className="flex">
                        <i class="fa-solid fa-cube text-[#d8c36e] text-3xl mr-[1vw]"></i>
                        <div className="content">
                            <h3 className="text-[#fafafa] text-lg font-bold">
                                Digital Content Creation</h3>
                            <p>Creating digital elements, such as 3D models, graphics, animations, videos and AI-generated content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl text-[#fafafa] w-[15%] font-semibold mx-auto mt-[4vh] mb-[2vh]">Languages</h2>

            <div className="flex gap-[1vw] bg-[#206679]">
                <div className="box  p-[2vh] rounded-lg w-[50%] text-[#dee2e4]">


                    <h3 className="text-[#fafafa]  mb-[3vh] text-lg mx-[auto] w-[41%] font-bold">Coding Languages</h3>
                    <p className="mb-[1.6vh]">JavaScript <span className="text-[#afbec2]"> 90%</span></p>
                    <div className="bg-[#383838] w-[100%] rounded-r-lg mb-[3vh]">
                        <div className="bg-[#ffdb70] w-[90%] h-[1.2vh] rounded-lg"></div>
                    </div>

                    <p className="mb-[1.6vh]">TypeScript <span className="text-[#afbec2]"> 75%</span></p>
                    <div className="bg-[#383838] w-[100%] rounded-r-lg mb-[3vh]">
                        <div className="bg-[#ffdb70] w-[75%] h-[1.2vh] rounded-lg"></div>
                    </div>

                    <p className="mb-[1.6vh]">CSS <span className="text-[#afbec2]"> 100%</span></p>
                    <div className="bg-[#383838] w-[100%] rounded-r-lg mb-[3vh]">
                        <div className="bg-[#ffdb70] w-[100%] h-[1.2vh] rounded-lg"></div>
                    </div>

                    <p className="mb-[1.6vh]">PHP <span className="text-[#afbec2]"> 50%</span></p>
                    <div className="bg-[#383838] w-[100%] rounded-r-lg mb-[3vh]">
                        <div className="bg-[#ffdb70] w-[50%] h-[1.2vh] rounded-lg"></div>
                    </div>

                    <p className="mb-[1.6vh]">Python <span className="text-[#afbec2]"> 25%</span></p>
                    <div className="bg-[#383838] w-[100%] rounded-r-lg ">
                        <div className="bg-[#ffdb70] w-[25%] h-[1.2vh] rounded-lg"></div>
                    </div>


                </div>
                <div className="box p-[2vh] rounded-lg text-[#afbec2] w-[50%] text-[#dee2e4]">

                    <h3 className="text-[#fafafa] text-lg mb-[3vh] mx-[auto] w-[45%] font-bold">Human Languages</h3>
                    <p className="mb-[1.6vh]">English <span className="text-[#afbec2]"> Fluent</span></p>
                    <div className="bg-[#383838] w-[100%] rounded-r-lg mb-[3vh]">
                        <div className="bg-[#ffdb70] w-[100%] h-[1.2vh] rounded-lg"></div>
                    </div>

                    <p className="mb-[1.6vh]">German <span className="text-[#afbec2]"> Fluent</span></p>
                    <div className="bg-[#383838] w-[100%] rounded-r-lg mb-[3vh]">
                        <div className="bg-[#ffdb70] w-[100%] h-[1.2vh] rounded-lg"></div>
                    </div>

                    <p className="mb-[1.6vh]">Bulgarian <span className="text-[#afbec2]"> Native</span></p>
                    <div className="bg-[#383838] w-[100%] rounded-r-lg mb-[3vh]">
                        <div className="bg-[#ffdb70] w-[100%] h-[1.2vh] rounded-lg"></div>
                    </div>

                    <p className="mb-[1.6vh]">Turkish <span className="text-[#afbec2]"> Bilingual</span></p>
                    <div className="bg-[#383838] w-[100%] rounded-r-lg mb-[3vh]">
                        <div className="bg-[#ffdb70] w-[50%] h-[1.2vh] rounded-lg"></div>
                    </div>

                    <p className="mb-[1.6vh]">Russian <span className="text-[#afbec2]"> Basic</span></p>
                    <div className="bg-[#383838] w-[100%] rounded-r-lg ">
                        <div className="bg-[#ffdb70] w-[25%] h-[1.2vh] rounded-lg"></div>
                    </div>

                </div>
            </div>

            < h2 className="text-2xl text-[#fafafa] w-[27%] font-semibold mx-auto mt-[4vh] mb-[2vh]">Development Skills</h2>


            <div className="carousel bg-[#206679] overflow-x-hidden h-[40vh] flex items-center">
                <div className="cInner flex w-[200vw] flex-nowrap">
                    {
                        arr.map((ele, index) => {
                            return (<div key={index} className="carousel-item w-[150px] h-[140px]">
                                <img style={{height:"100%",width:"100%"}} src={ele} />
                            </div>)
                        })
                    }
                    
                </div>
            </div>
        </main>
    )

}