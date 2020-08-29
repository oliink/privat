/* с помощью Node, отобразить данные у себя в 
консоли или же вывести в ответ на запрос сервера */

const request = require('request');
const http = require('http');
const fs   = require('fs');
const port = 3000;        

let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

request(url, (err, res, data) => {
    let obj = JSON.parse(data);
    console.log(obj);

    http.createServer((req,res) => {
    res.write(data);
    res.end();
    }).listen(port, () => {
        console.log('Server at http://locallhost:3000');
    })
})
