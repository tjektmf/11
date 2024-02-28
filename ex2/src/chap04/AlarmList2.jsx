import React from "react";
import Alarm from "./Alarm";

const reservedAlarms = [

    {
        id: 1,
        message: '[1] ㅎㅇ',
    },
    {
        id: 2,
        message: '[2] ㅂ2',
    },
    {
        id: 3,
        message: '[3] ㅋㅋ',
    },
];

let timer;
let currentAlarmIndex = 0;
const nextAlarm = () => reservedAlarms[currentAlarmIndex++ % reservedAlarms.length];

class AlarmList2 extends React.Component {
    constructor(props) {
        super(props);

        // 일반 변수 선언
        this.alarms = [];

        // state로 변수 선언
        // state 내부에 선언되어 있는 변수를 setState() 메서드로 수정할 때마다
        // 해당 컴포넌트의 render()가 자동으로 호출되게끔 설계되어 있다
        this.state = {
            alarm: nextAlarm(),
            alarms: [], // new ArrayList() 와 같음 

        }
    }

    componentDidMount() {

        timer = setInterval(() => {
            // 객체를 전달해서 업데이트하는 setState()
            //    this.setState({
            //       alarm: reservedAlarms[++currentAlarmIndex % reservedAlarms.length]
            //  });

            // 함수를 전달해서 업데이트하는 setState()
            this.setState(state => ({
                alarm: nextAlarm()
            }))

        }, 1000);
    }

    componentWillUnmount() {
        if (timer) { // null 이나 undefined 인 경우 실행되지 않음
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                <Alarm
                    id={this.state.alarm.id}
                    message={this.state.alarm.message} />
            </div>
        )
    }
}

export default AlarmList2;