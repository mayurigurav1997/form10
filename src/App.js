import './Global.css';
import store from './store';
import Admin from './Addadmin/Addadmin'
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <Admin />
    </Provider>
  );
}

export default App;
