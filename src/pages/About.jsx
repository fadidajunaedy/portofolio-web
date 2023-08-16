import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import MyPhoto from '../images/myphoto.jpg';
import Certification from '../components/Certification';
import { AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel } from "react-icons/fa6";
import { BiLogoBootstrap, BiLogoTailwindCss, BiLogoRedux, BiLogoSass } from "react-icons/bi";

const About = ({ headerTitle }) => {
    const typeElement = useRef(null);
    useEffect(() => {
        const typed = new Typed(typeElement.current, {
            strings: ['Hi!', "I'm a Fullstack Dev...", "I'm a Frontend Developer."],
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
                <h2 className='text-2xl font-bold mb-4'>{headerTitle}</h2>
                <p className='mb-4'>A sixth-semester student with a strong interest in front-end development and a desire to expand my skills in back-end development, I am driven to become a well-rounded full-stack developer. With a solid foundation in front-end technologies and a passion for creating visually appealing and user-friendly interfaces, I am eager to further enhance my knowledge and expertise in back-end development.</p>
                <div className="flex flex-wrap gap-6 text-center mb-6">
                    <FaHtml5 size={34} />
                    <FaCss3Alt size={34} />
                    <FaJs size={34} />
                    <FaReact size={34} />
                    <BiLogoRedux size={34} />
                    <BiLogoSass size={34} />
                    <BiLogoTailwindCss size={34} />
                    <BiLogoBootstrap size={34} />
                    <FaLaravel size={34} />
                </div>
                <div className="cta flex">
                    <a className="btn btn-secondary" href="mailto:fadidajunaedy@gmail.com"><AiOutlineMail className='inline' />Email Me</a>
                    <div className="divider divider-horizontal"></div>
                    <a className="btn btn-primary" disabled><AiOutlineDownload className='inline' />DOWNLOAD CV</a>
                </div>
                <div className="divider"></div>
                <Certification />
            </div>
        </>
    )
}

export default About;