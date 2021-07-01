import './App.css';

function App() {
  const author = 'Nirajan Mahara';
  const sum = 2000 + 21;

  return (
    <div className="App">
      <h1>{author} React Firebase TODO App {sum} {5+2} 🚀</h1>

      <input />
      <button>Add Todo</button>

      <ul>
        <li>Wake up at 5AM</li>
        <li>Workout till 5:30</li>
        <li>Fresh till 6:00</li>
      </ul>
    </div>
  );
}

export default App;
