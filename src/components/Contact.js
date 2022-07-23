import React from "react";
import phone from "../assets/phone-iconpic.jpg"
import mail from "../assets/mail-iconpic.jpg"
import github from "../assets/github-logopic.png"
import linkedin from "../assets/linkedinpic.png"



function Contact () {

    return (
        <section id="contact" className="bg-gray-800">
            <h2 className="contact-text text-center text-4xl p-4 text-white">Contact Me</h2>
            <div className="flex justify-between items-center w-full text-white px-20" >
                <div className="phone">
                    <img src={phone} alt="phone icon" className = "h-20 w-20"></img>
                    <h4>804-317-2711</h4>
                </div>
                <div className="email">
                    <a href="mailto:thomasc2@vt.edu">
                        <img src={mail} alt="mail icon" className = "h-20 w-20"></img>
                        <h4>Email</h4>
                    </a>
                </div>
                <div className="github">
                    <a href="https://github.com/ThomasCerr" target={"_blank"}>
                        <img src={github} alt="github logo" className = "h-20 w-20"></img>
                        <h4>GitHub</h4>
                    </a>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/thomas-cerreto-2017vt/" target={"_blank"}>
                        <img src={linkedin} alt="linkedin logo" className = "h-20 w-20"></img>
                        <h4>LinkedIn</h4>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;