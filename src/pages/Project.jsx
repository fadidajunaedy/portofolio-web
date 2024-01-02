import Portofolio from "../data/Portofolio";
import CardProject from '../components/CardProject';
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Project = ({ pagination }) => {
    const navLinkActive = ({ isActive }) => {
        return {
            display: isActive ? 'none' : 'block'
        }
    }
    return (
        <section id="project" className="container max-w-lg mx-auto py-4 px-4 md:px-0">
            <h2 className='text-2xl font-bold mb-4'>Projects</h2>
            <div className="flex flex-col gap-8 mb-6">
                {Portofolio.project.map((project, index) => index <= pagination && (
                    <CardProject
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        linkWeb={project.linkWeb}
                        linkGithub={project.linkGithub}
                        tech={project.tech}
                    />
                ))}
            </div>
            <NavLink style={navLinkActive} className="link" to="/project">view all projects<FiArrowUpRight className="inline" size={16} /></NavLink>            <div className="divider"></div>
        </section>
    )
}

export default Project;