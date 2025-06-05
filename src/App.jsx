import React, { useState } from 'react'
import Logo from './components/Logo'
import Header from './components/Header'
import { cardsData } from "../src/cards";
import Footer from './components/Footer'
import Card from './components/Card';

const App = () => {
  // State for all cards (initial + new)
  const [cards, setCards] = useState(cardsData);

  // Handler to add a new card
  const handleAddCard = (card) => {
    setCards(prev => [card, ...prev]);
  };

  return (
    <div>
      <Logo />
      <Header onAddCard={handleAddCard} />
      <div className='main'>
        <section className='container'>
          {
            cards.map((card, idx) => (
              <Card
                key={card.imgSrc || card.image || idx}
                img={card.imgSrc || card.image}
                alt={card.imgAlt || card.title}
                title={card.title}
              />
            ))
          }
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default App