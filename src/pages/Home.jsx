import About from "./About";
import Project from "./Project";

const Home = () => {
    return (
        <>
            <About headerTitle={"about me"} />
            <Project headerTitle={"featured project"} pagination={2} />
        </>
    )
}

export default Home;