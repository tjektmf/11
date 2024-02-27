// 다른 파일에 있는 원하는 문법을 가져와서 사용할 수 있다
import { useState } from 'react';

// JSX : 좀 더 나은 방식의 리액트 (JS + XML/HTML)
function MyButton(props) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <button onClick={() => setIsClicked(true)}>
            {isClicked ? 'ㅇㅋ' : '눌러요'}
        </button>
    );
}
// 이 파일의 MyButton 을 다른 파일에서 import 할 수 있게 만들어줌
// 자바에서는 대충 public 같은 접근제어자를 사용해서 여기저기서 사용할 수 있게 함
export default MyButton; 