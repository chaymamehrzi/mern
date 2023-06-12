import { Route,Routes,Navigate } from 'react-router-dom';
import Form from './components/Item/additem';
import ItemList from './components/Item/itemlist';
import Home from './components/Home/home';
import Login from './components/Login';
import Signup from './components/Signup';
import ItemEdit from './components/Item/edititem';
import NotFound from './components/Notfound/notfound';

function App() {
  return (
   <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/login" exact element={<Login/>} />
      <Route path="/signup" exact element={<Signup/>} />
			<Route path="/add" exact element={<Form/>} />
      <Route path="/list" exact element={<ItemList/>} />
      <Route path="/edit/:itemId" component={ItemEdit} />
      <Route path="*"  exact element={<NotFound/>} />

   </Routes>
  );
}

export default App;
