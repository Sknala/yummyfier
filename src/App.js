import Footer from './components/Footer';
import Header from './components/header';
import RecipeFetch from './components/recipeSearch';
import Slogan from './components/slogan';
import AppContext from './AppContext';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {

  const [showSlogan, setShowSlogan] = useState(true);


  return (
    <div className="App">
      <AppContext.Provider value={showSlogan}>
        <Header />
        <Button
          onClick={() => setShowSlogan(!showSlogan)}
        >
          Toggle slogan
        </Button>
        {showSlogan && <Slogan />}
        <RecipeFetch />
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
