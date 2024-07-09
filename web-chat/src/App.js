import React , {useEffect}from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Menu from './pages/Menu';
import SolutionPage from './pages/Solutions'
import SetAvatar from './pages/SetAvatar';
import Meetingroom from './components/Meetingroom';
import { io } from 'socket.io-client';


// const socket = io("http://localhost:5000", { transport: ['websocket' ] });

export default function App() {

// useEffect( () =>{
//   socket.emit("temp", {message: "hello"});
//   console.log(socket);
// },[]);

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />}></Route>
      <Route path="/setAvatar" element={<SetAvatar />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/chat" element={<Chat />}></Route>
      <Route path="/meetingroom/:roomId" element={<Meetingroom />}></Route>
      <Route path="/solution" element={<SolutionPage />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

// export default App


























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

