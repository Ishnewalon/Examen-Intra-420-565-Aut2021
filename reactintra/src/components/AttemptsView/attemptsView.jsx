import React, {Component} from "react";
import AuthService from "../../service/auth-service";
import Attempt from "./Attempt/attempt";

export default class AttemptsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attemptsList: [],
        };

        AuthService.getAllAttempts()
            .then(attemptsList => this.setState({attemptsList}))
            .catch(e => {
                this.setState({attemptsList: []})
                console.trace(e)
            })
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    {this.state.attemptsList.map((attempt, index) =>
                        <tr key={attempt.id}>
                            <Attempt attempt={attempt}></Attempt>
                        </tr>
                    )}

                </table>
            </div>

        )
    }
}
