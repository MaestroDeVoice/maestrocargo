import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [formatCalc, setFormatCalc] = useState(false);

  function handleClickCity() {
    setFormatCalc(!formatCalc);
  }

  return (
    <>
      <div className="calculator__buttons">
        <button type="button" onClick={!formatCalc ? handleClickCity : null}>
          Перевозки по городу
        </button>
        <button type="button" onClick={formatCalc ? handleClickCity : null}>
          Межгород от 100 км
        </button>
      </div>
      <form className="calculator__form">
        <lable>Размер кузова автомобиля</lable>
        <div className="calculator__body-sizes">
          <figure className="body-size three-meters">
            <img
              src="https://static.tildacdn.com/tild6434-3064-4532-a365-616630343566/3.svg"
              alt="3 метра"
              width="160px"
            />
            <figcaption>3 метра</figcaption>
          </figure>
          <figure className="body-size four-meters">
            <img
              src="https://static.tildacdn.com/tild3661-3663-4135-a335-353138393930/4.svg"
              alt="4 метра"
              width="160px"
            />
            <figcaption>4 метра</figcaption>
          </figure>
          <figure className="body-size five-meters">
            <img
              src="https://static.tildacdn.com/tild3239-3033-4132-a636-386262366363/5.svg"
              alt="5 метров"
              width="160px"
            />
            <figcaption>5 метров</figcaption>
          </figure>
        </div>
        {formatCalc ? (
          <div>
            <div>
              <label htmlFor="myRange">Время работы (в часах)</label>
              <input type="range" min="2" max="24" id="myRange" />
            </div>
            <div>
              <select>
                <option value="0" selected>
                  Грузчик не нужен
                </option>
                <option value="1">1 грузчик</option>
                <option value="2">2 грузчика</option>
                <option value="3">3 грузчика</option>
                <option value="4">4 грузчика</option>
                <option value="5">5 грузчиков</option>
                <option value="6">6 грузчиков</option>
                <option value="7">7 грузчиков</option>
                <option value="8">8 грузчиков</option>
                <option value="9">9 грузчиков</option>
                <option value="10">10 грузчиков</option>
              </select>
            </div>
          </div>
        ) : (
          <div>
            <label htmlFor="myRange">Сколько километров?</label>
            <input type="range" min="100" max="1000" id="myRange" />
          </div>
        )}
        <div>
          <lable>Предварительная стоимость:</lable>
          <p>3400</p>
        </div>
        <div>
          <lable htmlFor="telForm">
            Оставьте свой номер телефона. Мы свяжемся с вами в течение 5 минут.
          </lable>
          <input type="tel" id="telForm" />
        </div>
        <button type="submit">Отправить заявку</button>
      </form>
    </>
  );
}

export default Calculator;
