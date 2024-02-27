// 파일이름과 똑같은 함수를 만듦
function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    // React.createElement(type, props, child) : 원하는 컴포넌트(클래스)로 엘리먼트(인스턴스)를 생성하는 메서드
    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'ㅇㅋ' : '눌러요'
    );
}
