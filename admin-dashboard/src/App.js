// import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './compenents/Header';
import SideBar from './compenents/SideBar';
import Main from './compenents/Main';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Main />
    </>
  );
}

export default App;
