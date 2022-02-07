import './App.css';

function App() {
  const styledText = {
    fontSize: "25px",
    textAlign: "center",
    margin: "25",
    border: "1px solid green"
  };

  return (
    <div style={styledText}>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
