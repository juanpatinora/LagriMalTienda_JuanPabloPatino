import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/NavbarComp";

const Home = () => {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="Hola mundo" />
        </div>
    );
}

export default Home;