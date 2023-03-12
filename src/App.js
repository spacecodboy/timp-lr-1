import { useEffect, useState } from 'react';
import './App.css';
import SearchHeader from './components/SearchHeader'
import Input from './components/Input'
import Button from './components/Button'
function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://emoji-api.com/emojis?access_key=2c079f31b6cf34d4014d34d1f0d8a507c1fc0ccf')
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  return (
    <div className="App">
      <div className="App">
        <div className="menu">
          <div className='menu_text'>
            <SearchHeader />
            <div>
              <Input setSearch={setSearch} search={search} />
              <Button setData={setData} search={search} />
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
    </div>
  );
}

export default App;
