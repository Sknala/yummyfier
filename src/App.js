import Footer from './components/Footer';
import Header from './components/header';
import RecipeFetch from './components/recipeSearch';
import Slogan from './components/slogan';
import { useToggleSloganContext } from './AppContext';

function App() {

  const {data, setData} = useToggleSloganContext();

  return (
    <div className="App">
      
        <Header />        
        {data.showSlogan && <Slogan />}
        <RecipeFetch />
        <Footer />
        
    </div>
  );
}

export default App;

/* //button to test show/hideSlogan
<Button
          onClick={() => setShowSlogan(appContext.showSlogan = !appContext.showSlogan)}
        >
          Toggle slogan
        </Button>
        <span>{appContext.showSlogan ? 'showSlogan' : ''}</span>
*/