import React from "react";

const styles = {
    alarmWrapper: {
        margin: 10,
        padding: 10,
        border: 'dotted 3px blue',
    },
    messageText: {
        color: 'green',
    },
}


// 클래스 방식의 리액트 컴포넌트
class Alarm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // render() 메서드르 오버라이드해서 원하는 엘리먼트를 화면에 그린다
    render() {
        return (
            <div style={styles.alarmWrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        )
    }
}

export default Alarm;