import { useEffect, useState } from 'react';
import './styles/App.css';
import Input from './components/UI/Input/Input';
import CardList from './components/CardList';
import Button from './components/UI/Button/Button';
import emojiList from './sourse/emoji_list.json'; 

function App() {
  const [card, setCard] = useState(emojiList);
  const [request, setRequest] = useState('');

  // useEffect(() => {

  //   // fetch('https://emoji-api.com/emojis?access_key=2c079f31b6cf34d4014d34d1f0d8a507c1fc0ccf')
  //   // .then(res => res.json())
  //   // .then(res => setCard(res))
  // }, [])

  const handleSubmit = () => {
    if(request !== '') {
      fetch(`https://emoji-api.com/emojis?search=${request}&access_key=2c079f31b6cf34d4014d34d1f0d8a507c1fc0ccf`)
      .then(res => res.json())
      .then(res => {
        if(res) {
          setCard(res);
        } else {
          setCard([])
        }
      })
    } else {
      setCard(emojiList)
    }
  }

  return (
    <div className="App">
      <div className="menu">
        <div className='menu_text'>
          <h1>Поиск эмоджи</h1>
          <div>
          {/* <input type="text" placeholder="Введите слово" value={search} onChange={(e) => handleSearch(e)}/> */}
          <Input
            value={request}
            type='text'
            placeholder='Введите слово'
            onChange={e => setRequest(e.target.value)}
          />
          {/* <input type="text" placeholder="Введите слово"/> */}
          {/* <button className='search' onClick={() => handleSubmit()}>Поиск</button> */}
          {/* <button className='search'>Поиск</button> */}
          <Button onClick={() => handleSubmit()}>Поиск</Button>
          </div>
        </div>
      </div>
      <CardList card={card}/>
    </div>
  );
}

export default App;
