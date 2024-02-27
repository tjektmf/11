import React from 'react';
import Drink from './Drink';

// 굳이 사용하지않아도 props 를 넣어줌
// 숫자를 props 로 보내려면 {} 자바스크립트 스코프를 사용해서 넣어줘야 숫자로 알아들음


// 상위 컴포넌트
function DrinkList(props){
    return(
        <div>
            {/* 하위 컴포넌트 > 주석쓰려면 자바스크립트 사용을 위해 {} 사용 */ }
            <Drink name="COLA" price={2000}></Drink>
            <Drink name="sprite" price={3000}></Drink>
            <Drink name="MACCOL" price={1500}></Drink>
        </div>
    )

}
export default DrinkList;