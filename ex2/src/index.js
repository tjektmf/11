import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyButton from './chap01/MyButton';
import DrinkList from './chap01/DrinkList';
import Clock from './chap02/Clock';
import ProfileList from './chap03/ProfileList';
import AlarmList from './chap04/AlarmList';
import Salmon1 from './chap03/Salmon1';
import Salmon2 from './chap03/Salmon2';
import Recipe from './chap03/Salmon3';
import AlarmList2 from './chap04/AlarmList2';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>

    <AlarmList />
    <AlarmList2/>
    <DrinkList></DrinkList>
    <MyButton />
    <Clock></Clock>
    <ProfileList></ProfileList>
    <Salmon1></Salmon1>
    <Salmon2></Salmon2>
    <Recipe></Recipe>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
