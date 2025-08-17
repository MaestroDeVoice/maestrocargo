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
      <div>
        <a href="#">Услуги</a>
        <a href="#">Преимущества</a>
        <a href="#">Калькулятор</a>
        <a href="#">Контакты</a>
      </div>
    </div>
  );
}

export default MainHeader;
