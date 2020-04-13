import React, { Component } from "react"
import moment from "moment";

export default class TimeContainer extends Component {
    render() {
        return (
            <div>
                <div>{moment().format(" h:mm:ss a")}</div>
            </div>
        )
    }
}