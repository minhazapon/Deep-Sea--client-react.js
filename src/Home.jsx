import HomeBanner from "./home file/HomeBanner";
import News from "./home file/News";
import OurProcess from "./home file/OurProcess";
import Project from "./home file/Project";
import Type from "./home file/Type";
import Who from "./home file/Who";



const Home = () => {
    return (
        <div>

            <HomeBanner></HomeBanner>
            <Who></Who>
            <Type></Type>
            <OurProcess></OurProcess>
            <Project></Project>
            <News></News>
            
        </div>
    );
};

export default Home;