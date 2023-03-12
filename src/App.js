import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://emoji-api.com/emojis?access_key=2c079f31b6cf34d4014d34d1f0d8a507c1fc0ccf')
    .then(res => res.json())
    .then(res => setData(res))
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = () => {
    if(search !== '') {
      fetch(`https://emoji-api.com/emojis?search=${search}&access_key=2c079f31b6cf34d4014d34d1f0d8a507c1fc0ccf`)
      .then(res => res.json())
      .then(res => {
        if(res) {
          setData(res);
        } else {
          setData([])
        }
      })
    }
  }

  return (
    <div className="App">
      <div className="menu">
        <div className='menu_text'>
          <h1>Поиск эмоджи</h1>
          <div>
          <input type="text" placeholder="Введите слово" value={search} onChange={(e) => handleSearch(e)}/>
          <button className='search' onClick={() => handleSubmit()}>Поиск</button>
          </div>
          
        </div>
      </div>
      <div className="container" >
        {
          data.map((e, i) => 
            <div className='card' key={e.slug}>
              <p className='emo'>{e.character}</p>
              <p className='name'>{e.unicodeName}</p>
            </div>
          )
        }
        
        
      </div>
    </div>
  );
}

export default App;
