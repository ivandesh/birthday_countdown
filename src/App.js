import './App.css';
import { useGlitch } from 'react-powerglitch';
import Countdown from 'react-countdown';
import Marquee from "react-fast-marquee";
import monitorUrl from './monitor.png';

const renderer = ({ days, hours, minutes, completed, glitch }) => {
  const {
    daysText,
    hoursText,
    minutesText
  } = getTimeText(days, hours, minutes)
  if (completed) {
    return 'Шо ти тут забув?';
  } else {
    return <span className='timer-text' ref={glitch.ref}>{days}{daysText} {hours}{hoursText} {minutes}{minutesText}</span>;
  }
};

function shuffle(str) {
  let result = '';
  const characters = 'ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЮБЬТИМСЧЯйцукенгшщзхїєждлорпавіфячсмитьбю0987654321';
  const charactersLength = characters.length;
  let counter = 0;
  const strArr = str.split('');
  console.log(strArr);
  while (counter < str.length) {
    if (strArr[counter] === ' ') {
      result += ' ';
    } else {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    counter += 1;
  }
  return <span className='redacted'>{result}</span>;
}

const getTimeText = (days, hours, minutes) => {
  const ordinary = [1, 21, 31, 41, 51];
  const plural = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];
  const daysText = ordinary.includes(days) ? 'день' : plural.includes(days) ? 'дні' : 'днів'
  const hoursText = ordinary.includes(hours) ? 'година' : plural.includes(hours) ? 'години' : 'годин';
  const minutesText = ordinary.includes(minutes) ? 'хвилина' : plural.includes(minutes) ? 'хвилини' : 'хвилин'

  return {
    daysText,
    hoursText,
    minutesText
  }
}

function App() {
  const glitch = useGlitch();
  const glitchHeading1 = useGlitch({
    timing: {
      duration: 1300
    }
  });
  const glitchHeading2 = useGlitch({
    timing: {
      duration: 2300
    }
  });
  const glitchHeading3 = useGlitch({
    timing: {
      duration: 1900
    }
  });
  const glitchHeading4 = useGlitch({
    timing: {
      duration: 1100
    }
  });
  const glitchHeading5 = useGlitch({
    timing: {
      duration: 1700
    }
  });
  const glitchHeading6 = useGlitch({
    timing: {
      duration: 2200
    }
  });
  const glitchHeading7 = useGlitch({
    timing: {
      duration: 1500
    }
  });
  const glitchHeading8 = useGlitch({
    timing: {
      duration: 1100
    }
  });
  return (
    <div className="App">
      <Marquee delay={2} speed={75}><Countdown
        date={new Date('2024-11-30T18:00:00+02:00')}
        renderer={({ days, hours, minutes, completed }) => renderer({ days, hours, minutes, completed, glitch })}
      /></Marquee>
      <img className='monitor' width={376} src={monitorUrl} alt='monitor' />
      <h2 className='main-title'>Святкова програма</h2>
      <div className='text-block'>
        <h3 ref={glitchHeading1.ref}>{shuffle('Айс')}бр{shuffle('ейкер')}</h3>
        <p>{shuffle('Коротка гра для пришвидшення знайомства гостей')} між собою {shuffle(', з метою задати веселий')} настрій
          {shuffle('для подальших інтерактивів. Робочою ідеєю айсбрейкеру є')}
          турнір {shuffle('з чувачів, але для нього треба')} 1{shuffle('6 гравців.')}</p>
      </div>
      <div className='text-block'>
        <h3 ref={glitchHeading2.ref}>{shuffle('Уга')}дай{shuffle(' скіки')}</h3>
        <p>{shuffle('Гравцям задаватимуть')} питання{shuffle(', відповіддю на яке є число, хто буде найближчим до правильної відповіді отримає')} 1 бал
          {shuffle(', а якщо гравці вказують точну відповідь, то отримують за неї 2 бали. Всі питання будуть стосуватись Алісиного')} життя
          {shuffle('. Також в учасників будуть шанси отримати підказки')} в обмін на
          {shuffle('гарний жарт, але цю підказку отримають')} всі {shuffle('гравці.')}</p>
      </div>
      <div className='text-block'>
        <h3 ref={glitchHeading3.ref}>Зіпсован{shuffle('ий телефон')}</h3>
        <p>Один {shuffle('раунд зіпсованого телефону з малюнками або анімації, на сайті garticphone.com. Щоб підтримувати загальну святкову атмосферу,')} гостям будуть запропоновані
          {shuffle('коротенькі ідеї для малюнків в тематиці дня народження.')}</p>
      </div>
      <div className='text-block'>
        <h3 ref={glitchHeading4.ref}>{shuffle('Г')}ео{shuffle('г')}е{shuffle('сс')}е{shuffle('р Енергодар')}</h3>
        <p>{shuffle('Геогра')}фічна гра {shuffle(', яка відправить вас на')} мандри
          {shuffle('Енергодаром, малої')} Батьківщини
          {shuffle('іменинниці. Розуміючи, що в гравців немає досвіду в орієнтування околицями Енергодару, весь раунд побудований як розповідь')} знайомство з
          {shuffle('містом з елементами інтерактива.')} Найуважніші
          {shuffle('на слух і око гравці зможуть безпомилково пройти')} цей етап.</p>
      </div>
      <div className='text-block'>
        <h3 ref={glitchHeading5.ref}>{shuffle('Карти')} проти {shuffle('Аліси')}</h3>
        <p>{shuffle('Адаптація відомої гри «карти ')}конфлікт
          {shuffle('у» на святковий лад. Вас очікує')} унікальна святкова
          {shuffle('колода з особливими 400+ білими картами відповідей та 27 чорними картами запитань.')}</p>
      </div>
      <div className='text-block'>
        <h3 ref={glitchHeading6.ref}>{shuffle('Аліса')} квіз</h3>
        <p>{shuffle('Онлайн адаптація класичного паб квізу, виконаний')} за допомогою
          {shuffle('сервісу кахут. Особливості кахуту дозволять гравцям відразу дізнатись правильну відповідь, а не очікувати')} завершення раунду
          {shuffle(', всі ж інші правила, як-от, розгорнуті відповіді, залишаються')} на місці.
          {shuffle(' Всього буде 1')} раунд
          {shuffle(', який ')}
          складатиметься з
          {shuffle('12 ')}
          питань
          {shuffle(', які знову повʼязані з життям Аліси. Так само, як і раніше, буде можливість')} обміняти свої
          {shuffle('жарти на підказки у ведучої. А особливо смішні відповіді')} використаються організаторкою пізніше.</p>
      </div>
      <div className='text-block'>
        <h3 ref={glitchHeading7.ref}>С{shuffle('п')}іль{shuffle('на листівка')}</h3>
        <p>{shuffle('За допомогою сервісів так званих')} онлайн
          {shuffle('білих дошок, гостям пропонується')} доповнити
          {shuffle('листівку памʼятку своїми фотографіями, записами,')} малюнками.</p>
      </div>
      <div className='text-block'>
        <h3 ref={glitchHeading8.ref}>Фінал{shuffle('ьна промова')}</h3>
        <p>{shuffle('Нагородження трьох переможців святкової ігротеки сертифікатами в розетку. Також час для прощального слова у вигляді жартівливої розповіді, яку допомогли')} створити самі ж учасники, самі того не знаючи
          {shuffle('. Офіційна частина свята на цьому')} завершена.</p>
      </div>
    </div>
  );
}

export default App;
