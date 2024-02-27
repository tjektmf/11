import React from "react";
import Alarm from "./Alarm";

class AlarmList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            alarms: [], // new ArrayList() 와 같음 

        }
    }

    render() {
        return (
            <div>
                <Alarm message="[NOTICE] ㅎㅇ" />
                <Alarm message="[NOTICE] ㅂㅇ" />
            </div>
        )
    }
}

export default AlarmList;