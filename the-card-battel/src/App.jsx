// src/App.jsx
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

// Card data with different characters, images and stats
const cardData = [
  {
    id: 1,
    name: "Dragon",
    def: 63000,
    atk: 54000,
    image:
      "https://previews.123rf.com/images/morphart/morphart1910/morphart191010547/132689678-a-yellow-monster-with-a-rectangular-shaped-body-two-small-horns-eyes-rolled-down-hands-wide-open.jpg",
    rare: false,
  },
  {
    id: 2,
    name: "Warrior",
    def: 45000,
    atk: 58000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcSDWNWh6V5wg8lvsq9rjE7WducieBlOiE6rZRs92gpL2E8QxF9eg5_BwssJxfqUfxfE&usqp=CAU",
    rare: false,
  },
  {
    id: 3,
    name: "Mage",
    def: 38000,
    atk: 62000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLgcLfOJgQin7qEuP3BBiCtpNFqVRQ5Z4ajmfGQFZvOoG-5nRrB2y02eTh3T64Xm1JE8&usqp=CAU",
    rare: false,
  },
  {
    id: 4,
    name: "Archer",
    def: 42000,
    atk: 59000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFR5uqSA3ia2WW3y_J7MHpxhfVfKHIOwPPJTwHom-ZlKoiEr1LG0ExJlPnY09dIFrEbdI&usqp=CAU",
    rare: false,
  },
  {
    id: 5,
    name: "Goblin",
    def: 35000,
    atk: 48000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nDk-lPoInKI1GVf93lofol7j_pHbj3-h_vkIM443nVcGMHttvFSBnsjooMtiTjQhieQ&usqp=CAU",
    rare: false,
  },
  {
    id: 6,
    name: "Knight",
    def: 58000,
    atk: 52000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOR1lv6id5u78dtlA8qhKxQOn3DFG-EEbhkEsxLFlswW47x6h1Z9xv2knDEnQNmBHii9s&usqp=CAU",
    rare: false,
  },
  {
    id: 7,
    name: "Witch",
    def: 41000,
    atk: 65000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4aSZeLB6C8Vv2WfLu2NbmH9HoxOlHU_3-8YuJZIsHb9zI2PHjqKj4Jp4VYkrwe_xsibM&usqp=CAU",
    rare: true,
  },
  {
    id: 8,
    name: "Samurai",
    def: 55000,
    atk: 57000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJ34B4wR0-4QjydK7iN3hYdbZX5XaUQA2kaxveDtGdfLZi6SDQX2UB7dJmLE0u0pWw8Y&usqp=CAU",
    rare: false,
  },
  {
    id: 9,
    name: "Ninja",
    def: 47000,
    atk: 61000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6Nomtx0pV0LZLMZ8wOTxGd1Q4B8248FrzOW7FqsmAOwREurNi6CmNDDyjoNpDMD4vyY&usqp=CAU",
    rare: false,
  },
  {
    id: 10,
    name: "Robot",
    def: 60000,
    atk: 53000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbCX9URLDrceFO0alP_HUiCUkSv0Ke6FVmQprgQZXSEQ9aLctirQdSAjXvqyrz4Kf0Ig&usqp=CAU",
    rare: false,
  },
  {
    id: 11,
    name: "Dinosaur",
    def: 65000,
    atk: 56000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xzBQXRZ51Qo6FTKjNGOAGVCQ5ni6k9TN2d2KYoLxxWLUuYdTOcMH4BMAdq1RW9wXhm0&usqp=CAU",
    rare: true,
  },
  {
    id: 12,
    name: "Zombie",
    def: 50000,
    atk: 49000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfI8_NkOucc8JSONY8BFpJDworuTuj-z1FAIA2f96fZgPHGdNhhtXZhzGsB-9-FrbkG2Q&usqp=CAU",
    rare: false,
  },
  {
    id: 13,
    name: "Unicorn",
    def: 52000,
    atk: 60000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-tMrVBu_M-R7AZ-SAhGakOtGGmsXknnmZCfA3mZWtWxmg1HuxoZtHsggcEEEYahBXJQ&usqp=CAU",
    rare: true,
  },
  {
    id: 14,
    name: "Phoenix",
    def: 59000,
    atk: 64000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniG1rlaV6VppUgzIorPLkRwvu3nztVc5lYZLHl6g3aLZJJ80Rcv_UrbH5-Y77DwzEtRk&usqp=CAU",
    rare: true,
  },
  {
    id: 15,
    name: "Cyclops",
    def: 67000,
    atk: 55000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3bkVJ-u0lL7ccy_RRUkdezLA3UAguwKsjow63aP3NB8l-V7GZtEUc66qHIXulq2_tPc&usqp=CAU",
    rare: false,
  },
  {
    id: 16,
    name: "Merlin",
    def: 44000,
    atk: 68000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpySW0uOC3OYZtmhoYE8FWzXRYU9Wi2FJIAtsX8h4gq-_Uq9DMbM3560Pq8qIsswKeRM&usqp=CAU",
    rare: true,
  },
  {
    id: 17,
    name: "Valkyrie",
    def: 57000,
    atk: 59000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtgc-SAJBJC_4iGq37urt24Onf9EhgQR4904h2bW5QmAA8-8SilSD8Do4_RXzN9JDF5E&usqp=CAU",
    rare: false,
  },
  {
    id: 18,
    name: "Demon",
    def: 62000,
    atk: 66000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrt5gu8bhv8-doO7Z6dSUpJ3j4N7phQvfajEAuXDu6hLYIywBoOrQ7lZIPBVm_m-Ce5M&usqp=CAU",
    rare: true,
  },
];

