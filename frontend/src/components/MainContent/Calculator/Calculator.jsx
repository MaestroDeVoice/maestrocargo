import { useState } from "react";
import InputRange from "./InputRange/InputRange";
import SelectMovers from "./SelectMovers/SelectMovers";
import "./Calculator.css";

function Calculator() {
  const [formatCalc, setFormatCalc] = useState(true);
  const [calculateData, setCalculateData] = useState({
    workTime: 2,
    moversNum: 0,
    priceMovers: 900,
  });
  const handleClickCity = () => {
    setFormatCalc(!formatCalc);
    setCalculateData(
      formatCalc
        ? { distance: 100, priceOneKm: 100 }
        : {
            workTime: 2,
            moversNum: 0,
            priceMovers: 900,
          }
    );
  };

  const handleChangeWorkTime = (event) => {
    setCalculateData({
      ...calculateData,
      workTime: parseInt(event.target.value),
    });
  };

  const handleChangeMoversNum = (event) => {
    setCalculateData({
      ...calculateData,
      moversNum: parseInt(event.target.value),
    });
  };

  const handleChangeDistance = (event) => {
    setCalculateData({
      ...calculateData,
      distance: parseInt(event.target.value),
    });
  };

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
        <div className="calculator__body-sizes">
          {/* <p>Размер кузова автомобиля</p>
          <input type="radio" name="bodySize3" id="bodySize" value="3" />
          <label htmlFor="bodySize3">3 метра</label>
          <input type="radio" name="bodySize4" id="bodySize" value="4" />
          <label htmlFor="bodySize4">4 метра</label>
          <input type="radio" name="bodySize5" id="bodySize" value="5" />
          <label htmlFor="bodySize5">5 метров</label> */}
        </div>
        {formatCalc ? (
          <div className="calculator__format-city">
            <InputRange
              title="Время работы (в часах)"
              min="2"
              max="24"
              defaultValue="2"
              onChange={handleChangeWorkTime}
            />
            <SelectMovers onChange={handleChangeMoversNum} />
          </div>
        ) : (
          <InputRange
            title="Сколько километров?"
            min="100"
            max="1000"
            defaultValue="100"
            onChange={handleChangeDistance}
          />
        )}
        <div>
          <p>Предварительная стоимость:</p>
          <p>
            {formatCalc
              ? calculateData.workTime *
                calculateData.moversNum *
                calculateData.priceMovers
              : calculateData.distance * calculateData.priceOneKm}
          </p>
        </div>
        <div className="calculator__form-tel">
          <label htmlFor="formTel">
            Оставьте свой номер телефона. Мы свяжемся с вами в течение 5 минут.
          </label>
          <input type="tel" id="formTel" name="formTel" />
        </div>
        <button type="submit">Отправить заявку</button>
      </form>
    </>
  );
}

export default Calculator;
