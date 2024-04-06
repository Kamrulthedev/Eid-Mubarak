import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";
import Homes from "../Homes/Homes";
import Card from "../Card/Card";
import EId from "../Eid/EId";
import HomeCard from "../HomeCard/HomeCard";
import Mubarak from "../../Mubarak/Mubarak";

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Homes></Homes>
            <Card></Card>
            <EId></EId>
            <HomeCard></HomeCard>
            <Mubarak></Mubarak>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;