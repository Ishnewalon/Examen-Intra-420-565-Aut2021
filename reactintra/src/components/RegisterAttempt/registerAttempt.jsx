import {Component} from "react";
import authService from "../../service/auth-service";
import {User} from "../../model/User";
import AttemptsView from "../AttemptsView/attemptsView";
import ResultView from "../ResultView/resultView";


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

    genRandoNumber = () => {
        this.state.randoNumber = Math.floor(Math.random() * 6)
        this.throwDice()
    }

    throwDice = () => {
        if(this.state.name === '') {
            alert("Le nom ne peut pas etre vide")
        }
        else {
            const {
                name, guess, randoNumber
            } = this.state;
            let user
            user = new User(name, guess, randoNumber);
            this.service.createAttempt(user).then()
        }
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
                        <button type="button" onClick={this.genRandoNumber}>Coup de dé</button>
                    </div>
                </form>
                <div>
                    <ResultView guess={this.state.guess}
                                    randoNumber={this.state.randoNumber}/>
                    <AttemptsView/>
                </div>
            </div>
        );
    }
}