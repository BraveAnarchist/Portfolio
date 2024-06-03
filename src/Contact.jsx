export default function Contact() {

    function myfunc(){
        
        navigator.clipboard.writeText("oktayshakirov@gmail.com");

        // Alert the copied text
        alert("Copied the text: " + "oktayshakirov@gmail.com");
    }

    return (
        <main className="ml-[27vw] mt-[5vh] w-[62vw] bg-[#20809c] relative p-[2vh] rounded-lg">
            <h1 className="text-3xl font-semibold text-[white]">Side Projects</h1>
            <hr className="bg-[#f9d76f] w-[4%] border-none h-[0.7vh] rounded-md mt-[2vh] mb-[2vh]" />
            <nav className="absolute flex justify-evenly w-[50%] text-[#ced0d0] bg-[#284149] p-[2vh] rounded-r-lg rounded-bl-lg right-0 top-0">
                <a href="/" className="">About</a>
                <a href="/certificate">Certificates</a>
                <a href="/project">Projects</a>
                <a href="/more">More</a>
                <a href="/contact" className="text-[#e4c568]">Contact</a>
            </nav>
            <div className="bg-[#206679] p-[2vh] rounded-lg text-[#afbec2]">
                <h2 className="text-xl text-center font-semibold text-[white]">Email:</h2>
                <div className="mx-auto my-[2vh] flex gap-[0.5vw] text-sm bg-[#2c4c56] p-[3px] w-[16vw] justify-center items-center rounded-md"><p>oktayshakirov@gmail.com </p> <button className="bg-[#383838] p-[2px] rounded-md text-[#e4c568]" onClick={myfunc}>Copy</button></div>
            </div>
            <div className="mt-[5vh] bg-[#206679] p-[2vh] rounded-lg text-[#afbec2]">
                <h2 className="text-xl text-center font-semibold text-[white] mb-[2vh]">Schedule Video Call With Me:</h2>
                <div className=""><a className="mx-auto w-[8vw] block" href=""><div className="pic h-[15vh] w-[8vw]"><img style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/calendar.png" alt="" /></div></a></div>
            </div>
            <div className="mt-[5vh] bg-[#206679] p-[2vh] rounded-lg text-[#afbec2]">
                <h2 className="text-xl text-center font-semibold text-[white] mb-[3vh]">Social:</h2>
                <div className="flex justify-center items-center gap-[1vw]"><a className="" href="https://github.com/oktayshakirov"><div className="pic h-[10vh] w-[5vw]"><img style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/socials/github.png" alt="" /></div></a>
                    <a className="" href="https://www.linkedin.com/in/oktayshakirov"><div className="pic h-[10vh] w-[5vw]"><img style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/socials/linkedin.png" alt="" /></div></a>
                    <a className="" href="https://www.instagram.com/oktay.shakirov/"><div className="pic h-[10vh] w-[5vw]"><img style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/socials/instagram.png" alt="" /></div></a>
                    <a className="" href="https://x.com/oktayshakirov"><div className="pic h-[10vh] w-[5vw]"><img style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/socials/twitter.png" alt="" /></div></a>
                </div>
            </div>
            <div className="mt-[5vh] bg-[#206679] p-[2vh] rounded-lg text-[#afbec2]">
                <h2 className="text-xl text-center font-semibold text-[white] mb-[5vh]">Support My Work:</h2>
                <p className="text-center mb-[4vh]">
                    With every small donation, you contribute to hostings, domains and other essential costs. All my work which is made public on GitHub or Figma is open source and free for everyone to use.</p>
                <div className=""><a className="mb-[2vh]" href="https://www.buymeacoffee.com/oktayshakirov"><div className="pic  mx-auto h-[8vh] w-[14vw] rounded-2xl mb-[2vh]"><img className="rounded-2xl" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/coffee-sponsort.png" alt="" /></div></a>
                    <a className="mb-[2vh]" href="https://github.com/sponsors/oktayshakirov"><div className="pic  mx-auto h-[8vh] w-[14vw] rounded-2xl mb-[2vh]"><img className="rounded-2xl" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/github-sponsors.png" alt="" /></div></a>
                    <a className="mb-[2vh]" href="https://www.paypal.com/paypalme/OShakirov"><div className="pic  mx-auto h-[8vh] w-[14vw] rounded-2xl mb-[2vh]"><img className="rounded-2xl" style={{ height: "100%", width: "100%" }} src="https://oktayshakirov.com/assets/images/paypalme.png" alt="" /></div></a>
                </div>
            </div>
        </main>
    )
}