// Shuffle array function
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Start screen component
const StartScreen = ({ onStart }) => {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-4 w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
          The Card Battle Game
        </h1>

        <h4 className="text-sm font-semibold text-gray-600 text-center">
  Sponsored by PrinceHub
</h4>
        <input
          type="text"
          placeholder="Player 1 Name"
          className="w-full p-2 border rounded"
          value={p1}
          onChange={(e) => setP1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Player 2 Name"
          className="w-full p-2 border rounded"
          value={p2}
          onChange={(e) => setP2(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 transition-colors"
          onClick={() => onStart(p1, p2)}
          disabled={!p1 || !p2}
        >
          Start Battle
        </button>
      </div>
    </div>
  );
};

const Card = ({ card, isActive, onClick, isFlipped, isSelected }) => {
  return (
    <div
      className={`relative transition-all duration-300 ${
        isSelected
          ? "ring-4 ring-yellow-400 scale-110 z-10 opacity-100" // Selected card full highlight
          : "opacity-50 hover:opacity-100 hover:scale-105" // Baaki cards halka blur (50% opacity)
      }`}
      onClick={onClick}
      style={{
        perspective: "1000px",
        height: "clamp(10rem, 30vw, 16rem)", // Responsive height
        width: "clamp(6rem, 20vw, 11rem)", // Responsive width
      }}
    >
      <div
        className="relative w-full h-full transition-all duration-500 transform"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Card back (Question Mark) */}
        <div
          className={`absolute w-full h-full bg-blue-100 rounded-lg p-2 shadow-lg border-2 border-blue-300 flex items-center justify-center`}
          style={{
            backfaceVisibility: "hidden",
            display: isFlipped ? "none" : "flex",
          }}
        >
          <span className="text-4xl md:text-6xl font-bold text-gray-400">
            ?
          </span>
        </div>

        {/* Card front (Details) */}
        <div
          className={`absolute w-full h-full bg-blue-100 rounded-lg p-2 shadow-lg border-2 border-blue-300 flex flex-col`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: isFlipped ? "flex" : "none",
          }}
        >
          {card && (
            <>
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-1/2 object-cover rounded-t-lg"
              />
              <div className="mt-1 md:mt-2 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm md:text-lg">{card.name}</h3>
                  {card.rare && (
                    <span className="text-xs text-yellow-600 font-bold mt-1">
                      RARE CARD!
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="bg-red-100 rounded p-1">
                    <p className="text-xs md:text-sm font-semibold">
                      ATK: {card.atk.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-1">
                    <p className="text-xs md:text-sm font-semibold">
                      DEF: {card.def.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded p-1">
                    <p className="text-xs md:text-sm font-semibold">
                      TOTAL: {(card.atk + card.def).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Game screen component
const GameScreen = ({ players, onRoundEnd, onGameEnd }) => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [selectedCards, setSelectedCards] = useState([null, null]);
  const [battleResult, setBattleResult] = useState(null);
  const [flippedCards, setFlippedCards] = useState([false, false]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateWinner = (card1, card2) => {
    const total1 = card1.atk + card1.def;
    const total2 = card2.atk + card2.def;
    return total1 > total2 ? 0 : total2 > total1 ? 1 : -1;
  };

  const handleCardSelect = (playerIndex, cardIndex) => {
    if (playerIndex !== currentPlayer) return;

    // Flip the selected card
    const newFlipped = [...flippedCards];
    newFlipped[playerIndex] = true;
    setFlippedCards(newFlipped);

    const newSelected = [...selectedCards];
    newSelected[playerIndex] = cardIndex;
    setSelectedCards(newSelected);

    // Move to next player or show battle result
    if (playerIndex === 0) {
      setCurrentPlayer(1);
    } else {
      // Both players have selected, calculate result
      const p1Card = players[0].cards[selectedCards[0]];
      const p2Card = players[1].cards[cardIndex];

      const winner = calculateWinner(p1Card, p2Card);
      setBattleResult({ winner, p1Card, p2Card });

      setTimeout(() => {
        onRoundEnd([selectedCards[0], cardIndex], winner);
        setSelectedCards([null, null]);
        setCurrentPlayer(0);
        setBattleResult(null);
        setFlippedCards([false, false]);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 md:p-4">
      {/* Battle result display */}
      {battleResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 md:p-8 rounded-lg text-center max-w-full w-full md:max-w-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {battleResult.winner === -1
                ? "Draw!"
                : `${players[battleResult.winner].name} Wins!`}
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
              <div className="bg-red-100 p-2 md:p-4 rounded-lg w-full md:w-auto">
                <Card
                  card={battleResult.p1Card}
                  isFlipped={true}
                  isSelected={true}
                />
                <div className="mt-2 bg-gray-200 p-1 md:p-2 rounded">
                  <p className="font-bold text-sm md:text-base">
                    Total:{" "}
                    {(
                      battleResult.p1Card.atk + battleResult.p1Card.def
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="text-2xl md:text-4xl font-bold">VS</div>
              <div className="bg-blue-100 p-2 md:p-4 rounded-lg w-full md:w-auto">
                <Card
                  card={battleResult.p2Card}
                  isFlipped={true}
                  isSelected={true}
                />
                <div className="mt-2 bg-gray-200 p-1 md:p-2 rounded">
                  <p className="font-bold text-sm md:text-base">
                    Total:{" "}
                    {(
                      battleResult.p2Card.atk + battleResult.p2Card.def
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Turn indicator */}
      <div className="text-center mb-2 md:mb-4">
        <div className="bg-white inline-block px-3 py-1 md:px-4 md:py-2 rounded-lg shadow">
          <p className="font-bold text-sm md:text-base">
            Current Turn:{" "}
            <span className="text-blue-600">{players[currentPlayer].name}</span>
          </p>
        </div>
      </div>

      {/* Player 1 cards */}
      <div className="mb-4 md:mb-8 bg-white p-2 md:p-4 rounded-lg shadow">
        <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
          {players[0].name}{" "}
          <span className="text-xs md:text-sm font-normal">
            ({players[0].cards.length} Cards)
          </span>
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
          {players[0].cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              isActive={currentPlayer === 0 && selectedCards[0] === null}
              isFlipped={selectedCards[0] === i || flippedCards[0]}
              isSelected={selectedCards[0] === i}
              onClick={() => handleCardSelect(0, i)}
            />
          ))}
        </div>
      </div>

      {/* Player 2 cards */}
      <div className="mt-4 md:mt-8 bg-white p-2 md:p-4 rounded-lg shadow">
        <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
          {players[1].name}{" "}
          <span className="text-xs md:text-sm font-normal">
            ({players[1].cards.length} Cards)
          </span>
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
          {players[1].cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              isActive={currentPlayer === 1 && selectedCards[1] === null}
              isFlipped={selectedCards[1] === i || flippedCards[1]}
              isSelected={selectedCards[1] === i}
              onClick={() => handleCardSelect(1, i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App component
export default function App() {
  const [gameState, setGameState] = useState("start");
  const [players, setPlayers] = useState([]);
  const [winner, setWinner] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startGame = (p1, p2) => {
    const shuffledCards = shuffleArray(cardData);
    setPlayers([
      { name: p1, cards: shuffledCards.slice(0, 9) },
      { name: p2 || "Computer", cards: shuffledCards.slice(9) },
    ]);
    setGameState("playing");
  };

  const handleRoundEnd = (selectedCards, winnerIndex) => {
    if (winnerIndex === -1) return; // Draw case

    const newPlayers = [...players];
    const winnerCard =
      newPlayers[winnerIndex].cards[selectedCards[winnerIndex]];
    const loserIndex = 1 - winnerIndex;
    const loserCardIndex = selectedCards[loserIndex];

    // Card transfer
    newPlayers[winnerIndex].cards.push(
      newPlayers[loserIndex].cards[loserCardIndex]
    );
    newPlayers[loserIndex].cards = newPlayers[loserIndex].cards.filter(
      (_, i) => i !== loserCardIndex
    );

    // Check game end condition
    if (newPlayers[loserIndex].cards.length === 0) {
      setWinner(newPlayers[winnerIndex]);
      setGameState("ended");
    } else {
      setPlayers(newPlayers);
    }
  };

  return (
    <div>
      {gameState === "start" && <StartScreen onStart={startGame} />}

      {gameState === "playing" && (
        <GameScreen
          players={players}
          onRoundEnd={handleRoundEnd}
          onGameEnd={() => setGameState("ended")}
        />
      )}

      {gameState === "ended" && (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-md w-full">
            <Confetti width={windowSize.width} height={windowSize.height} />
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Game Over!</h1>
            <p className="text-xl md:text-2xl mb-4">Winner: {winner?.name}</p>
            <p className="text-lg md:text-xl mb-6">
              With {winner?.cards.length} cards remaining!
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={() => setGameState("start")}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
