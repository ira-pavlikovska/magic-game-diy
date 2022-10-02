import {useState} from "react";
import Header from './components/Header';
import Card from './components/Card';
// import Button from '@mui/material/Button';
import './App.css';


function App() {

  const initialGame = [
    {picture: "1"},
    {picture: "1"},
    {picture: "2"},
    {picture: "2"},
    {picture: "3"},
    {picture: "3"},
    {picture: "4"},
    {picture: "4"}
  ];

  const [images, setImages] = useState([]);
  const [turnsCount, setTurnsCount] = useState(0);

  const shuffleCards = (initialArray) => {
    let j, x, i;
    for (i = initialArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = initialArray[i];
      initialArray[i] = initialArray[j];
      initialArray[j] = x;
    }
    return initialArray
  }

  const changeStatus = (image) => {

    if (image.isOpen) return

    const openCards = images
      .filter(i => i.isOpen === true)
    const openCardsCount = openCards.length

    if (openCardsCount >= 2) return

    image.isOpen = true

    if (openCardsCount === 1) {
      // check openCards for match
      if (openCards[0].picture === image.picture) {
        image.isMatch = true
        openCards[0].isMatch = true
      }
    }
    // console.log('hi ' + JSON.stringify(images))
    setImages([...images]);

    setTimeout(() => {
      image.isOpen = !image.isOpen
      setImages([...images]);
    }, 2000)

    setImages([...images]);
    setTurnsCount(turnsCount + 1);
  }

  const createNewGame = () => {
    let shuffledCards = shuffleCards(initialGame);
    setImages(shuffledCards);
    setTurnsCount(0);
  }

  return (
    <div className="App">
      <button style={{backgroundColor: "lightblue", color: "black"}} onClick={() => {
        createNewGame()
      }}
      tabIndex={1}
      >New 'Magic Match' game</button>

      {
        images.length > 0 && (
          <div>
            <div className='container'>
              {
                images.map((image, index) => (
                  <div key={index}
                       tabIndex={2 + index}
                       onClick={() => changeStatus(image)}
                       onKeyPress={() => changeStatus(image)}
                  >
                    <Card
                      image={image} />
                  </div>
                ))
              }
            </div>
            <div>Turns: {turnsCount}</div>
          </div>
        )
      }
    </div>
  );
}

export default App;
