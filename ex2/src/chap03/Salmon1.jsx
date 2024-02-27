import React from "react";

const dogHoneySalmon={

    pad:{
        padding: 20,
    },

    head:{
        fontSize:20,
        fontWeight:'bold',
    },

    neck:{
        fontWeight:'bold',
    }
}


function Salmon1(props) {
    return (

        <div style={dogHoneySalmon.pad}>
            <div style={dogHoneySalmon.head}>맛있는 조리법</div>
            <p style={dogHoneySalmon.neck}>Baked Salmon</p>
            <ul>
                <li><p>연어</p></li>
                <li><p>잣</p></li>
                <li><p>버터 상추</p></li>
                <li><p>옐로 스쿼시(Yellow Squash, 호박의 한 종류)</p></li>
                <li><p>올리브 오일</p></li>
                <li><p>마늘</p></li>
            </ul>

        </div>
    )
}

export default Salmon1;