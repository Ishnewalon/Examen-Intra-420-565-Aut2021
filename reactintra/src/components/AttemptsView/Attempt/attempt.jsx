import React, {Component} from "react";

export default class Attempt extends Component {

    render() {
        const {attempt} = this.props
        return(
                <tr>
                    <td>{attempt.name}</td>
                    <td>{attempt.guess}</td>
                    <td>{attempt.randoNumber}</td>
                </tr>
        )
    }
}