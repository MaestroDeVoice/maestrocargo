import "./MainHeader.css";

function MainHeader() {
  return (
    <div className="main-header">
      <a href="#">
        <img
          className="main-header__logo"
          width="130px"
          src="https://static.tildacdn.com/tild3739-6231-4165-b130-373333663638/noroot.png"
          alt="logo"
        />
      </a>
      <ul className="main-header__menu">
        <li className="main-header__menu-item">
          <a href="#">Услуги</a>
        </li>
        <li className="main-header__menu-item">
          <a href="#">Преимущества</a>
        </li>
        <li className="main-header__menu-item">
          <a href="#">Калькулятор</a>
        </li>
        <li className="main-header__menu-item">
          <a href="#">Контакты</a>
        </li>
      </ul>
      <div className="main-header__time">
        <span>24/7</span>
      </div>
      <div className="main-header__contacts">
        <button className="main-header__phone">
          <a href="#" type="tel">
            +7 989 529 97 97
          </a>
        </button>
        <button className="main-header__button">
          <a href="#">Рассчитать цену</a>
        </button>
      </div>
    </div>
  );
}

export default MainHeader;
