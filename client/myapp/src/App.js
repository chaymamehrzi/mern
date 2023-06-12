import { Route,Routes,Navigate } from 'react-router-dom';
import Form from './components/additem';
import ItemList from './components/itemlist';
import Home from './components/home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
   <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/login" exact element={<Login/>} />
      <Route path="/signup" exact element={<Signup/>} />
			<Route path="/add" exact element={<Form/>} />
      <Route path="/list" exact element={<ItemList/>} />

   </Routes>
  );
}

export default App;
