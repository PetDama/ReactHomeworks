import './App.css'

function App() {
  const animals = ['cat', 'dog', 'chicken', 'cow', 'sheep', 'horse' ,'bird']
  return (
    <ul>
      {animals.map((animal, index) => (
        <li key={index}>{animal}</li>
      ))}
    </ul>
  )
}

export default App
