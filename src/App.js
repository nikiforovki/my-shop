import Heder from "./components/Header.jsx";
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx";
import { store } from "./store.jsx"
import { Provider } from 'react-redux'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<Provider store={store}>
  <Heder />
  <Main />
  <Footer />
  </Provider>
  );
}

export default App;



