import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import MyPhoto from '../images/myphoto.jpg';
import Certification from '../components/Certification';
import { AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel } from "react-icons/fa6";
import { BiLogoBootstrap, BiLogoTailwindCss } from "react-icons/bi";

const About = () => {
    const typeElement = useRef(null);
    useEffect(() => {
        const typed = new Typed(typeElement.current, {
            strings: ['Hi!', "I'm a Frontend Dev...", "I'm a Backend Dev...", "I'm a Fullstack Dev...", "I'm a Web Developer."],
            typeSpeed: 100,
            backSpeed: 50,
            smartBackspace: true,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <div className="container bg-base-100 max-w-lg mx-auto py-4 px-4 md:px-0">
                <div className="avatar indicator mb-4">
                    <span className="indicator-item badge badge-secondary p-4"><span ref={typeElement}></span></span>
                    <div className="w-48 h-48">
                        <img src={MyPhoto} alt='fadidajunaedy-photo' loading='lazy' />
                    </div>
                </div>
                <h2 className='text-2xl font-bold mb-4'>About me</h2>
                <p className='mb-4'>
                    As a seventh-semester student deeply passionate about front-end 
                    development, I am committed to expanding my skill set to encompass full-
                    stack development. My strong foundation in front-end technologies has 
                    fueled my enthusiasm for crafting visually appealing and user-friendly 
                    interfaces. Now, I am driven to become a well-rounded full-stack web 
                    developer by enhancing my expertise in back-end development.
                </p>
                <div className="flex flex-wrap gap-6 text-center mb-6">
                    <FaHtml5 size={34} />
                    <FaCss3Alt size={34} />
                    <FaJs size={34} />
                    <FaReact size={34} />
                    <BiLogoTailwindCss size={34} />
                    <BiLogoBootstrap size={34} />
                    <FaLaravel size={34} />
                </div>
                <div className="cta flex">
                    <a className="btn btn-secondary" href="mailto:fadidajunaedy@gmail.com"><AiOutlineMail className='inline' />Email Me</a>
                    <div className="divider divider-horizontal"></div>
                    <a className="btn btn-primary" href="/FADIDAJUNAEDY_CV.pdf" target='_blank' download><AiOutlineDownload className='inline' />DOWNLOAD CV</a>
                </div>
                <div className="divider"></div>
                <Certification />
            </div>
        </>
    )
}

export default About;