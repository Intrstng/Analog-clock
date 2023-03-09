

const svgNS = "http://www.w3.org/2000/svg";

function createSvg() {
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttributeNS(null, 'width', 500);
  svg.setAttributeNS(null, 'height', 500);
  svg.setAttributeNS(null, 'id', 'clock');
  document.body.append(svg);
}
window.onload = createSvg();

document.getElementById('clock').addEventListener('click', function(e) {
  console.log(e.clientX, e.clientY);
})


function drawSvgElements() {
  //Draw clock face
  function drawClockFace() {
    const svg = document.getElementById('clock');
    const w = svg.getAttributeNS(null, 'width');
    const h = svg.getAttributeNS(null, 'height');
  
    const clockFace = document.createElementNS(svgNS, 'circle');
    clockFace.setAttributeNS(null, 'cx', w / 2);
    clockFace.setAttributeNS(null, 'cy', h / 2);
    clockFace.setAttributeNS(null, 'r', w > h ? h / 2 : w / 2);
    clockFace.setAttributeNS(null, 'fill', 'rgb(5, 236, 159)');
    svg.append(clockFace);
  }
  drawClockFace()


  function createClockFace() {
    let degrees = 150;
    const svg = document.getElementById('clock');
    const w = svg.getAttributeNS(null, 'width');
    const h = svg.getAttributeNS(null, 'height');
    const arrowsCenterX = svg.getBoundingClientRect().width / 2;
    const arrowsCenterY = svg.getBoundingClientRect().height / 2;
    const radius = svg.getBoundingClientRect().width > svg.getBoundingClientRect().height
                  ? (svg.getBoundingClientRect().height / 2)
                  : (svg.getBoundingClientRect().width / 2);
  
    for (let i = 1; i <= 12; i++) {
      const angleRadiansClockFace = parseFloat(degrees) / 180 * Math.PI;
      degrees -= 30;
      const centerDigitOfClockFaceX = arrowsCenterX + radius * 0.8 * Math.sin(angleRadiansClockFace);
      const centerDigitOfClockFaceY = arrowsCenterY + radius * 0.8 * Math.cos(angleRadiansClockFace);
      
      //Draw clock face digit circle
      const clockFaceDigit = document.createElementNS(svgNS, 'circle');
      clockFaceDigit.setAttributeNS(null, 'r', w > h ? (h / 2) * 0.075 : (w / 2) * 0.075);
    
      clockFaceDigit.setAttributeNS(null, 'cx', Math.round(centerDigitOfClockFaceX));
      clockFaceDigit.setAttributeNS(null, 'cy', Math.round(centerDigitOfClockFaceY));
      clockFaceDigit.setAttributeNS(null, 'fill', 'rgb(228, 236, 5)');
      svg.append(clockFaceDigit);
      const clockFaceDigitRadius = clockFaceDigit.getAttributeNS(null, 'r');
      const clockFaceDigitCenterX = clockFaceDigit.getAttributeNS(null, 'cx');
      const clockFaceDigitCenterY = clockFaceDigit.getAttributeNS(null, 'cy');
      
      //Draw a digit inside of clock face digit circle
      const clockFaceDigitText = document.createElementNS(svgNS, 'text');
      svg.append(clockFaceDigitText);
      clockFaceDigitText.setAttributeNS(null, 'x', clockFaceDigitCenterX);
      clockFaceDigitText.setAttributeNS(null, 'y', parseInt(clockFaceDigitCenterY) + clockFaceDigitText.getBoundingClientRect().top / 2);
      clockFaceDigitText.setAttributeNS(null, 'fill', 'blue');
      clockFaceDigitText.setAttributeNS(null, 'text-anchor', 'middle');
      clockFaceDigitText.setAttributeNS(null, 'font-size', clockFaceDigitRadius);
      clockFaceDigitText.textContent = i;
    }
  }
  createClockFace();

  function drawDigitalClock() {

  }



  function drawClockArrows() {
    const svg = document.getElementById('clock');
    const arrowsCenterX = svg.getBoundingClientRect().width / 2;
    const arrowsCenterY = svg.getBoundingClientRect().height / 2;
    const radius = svg.getBoundingClientRect().width > svg.getBoundingClientRect().height
                ? (svg.getBoundingClientRect().height / 2)
                : (svg.getBoundingClientRect().width / 2);
    const hourArrow = document.createElementNS(svgNS, 'rect');
    hourArrow.setAttributeNS(null, 'x', arrowsCenterX);
    hourArrow.setAttributeNS(null, 'y', arrowsCenterY);
    hourArrow.setAttributeNS(null, 'width', 3);
    hourArrow.setAttributeNS(null, 'height', radius * 0.55);
    hourArrow.setAttributeNS(null, 'rx', '2');
    hourArrow.setAttributeNS(null, 'ry', '2');
    hourArrow.setAttributeNS(null, 'fill', 'black');
    hourArrow.setAttributeNS(null, 'id', 'hour-arrow');
    svg.append(hourArrow);
      const minArrow = document.createElementNS(svgNS, 'rect');
      minArrow.setAttributeNS(null, 'x', arrowsCenterX);
      minArrow.setAttributeNS(null, 'y', arrowsCenterY);
      minArrow.setAttributeNS(null, 'width', 2);
      minArrow.setAttributeNS(null, 'height', radius * 0.75);
      minArrow.setAttributeNS(null, 'rx', '2');
      minArrow.setAttributeNS(null, 'ry', '2');
      minArrow.setAttributeNS(null, 'fill', 'black');
      minArrow.setAttributeNS(null, 'id', 'min-arrow');
      svg.append(minArrow);
        const secArrow = document.createElementNS(svgNS, 'rect');
        secArrow.setAttributeNS(null, 'x', arrowsCenterX);
        secArrow.setAttributeNS(null, 'y', arrowsCenterY);
        secArrow.setAttributeNS(null, 'width', 1);
        secArrow.setAttributeNS(null, 'height', radius * 0.85);
        secArrow.setAttributeNS(null, 'rx', '1');
        secArrow.setAttributeNS(null, 'ry', '1');
        secArrow.setAttributeNS(null, 'fill', 'red');
        secArrow.setAttributeNS(null, 'id', 'sec-arrow');
        svg.append(secArrow);
  }
  drawClockArrows();
}
drawSvgElements()

