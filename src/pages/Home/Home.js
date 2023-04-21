//Imports

//Sections
import Section1 from "./SectionsHome/Section1";
import Section2 from "./SectionsHome/Section2";
import Section3 from "./SectionsHome/Section3";
import Section4 from "./SectionsHome/Section4";
import Section5 from "./SectionsHome/Section5";
import Section6 from "./SectionsHome/Section6";
import ClientsSection from "./SectionsHome/Section-Clients";
import ScrollTo from "../../components/ScrollTo/ScrollTo";

const Home = () => {
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <ClientsSection />
            <ScrollTo />
        </div>
    )
}

export default Home;