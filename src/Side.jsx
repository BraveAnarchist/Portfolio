export default function Side() {
    return (
        <aside className="bg-[#20809c] w-[14vw] fixed top-[5vh] left-[12vw] border-[1px] border-[#2e535d] rounded-lg py-[3vh] px-[1vw] text-[white] flex flex-col justify-center items-center">
            <div className="pic " style={{ height: "20vh", width: "10vw", borderRadius: "20px", }}><img style={{ height: "100%", width: "100%", borderRadius: "20px" }} src="https://oktayshakirov.com/assets/images/avatar.jpg" alt="" /></div>

            <p className="mt-[3.5vh]">Oktay Shakirov</p>
            <p className="mt-[2vh] bg-[#1e5567] p-[1vh] rounded-2xl w-[97%] flex justify-center" >Hello, World !</p>

            <hr className="mt-[2vh] mb-[4vh] w-[100%] bg-[#354044] h-[1px] border-0" />
            <div className="flex w-[100%] mb-[2vh]">
                <div className="bg-[#202d33] px-[15px] py-[7px] mr-[1vw] rounded-xl self-start"><i class="fa-solid fa-hourglass-half text-[#ffdb70]"></i></div>
                <div>
                    <p style={{color:"#8bb0bc", fontSize:"12px"}}>AGE</p>
                    <p>29 years old</p>
                </div>
            </div>
            <div className="flex w-[100%] mb-[2vh]">
                <div className="bg-[#202d33] px-[15px] py-[7px] mr-[1vw] rounded-xl self-start"><i class="fa-solid fa-location-dot text-[#ffdb70]"></i></div>
                <div>
                    <p style={{color:"#8bb0bc", fontSize:"12px"}}>LOCATION</p>
                    <p>Berlin, Germany</p>
                </div>
            </div>
            <div className="flex w-[100%] mb-[2vh]">
                <div className="bg-[#202d33] px-[15px] py-[7px] mr-[1vw] rounded-xl self-start"><i class="fa-solid fa-person text-[#ffdb70]"></i></div>
                <div>
                    <p style={{color:"#8bb0bc", fontSize:"12px"}}>PERSONALITY TYPE</p>
                    <p>INTJ-T</p>
                </div>
            </div>
            <div className="flex text-2xl text-[#74a1b1]">
                <i class="fa-brands fa-github mr-[1vw]"></i>
                <i class="fa-brands fa-linkedin mr-[1vw]"></i>
                <i class="fa-brands fa-instagram mr-[1vw]"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </aside>
    )
}