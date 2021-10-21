import {Component} from "react";

export default class ResultView extends Component {

    render() {
        const {guess} = this.props
        const {randoNumber} = this.props
        return (<>
            <div>
                    <h1>
                        {randoNumber}
                    </h1>
                    <h1>{randoNumber === guess ? "Gagnant" : "Manque"}</h1>
                </div>
            </>
        );
    }
}