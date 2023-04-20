import Footer from './components/Footer';
import Header from './components/header';
import RecipeFetch from './components/recipeSearch';
import Slogan from './components/slogan';
import { useToggleSloganContext } from './AppContext';
import { ToggleSloganProvider } from './AppContext';

function App() {

  const [data, setData] = useToggleSloganContext();

  return (
    <div className="App">
      <ToggleSloganProvider>
        <Header />        
        {data.showSlogan && <Slogan />}
        <Slogan />
        <RecipeFetch />
        <Footer />
        </ToggleSloganProvider>
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