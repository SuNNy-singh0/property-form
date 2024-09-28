import SearchBar from './SearchBar/SearchBar';
import './App.css';
import Form from './Form/Form';
import PhoneSearchbar from './SearchBar/PhoneSearchbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhoneSearch from './SearchBar/PhoneSearch';
import Phone from './Form/Phone';
import Login from './Auth/LoginForm';
import AuthContainer from './Auth/AuthContainer';
import Dummypaage from './Auth/Dummypaage';
import MainSearch from './SearchBar/MainSearch';
import FormEdit from './EditForm/FormEdit';

function App() {
  return (
    <div className="App">
     {/* <Form></Form> */}
     <Phone/>
     {/* <FormEdit/> */}
     {/* <SearchBar/> */}
     {/* <Router>
      <Routes>
        <Route path="/search/:name" element={<PhoneSearch />} />
      </Routes>
      <MainSearch/>
    </Router> */}
    {/* <Login/> */}
    {/* <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthContainer />} />
          <Route path="/dummy" element={<Dummypaage />} />
          {/* Add other routes here if necessary */}
        {/* </Routes>
      </div>
    </Router> */} 
    
    </div>
  );
}

export default App;
