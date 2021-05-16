import './App.css';
import {useState, useEffect} from "react";
//library to make api requests
import Axios from 'axios';
import Navbar from "./components/Navbar";
import AddPassword from './components/AddPassword';
import { BrowserRouter as Router} from 'react-router-dom';
import Passwords from './components/Passwords';
import Footer from './components/Footer/index';

function App() {
const [password, setPassword] = useState('');
const [title, setTitle] = useState('');
//state with variable that represent all the passwords
const [passwordList, setPasswordList] = useState([]);
//any refresh it will do the get of the passwords, we specify this with []

useEffect(() => {
  Axios.get("http://localhost:3306/showpasswords").then((response) => {
    setPasswordList(response.data);
  });
}, []);
//function to make the api request to make a post request to the api url for adding pwd
const addPassword = () => {
  Axios.post("http://localhost:3306/addpassword", {
    password: password,
    title: title,
  });
};
//encryption is an object so whenever we call this function we pass password and iv!!!!
const decryptPassword = (encryption) => {
  Axios.post("http://localhost:3306/decryptpassword", {
    password: encryption.password,
    iv: encryption.iv,
  }).then((response) => {
    setPasswordList(
      passwordList.map((val) => {
        return val.id === encryption.id
          ? {
              id: val.id,
              password: val.password,
              title: response.data,
              iv: val.iv,
            }
          : val;
      })
    );
  });
};
return (
  <>
  <Router>
  <Navbar />
  <AddPassword />
  <Passwords/>
  <Footer/>
  <div className="App">
    <div className="AddingPassword">
      <input
        type="text"
        placeholder="Ex. password123"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Ex. Facebook"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button onClick={addPassword}>Add Password</button>
    </div>
    <div className="Passwords">
      {passwordList.map((val, key) => {
        return (
          <div
            className="password"
            onClick={() => {
              decryptPassword({
                password: val.password,
                iv: val.iv,
                id: val.id,
              });
            }}
            key={key}
          >
            <h3>{val.title}</h3>
          </div>
        );
      })}
    </div>
  </div>
  </Router>
  </>
);
}
export default App;
//inside div use {} to say that you are usign javascript
//val is an object cotaining all info for each password

//we map every value of the list of passwords to render each html element 