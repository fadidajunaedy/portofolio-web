import { AiFillEye, AiFillGithub } from "react-icons/ai";

const CardProject = ({ image, title, description, linkWeb, linkGithub, tech }) => {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row gap-2">
                <figcaption className='md:basis-3/4'>
                    <div className="flex mb-2">
                        <a className='flex justify-center items-center text-sm' target="_blank" href={linkWeb} rel="noreferrer"><AiFillEye />&nbsp;&nbsp;view</a>
                        <div className="divider divider-horizontal"></div>
                        <a className='flex justify-center items-center text-sm' target="_blank" href={linkGithub} rel="noreferrer"><AiFillGithub />&nbsp;&nbsp;github</a>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                    <p className='mb-2'>{description}</p>
                    <p className="font-bold">Tech : <span className="font-normal">{tech}</span></p>
                </figcaption>
                <figure className='md:basis-1/4 flex justify-end items-center mb-4'>
                    <div className="bg-slate-400 w-full h-56 md:w-48 md:h-28 overflow-hidden">
                        <img className='' src={image} alt="Project Pics" loading="lazy" />
                    </div>
                </figure>
            </div>
            {/* <div className="divider"></div> */}
        </>
    )
}

export default CardProject;