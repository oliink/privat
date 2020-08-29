// отобразить данные используя html и javascript

async function getResponse() {
    let response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3');
    let content = await response.text();  //.json()
    // console.log(content);
    document.body.innerHTML += `<pre>${content}</pre>`;
}

getResponse();




