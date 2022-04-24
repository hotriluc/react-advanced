import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const context = useContext(AuthContext)
  console.log(context)

  return (
    <React.Fragment>
        <MainHeader/>
        <main>
          {!context.isLoggedIn && <Login/>}
          {context.isLoggedIn && <Home/>}
        </main>
    </React.Fragment>
  );
}

export default App;
