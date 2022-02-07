import './App.css';
import Whaaaa from './messingAround';

function App() {
  const styledText = {
    fontSize: "25px",
    textAlign: "center",
    margin: "25",
    border: "1px solid purple"
  };

  return (
    <div style={styledText}>
      <h1>Hello World</h1>
      <Whaaaa styledText={styledText}/>
    </div>
  );
}

export default App;
