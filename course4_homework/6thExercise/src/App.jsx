import './App.css'
import AnimalList from './Animals';

function App() {
  const animals = ['cat', 'dog', 'chicken', 'cow', 'sheep', 'horse' ,'bird']

  return (
    <div>
      <h2>Animal List</h2>
      <AnimalList animals={animals} />
    </div>
  )
}

export default App
