
function Drink(props){
    return(

        <div>
            <h3>{/* Javascript scope */  `이 음료의 이름은 ${props.name} 잉`}</h3>
            <p>{`가격은 ${props.price} 원`}</p>
        </div>
    );
}

export default Drink;