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

class AlarmList extends React.Component {
    constructor(props) {
        super(props);

        // 일반 변수 선언
        this.alarms = [];

        // state로 변수 선언
        // state 내부에 선언되어 있는 변수를 setState() 메서드로 수정할 때마다
        // 해당 컴포넌트의 render()가 자동으로 호출되게끔 설계되어 있다
        this.state = {
            alarms: [], // new ArrayList() 와 같음 

        }
    }

    componentDidMount() {

        const alarms = this.state.alarms;
        let index = alarms.length;

        timer = setInterval(() => {
            //       if (alarms.length < reservedAlarms.length) {
            alarms.shift(0);
            alarms.push(reservedAlarms[index++]);
            // setState()로 state를 갱신해주면 render메서드가 호출됨
            this.setState({
                alarms: alarms
            });
            console.log(`${index} 번째 알람 추가`);
            if (index === 3) {
                index = 0;
            }

            /*
                  } else {
                      clearInterval(timer);
                      console.log(alarms);
                  }
                  */
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
                {this.state.alarms.map((alarm) => {
                    return (
                        <Alarm
                            id={alarm.id}
                            message={alarm.message}
                        />
                    )
                })}
                {/*<Alarm message="[NOTICE] ㅎㅇ" />
                <Alarm message="[NOTICE] ㅂㅇ" />*/}
            </div>
        )
    }
}

export default AlarmList;