import { useState, useEffect} from 'react';
import './App.css';
import data from './data'

function App() {
  const [name, setName]=useState('')
  const [people, setPeople] =useState(data);
  const [showModal, setShowModal] =useState(false);


  return (
    <>
    {showModal && <Modal />}
    <form onSubmit={handleSubmit}>
      <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
      </div>

    </form>
    </>
  );
}

export default App;
