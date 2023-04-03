import Footer from './components/Footer';
import Header from './components/header';
import RecipeFetch from './components/recipeSearch';
import Slogan from './components/slogan';
import AppContext from './AppContext';
import { useContext, useState } from 'react';

function App() {

  const appContext = useContext(AppContext);
  const [showSlogan, setShowSlogan] = useState(appContext.showSlogan);

  return (
    <div className="App">
      <AppContext.Provider value={[showSlogan, setShowSlogan]}>
        <Header />        
        {appContext.showSlogan && <Slogan />}
        <RecipeFetch />
        <Footer />
      </AppContext.Provider>
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