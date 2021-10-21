import {Component} from "react";
import authService from "../../service/auth-service";


export default class RegisterAttempt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            guess: '',
            randoNumber: '',
        }
        this.service = authService
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Votre Nom</label>
                        <input name="name" placeholder="Dwarf" className="form-control" type="text"
                                value={this.state.name} onChange={this.handleChange("name")}/>
                    </div>
                    <div className="form-group">
                        <label>Votre Guess</label>
                        <input name="guess" placeholder="0" className="form-control" type="text"
                               value={this.state.guess} onChange={this.handleChange("guess")}/>
                    </div>
                    <div className="form-group">
                        <button type="button">Coup de dé</button>
                    </div>
                </form>
            </div>
        );
    }
}