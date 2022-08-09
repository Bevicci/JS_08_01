const zodiac = [
  {
    name: "aries",
    start: "21/03",
    end: "19/04",
  },
  {
    name: "taurus",
    start: "20/04",
    end: "20/05",
  },
  {
    name: "gemini",
    start: "21/05",
    end: "20/06",
  },
  {
    name: "cancer",
    start: "21/06",
    end: "22/07",
  },
  {
    name: "leo",
    start: "23/07",
    end: "22/08",
  },
  {
    name: "virgo",
    start: "23/08",
    end: "22/09",
  },
  {
    name: "libra",
    start: "23/09",
    end: "22/10",
  },
  {
    name: "scorpio",
    start: "23/10",
    end: "21/11",
  },
  {
    name: "sagittarius",
    start: "22/11",
    end: "21/12",
  },
  {
    name: "capricorn",
    start: "22/12",
    end: "19/01",
  },
  {
    name: "aquarius",
    start: "20/01",
    end: "18/02",
  },
  {
    name: "pisces",
    start: "19/02",
    end: "20/03",
  },
];

function getZodiac() {
  let value = document.getElementById('myDate').value

  for (let i in zodiac) {

    let zodiacStartDay = zodiac[i].start.slice(0, 2)
    let zodiacStartMonth = zodiac[i].start.slice(3, 5)

    let zodiacEndDay = zodiac[i].end.slice(0, 2)
    let zodiacEndMonth = zodiac[i].end.slice(3, 5)

    let inputDate = new Date(value)
    let inputYear = inputDate.getFullYear()

    // YYYY-MM-DD
    let strZodiacFullStartDate = inputYear + '-' + zodiacStartMonth + '-' + zodiacStartDay
    let zodiacFullStartDate = new Date(strZodiacFullStartDate)
    let strZodiacFullEndDate = inputYear + '-' + zodiacEndMonth + '-' + zodiacEndDay
    let zodiacFullEndDate = new Date(strZodiacFullEndDate)

    if (inputDate >= zodiacFullStartDate && inputDate <= zodiacFullEndDate) {
      return document.getElementById('demo').innerHTML = zodiac[i].name
    }
  }
}

let arr = [];

function callPrompt() {
  arr.push(+prompt("Enter a number"))
  arr.sort(function (a, b) {
    return a - b;
  });
  document.getElementById('result').innerHTML = ''
  for (let i in arr) {
    document.getElementById('result').innerHTML += arr[i] + ','
  }
  document.getElementById('result').innerHTML = document.getElementById('result').innerHTML.slice(0, -1)
}

let num = []
function btn() {
  let x = document.getElementById('myNum').value
  num.push(x)
  console.log(num)
  document.getElementById('array').innerHTML = num
  document.getElementById('myNum').value = ''
  negative();
}
function negative() {
  document.getElementById('negative').innerHTML = ''
  for (let i in num) {
    if (num[i] < 0) {
      document.getElementById('negative').innerHTML += num[i]
    }
  }
}