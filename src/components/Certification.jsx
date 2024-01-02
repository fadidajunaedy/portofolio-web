import Dicoding from '../images/dicoding-certification.jpg';
import FreeCodeCamp1 from '../images/freecodecamp-certification-1.png';
import FreeCodeCamp2 from '../images/freecodecamp-certification-2.png';
import { FiArrowUpRight } from "react-icons/fi";

const Certification = () => {
    return (
        <>
            <h3 className="text-xl font-bold mb-4">Certification</h3>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    Menjadi Front-End Web Developer Expert (Dicoding Indonesia)&nbsp;
                    <a className="link text-sm" href="https://www.dicoding.com/certificates/N9ZO4VG78ZG5" target="_blank" rel="noreferrer">show credentials<FiArrowUpRight className="inline" /></a>
                </div>
                <div className="collapse-content">
                    <div className="flex">
                        <img className="mb-2" src={Dicoding} alt="Dicoding Certification" loading="lazy" />
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    Responsive Web Design (freeCodeCamp)&nbsp;
                    <a className="link text-sm" href="https://freecodecamp.org/certification/fadidajunaedy/responsive-web-design" target="_blank" rel="noreferrer">show credentials<FiArrowUpRight className="inline" /></a>
                </div>
                <div className="collapse-content">
                    <div className="flex">
                        <img className="mb-2" src={FreeCodeCamp1} alt="freeCodeCamp Certification" loading="lazy" />
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    JavaScript Algorithms and Data Structures (freeCodeCamp)&nbsp;
                    <a className="link text-sm" href="https://freecodecamp.org/certification/fadidajunaedy/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer">show credentials<FiArrowUpRight className="inline" /></a>
                </div>
                <div className="collapse-content">
                    <div className="flex">
                        <img className="mb-2" src={FreeCodeCamp2} alt="freeCodeCamp Certification" loading="lazy" />
                    </div>
                </div>
            </div>
            <div className="divider"></div>

        </>
    )
}

export default Certification;