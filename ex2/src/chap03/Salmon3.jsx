import React from 'react';

const data = {
    "ingredients": ["연어", "잣", "버터 상추", "옐로 스쿼시(Yellow Squash, 호박의 한 종류)", "올리브 오일", "마늘"],
    "instructions": [
        "오븐을 350도로 예열한다.",
        "유리 베이킹 그릇에 올리브 오일을 두른다.",
        "연어, 마늘, 잣을 그릇에 담는다.",
        "오븐에서 15분간 익힌다.",
        "옐로 스쿼시를 추가하고 다시 30분간 오븐에서 익힌다.",
        "오븐에서 그릇을 꺼내서 15분간 식힌 다음에 상추를 곁들여서 내놓는다."
    ]
};
function Recipe() {

    return (
        <div>
            <h1>맛있는 조리법</h1>
            <h2>Baked Salmon</h2>
            <ul>
                {data.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>조리 절차</h2>
            <div>
                {data.instructions.map((instruction, index) => (
                    <p key={index}>{instruction}</p>
                ))}
            </div>
        </div>
    );
}

export default Recipe;