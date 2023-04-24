import Footer from "./components/Footer";
import Header from "./components/header";
import RecipeSearch from "./components/recipeSearch";
import Slogan from "./components/slogan";
import { useToggleSloganContext } from "./AppContext";

function App() {

  const {data, setData} = useToggleSloganContext();

  return (
    <div className="App">
      <Header />
      {data.showSlogan && <Slogan />}
      <RecipeSearch />
      <Footer />
    </div>
  );
}

export default App;
