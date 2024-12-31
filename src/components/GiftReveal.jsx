import React, { useState } from 'react';

const GiftReveal = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showGift, setShowGift] = useState(false);
  const [currentGift, setCurrentGift] = useState(1);
  
  const gifts = [
    {
      image: "/public/cat.png",
      message: "С новым годом! 🌟"
    },
    {
      image: "/public/jezevika.png",
      message: "А это второй подарочек! 🎄"
    },
    {
      image: "/public/heart.png",
      message: "Иииии последний! 🎅"
    }
  ];

  const handleClick = () => {
    if (clickCount < 4) {
      setClickCount(prev => prev + 1);
    } else {
      setShowGift(true);
    }
  };

  const handleNextGift = () => {
    if (currentGift < gifts.length) {
      setCurrentGift(prev => prev + 1);
      setClickCount(0);
      setShowGift(false);
    }
  };
  
  const getLidStyle = () => {
    const angle = (clickCount * 22.5);
    return {
      transformOrigin: '80px 150px',
      transform: `rotate(${-angle}deg)`,
      transition: 'transform 0.5s ease-out'
    };
  };

  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 cursor-pointer" onClick={showGift ? handleNextGift : handleClick}>
        {!showGift ? (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <g transform="translate(50, 50)">
                {/* Основание коробки */}
                <path d="M 100 150 L 300 150 L 300 350 L 100 350 Z" fill="#e74c3c" />
                <path d="M 100 150 L 300 150 L 300 350 L 100 350 Z" fill="#c0392b" />
                
                {/* Ленты */}
                <rect x="190" y="150" width="20" height="200" fill="#f1c40f" />
                <rect x="100" y="240" width="200" height="20" fill="#f1c40f" />
                
                {/* Крышка с анимацией */}
                <g style={getLidStyle()}>
                  <path d="M 80 150 L 320 150 L 320 130 L 80 130 Z" fill="#e74c3c" />
                  <path d="M 80 130 L 320 130 L 300 100 L 100 100 Z" fill="#c0392b" />
                  <rect x="190" y="100" width="20" height="50" fill="#f1c40f" />
                  <path d="M 170 115 L 230 115 L 200 90 Z" fill="#f1c40f" />
                </g>
              </g>
            </svg>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            <img 
              src={gifts[currentGift - 1].image}
              alt={`Подарок ${currentGift}`}
              className="w-full max-w-[300px] aspect-square object-contain"
            />
            <div className="text-xl font-semibold text-gray-800 text-center">
              {gifts[currentGift - 1].message}
            </div>
            {currentGift < gifts.length && (
              <div className="text-base text-gray-600 text-center">
                Нажми для следующего подарка ✨
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="text-center py-6">
        {!showGift && <div className="text-base text-gray-600">Нажми на коробку 🎁</div>}
      </div>
    </main>
  );
};

export default GiftReveal;