function showAnalogTime() {
  const svg = document.getElementById('clock');
  const arrowsCenterX = svg.getBoundingClientRect().width / 2;
  const arrowsCenterY = svg.getBoundingClientRect().height / 2;
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const secDegree = sec * 6;
  let minDegree = min * 6;
  let hourDegree = hour * 30 + minDegree / 12;
  secDegree === 360 && (secDegree = 0);
  minDegree === 360 && (minDegree = 0);
        
  document.getElementById('sec-arrow').setAttributeNS(null, 'transform', `rotate(${secDegree - 180}, ${arrowsCenterX}, ${arrowsCenterY})`);
  document.getElementById('min-arrow').setAttributeNS(null, 'transform', `rotate(${minDegree - 180}, ${arrowsCenterX}, ${arrowsCenterY})`);
  document.getElementById('hour-arrow').setAttributeNS(null, 'transform', `rotate(${hourDegree - 180}, ${arrowsCenterX}, ${arrowsCenterY})`);
  setTimeout(() => {
    showAnalogTime();
  }, 1000);
  
}
showAnalogTime()


// function showTimeDigitalClock() {
//   const date = new Date();
//   const hour = date.getHours();
//   const min = date.getMinutes();
//   const sec = date.getSeconds();
//   const time = document.querySelector('.digital-clock');
//   time.textContent = String(hour).padStart(2, 0) + ':' + String(min).padStart(2, 0) + ':' + String(sec).padStart(2, 0);
//   setTimeout(() => {
//     showTimeDigitalClock();
//   }, 1000);
// }
// showTimeDigitalClock();