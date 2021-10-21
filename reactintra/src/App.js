import './App.css'
import AttemptsView from "./components/AttemptsView/attemptsView";
import RegisterAttempt from "./components/RegisterAttempt/registerAttempt";


function App() {
  return (
    <div className="App">
        <h1>Examen Intra</h1>
        <RegisterAttempt></RegisterAttempt>
      <AttemptsView></AttemptsView>
    </div>
  );
}

export default App;
