import { useState, useEffect} from 'react';
import './App.css';
import {data} from './data';
import Modal from './Modal'

function App() {
  const [name, setName]=useState('')
  const [people, setPeople] =useState(data);
  const [showModal, setShowModal] =useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name){
      setShowModal(true)
      setPeople([...people, {name: name, id:new Date().setTime().toString()}])
      setName('')
    } else {
      setShowModal(true)
    }
  }
  return (
    <div className='App'>
    {showModal && <Modal />}
    <form onSubmit={handleSubmit}>
      <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='input'/>
      </div>
      <button type='submit'>Add</button>
    </form>
    {people.map((person)=>{
      return <div key={person.id}>
        <h4>{person.name}</h4>
      </div>
    })}
    </div>
  );
}

export default App;
