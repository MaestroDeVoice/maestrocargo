import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      <div className="main-content__container">
        <div className="main-content__wrapper">
          <h1 className="main-content__title">
            <span>Грузоперевозки и переезды</span> с грузчиками по Ростову на
            Дону и Ростовской области
          </h1>
          <h2>Быстро и недорого</h2>
          <p>
            Нужна помощь в переезде? Грузчики и газель? Позвоните нам,
            гарантируем лучшую цену!
          </p>
          <div className="main-content__buttons">
            <button className="main-content__button whatsapp">
              Написать в WhatsApp 24/7
            </button>
            <button className="main-content__button calculator">
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
