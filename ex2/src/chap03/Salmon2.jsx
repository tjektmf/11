import React from "react";

const honeySalmon={

    pad:{
        padding: 20,
    },

    head:{
        fontSize:20,
        fontWeight:'bold',
    }
}

function Salmon2(props) {
    return (

        <div style={honeySalmon.pad}>
            <div style={honeySalmon.head}>조리 절차</div>
            <p>오븐을 350도로 예열한다.</p>
            <p>유리 베이킹 그릇에 올리브 오일을 두른다.</p>
            <p>연어, 마늘, 잣을 그릇에 담는다.</p>
            <p>오븐에서 15분간 익힌다.</p>
            <p>옐로 스쿼시를 추가하고 다시 30분간 오븐에서 익힌다.</p>
            <p>오븐에서 그릇을 꺼내서 15분간 식힌 다음에 상추를 곁들여서 내놓는다.</p>
        </div>
    )
}

export default Salmon2;