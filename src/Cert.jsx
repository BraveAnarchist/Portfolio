import { useState } from "react";
export default function Cert() {



    const [textS, setText] = useState(false);
    function textToggle() {
        setText(!textS);
    }

    return (
        <main className="ml-[27vw] mt-[5vh] w-[62vw] bg-[#20809c] relative p-[2vh] rounded-lg">
            <h1 className="text-3xl font-semibold text-[white]">My Certificates</h1>
            <hr className="bg-[#f9d76f] w-[4%] border-none h-[0.7vh] rounded-md mt-[2vh] mb-[2vh]" />
            <nav className="absolute flex justify-evenly w-[50%] text-[#ced0d0] bg-[#284149] p-[2vh] rounded-r-lg rounded-bl-lg right-0 top-0">
                <a href="/" >About</a>
                <a href="/certificate" className="text-[#f9d76f]">Certificates</a>
                <a href="/project">Projects</a>
                <a href="/more">More</a>
                <a href="/contact">Contact</a>
            </nav>
            <div className="flex mt-[8vh] mb-[2vh]">
                <div className="bg-[#202d33] px-[15px] py-[7px] mr-[1vw] rounded-xl w-[3vw]"><i class="fa-solid fa-desktop text-[#ffdb70]"></i></div>
                <h2 className="text-2xl text-[#fafafa] w-[40%] font-semibold  ">Technical Competence</h2>
            </div>
            <ul>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">Node.Js Essentials</h3><p className="text-sm text-[#9dbcc4]">LinkedIn Learning</p><a href="https://oktayshakirov.com/assets/images/certificates/node.js-essentials.png"><div className="picCert h-[24vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/node.js-essentials.png" alt="" /></div></a></li>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">React.Js Essentials</h3><p className="text-sm text-[#9dbcc4]">LinkedIn Learning</p><a href="https://oktayshakirov.com/assets/images/certificates/react.js-essentials.png"><div className="picCert h-[24vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/react.js-essentials.png" alt="" /></div></a></li>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">JavaScript Essentials</h3><p className="text-sm text-[#9dbcc4]">LinkedIn Learning</p><a href="https://oktayshakirov.com/assets/images/certificates/javascript-essentials.png"><div className="picCert h-[24vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/javascript-essentials.png" alt="" /></div></a></li>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">Fundamentals Of Digital Marketing</h3><p className="text-sm text-[#9dbcc4]">Google Certified Digital Marketing Course</p><a href="https://oktayshakirov.com/assets/images/certificates/fundamentals-of-digital-marketing.png"><div className="picCert h-[24vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/fundamentals-of-digital-marketing.png" alt="" /></div></a></li>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">Elements Of AI</h3><p className="text-sm text-[#9dbcc4]">University of Helsinki</p><a href="https://oktayshakirov.com/assets/images/certificates/elements-of-ai.png"><div className="picCert h-[24vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/elements-of-ai.png" alt="" /></div></a></li>
            </ul>

            <div className="flex mt-[8vh] mb-[2vh]">
                <div className="bg-[#202d33] px-[15px] py-[7px] mr-[1vw] rounded-xl w-[3vw]"><i class="fa-solid fa-user-group text-[#ffdb70]"></i></div>
                <h2 className="text-2xl text-[#fafafa] w-[40%] font-semibold  ">Professional Skills</h2>
            </div>
            <ul>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">Efficient Email Management</h3><p className="text-sm text-[#9dbcc4]">WEKA Media GmbH & Co. KG</p><a href="https://oktayshakirov.com/assets/images/certificates/efficient-email-management.png"><div className="picCert h-[37vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/efficient-email-management.png" alt="" /></div></a></li>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">Time And Self Management</h3><p className="text-sm text-[#9dbcc4]">VIWIS GmbH</p><a href="https://oktayshakirov.com/assets/images/certificates/time-and-self-management.png"><div className="picCert h-[37vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/time-and-self-management.png" alt="" /></div></a></li>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">Excel 2013 Professional</h3><p className="text-sm text-[#9dbcc4]">Microsoft</p><a href="https://oktayshakirov.com/assets/images/certificates/excel-2013-professional.png"><div className="picCert h-[37vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/excel-2013-professional.png" alt="" /></div></a></li>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">Word 2013 Professional</h3><p className="text-sm text-[#9dbcc4]">Microsoft</p><a href="https://oktayshakirov.com/assets/images/certificates/word-2013-professional.png"><div className="picCert h-[37vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/word-2013-professional.png" alt="" /></div></a></li>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">Intercultural Competence</h3><p className="text-sm text-[#9dbcc4]">IMAP GmbH</p><a href="https://oktayshakirov.com/assets/images/certificates/intercultural-competence.png"><div className="picCert h-[37vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/intercultural-competence.png" alt="" /></div></a></li>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">Communication And Complaint Management</h3><p className="text-sm text-[#9dbcc4]">Hiba impulse GmbH</p><a href="https://oktayshakirov.com/assets/images/certificates/communication-complaint-management.png"><div className="picCert h-[37vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/communication-complaint-management.png" alt="" /></div></a></li>
            </ul>

            <div className="flex mt-[8vh] mb-[2vh]">
                <div className="bg-[#202d33] px-[15px] py-[7px] mr-[1vw] rounded-xl w-[3vw]"><i class="fa-solid fa-language text-[#ffdb70]"></i></div>
                <h2 className="text-2xl text-[#fafafa] w-[40%] font-semibold  ">Language Proficiency</h2>
            </div>
            <ul>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">German Language C1</h3><p className="text-sm text-[#9dbcc4]">TELC European Language Certificates</p><a href="https://oktayshakirov.com/assets/images/certificates/german-c1.png"><div className="picCert h-[37vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/german-c1.png" alt="" /></div></a></li>
                <li><h3 className="text-sm text-[#fafafa] mb-[1vh]">English Language B2</h3><p className="text-sm text-[#9dbcc4]">LinguaTV GmbH</p><a href="https://oktayshakirov.com/assets/images/certificates/english-b2.png"><div className="picCert h-[37vh] w-[15vw] border-8 flex justify-center items-center border-[#000000]"><img className="h-[90%] w-[90%]" src="https://oktayshakirov.com/assets/images/certificates/english-b2.png" alt="" /></div></a></li>
            </ul>

        </main>
    )
}