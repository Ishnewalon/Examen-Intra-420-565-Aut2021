import React, {Component} from "react";
import authService from "../../service/auth-service";
import Attempt from "./Attempt/attempt";

export default class AttemptsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attemptsList: [],
        };

        authService.getAllAttempts()
            .then(attemptsList => this.setState({attemptsList}))
            .catch(e => {
                this.setState({attemptsList: []})
                console.trace(e)
            })
    }

    render() {
        return (
            <div className="container text-center">
                <table className="center">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Guess utilisateur</th>
                            <th>Numero Random</th>
                        </tr>
                    </thead>

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
