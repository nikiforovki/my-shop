import Heder from "./components/Header";
import Main from "./components/Main"
import Footer from "./components/Footer";
import { store } from "./store.jsx"
import { Provider } from 'react-redux'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<div className="wrapper">
<Provider store={store}>
  <Heder />
  <Main />
  <Footer />
  </Provider>
</div>
  );
}

export default App;



