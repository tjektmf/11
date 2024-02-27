import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyButton from './chap01/MyButton';
import DrinkList from './chap01/DrinkList';
import Clock from './chap02/Clock';


const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{

  root.render(
    <React.StrictMode>
      <DrinkList></DrinkList>
      <MyButton />
      <Clock></Clock>
    </React.StrictMode>
  );

},1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
