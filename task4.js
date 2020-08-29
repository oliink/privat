// отобразить данные используя html и javascript

// c помощью XMLHttpRequest()

let xhr = new XMLHttpRequest();
let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

xhr.open('GET', url); 
xhr.send();

xhr.onload = function() {
        document.body.innerHTML = `<pre>${xhr.response}</pre>`;  
  };

// с помощью fetch()

// async function getResponse() {
//     let response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3');
//     let content = await response.text();  //.json()
//     // console.log(content);
//     document.body.innerHTML = `<pre>${content}</pre>`;  //=
// }

// getResponse();
