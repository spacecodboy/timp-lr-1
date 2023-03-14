import { useEffect, useState } from 'react';
import './styles/App.css';
import Input from './components/UI/Input/Input';
import CardList from './components/CardList';
import Button from './components/UI/Button/Button';
import emojiList from './sourse/emoji_list.json'; 

function App() {
  const [card, setCard] = useState(emojiList);
  const [request, setRequest] = useState('');

  function CopyEmojies() {
    let cell = document.getElementsByClassName('image');

    for (var i = 0; i < cell.length; i++) {
      cell[i].addEventListener('click', cellClick);
    }
    function cellClick() {

      navigator.clipboard.writeText(this.innerHTML);
    }
  }
  const filterEmoji = (searchText, listOfEmoji) => {
    if (!searchText) {
      return listOfEmoji;
    }
    return listOfEmoji.filter(({unicodeName}) =>
      unicodeName.toLowerCase().includes(searchText.toLowerCase())

    );
  }
  
  useEffect(() => {
    CopyEmojies();
    const Debounce = setTimeout(() => {
      const filteredEmoji = filterEmoji(request, emojiList);
      setCard(filteredEmoji);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [request]);


  return (
    <div className="App">
      <h1>Поиск эмоджи</h1>
      <div className='search'>
        <Input
         value={request}
          type='text'
          placeholder='Введите слово'
          onChange={e => setRequest(e.target.value)}
        />
        <Button onClick={() => filterEmoji}>Поиск</Button>
      </div>

      <CardList card={card} />
      <CopyEmojies />


    </div>
  );
}

export default App;
