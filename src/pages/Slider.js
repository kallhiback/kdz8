import React, { useState } from 'react';

function Slider() {
  const slides = [
    {
      imageUrl: 'data:image/jpeg;base64,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', // Ссылка на первое изображение
      linkUrl: 'https://example.com/link1', // Ссылка, куда ведет первая фотография
    },
    {
      imageUrl: 'data:image/jpeg;base64,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xbfoCo7Qfi5Kt0TT+FdU/EL8AOXrspZH2dUbN5HPldzJNgfYK6xx4n/RCOeUdWuzpQ8qhh9190WLRzt1xPD23tcdVxJMjUHKM/7it7DsLjpmFkTdLdz79VS1DG2SeZeTnZxm7wQxM/mvmj0AcRZwufRXBCCGtB4gC/rZUtkKmccYf+L3kaxzo7/DbkW+xV2rdVDpiZpvLCIitIBERAEREAREQBERAEREAREQBERAEREB5SRNcLOaHDoQCPuo/ieR8Oqf5lMy/VoLD9W2UlRMAr6TsnoD8Dpo/Jsh/dfLeyai+aSocOhlP7Kw0QEQoOzjDITcU4eer3Of+pUkpKCKIaY42MHRrQP0W2iAhed8kiv0SQv7ieM7PA2I6GyjjcBx2EW1w1AHNztLj9la6KMoRlyjqk1wVBM/GWcaAO/yPB/dYjZjMmwoWs83vAVvrKh2IehLuSK9ynlWsbVisrXRhzGOYyNm/wAXMuVhIisSS2RFvIREXTgREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//9k=', // Ссылка на второе изображение
      linkUrl: 'https://example.com/link2', // Ссылка, куда ведет вторая фотография
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexDirection: "column"
    }}>
      <div className="slider-image-container">
        <a href={slides[currentSlideIndex].linkUrl}>
          <img src={slides[currentSlideIndex].imageUrl} alt={`Slide ${currentSlideIndex + 1}`} style={{borderRadius: "30%"}} />
        </a>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
      <button onClick={prevSlide} style={{
        width: "200px",
        height: "50px",
        color: "black",
        border: "2px solid black",
        borderRadius: "20px"
      }}>Назад</button>
      <button onClick={nextSlide} style={{
        width: "200px",
        height: "50px",
        color: "black",
        border: "2px solid black",
        borderRadius: "20px"
      }}>Вперёд</button>
      </div>
    </div>
  );
}

export default Slider;