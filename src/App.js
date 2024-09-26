import SearchBar from './SearchBar/SearchBar';
import './App.css';
import Form from './Form/Form';
import PhoneSearchbar from './SearchBar/PhoneSearchbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhoneSearch from './SearchBar/PhoneSearch';
import Phone from './Form/Phone';
function App() {
  return (
    <div className="App">
     {/* <Form></Form> */}
     {/* <Phone/> */}
     {/* <SearchBar/> */}
     <Router>
      <PhoneSearchbar />
      <Routes>
        <Route path="/search/:name" element={<PhoneSearch />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
