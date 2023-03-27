import Footer from './components/Footer';
import Header from './components/header';
import RecipeFetch from './components/recipeSearch';
import Slogan from './components/slogan';


function App() {
  return (
    <div className="App">
      <Header />
      <Slogan />
      <RecipeFetch />
      <Footer />
    </div>
  );
}

export default App;
