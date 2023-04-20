//Imports

//Sections
import Section1 from "./SectionsHome/Section1";
import Section2 from "./SectionsHome/Section2";
import Section3 from "./SectionsHome/Section3";
import Section4 from "./SectionsHome/Section4";
import Footer from "../../components/Footer/Footer";
import ClientsSection from "./SectionsHome/Section-Clients";


const Home = () => {
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <ClientsSection />
            <Footer />
        </div>
    )
}

export default Home;