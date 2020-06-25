const express = require('express');
const config = require('config');
const request = require('request-promise');
const PORT = config.get('port') || 5000;

const app = express();
const url = 'https://api.vk.com/method/wall.get?owner_id=-23881761&count=3&access_token=28b6918028b6918028b691807328d1bc9a228b628b6918074b4350e3b30491336746bda&v=5.110';
const serverOne = 'http://185.71.66.93:4490/info/';
const serverTwo = 'http://185.71.66.93:4491/info/';

app.listen(PORT, () => {
    console.log('success');
});

app.get('/vk', async (req, res) => {
    const options = {
        method: 'GET',
        uri: url
    }
    request(options).then((resp) => {
        res.send(resp);
    }).catch(() => {
        res.send('cant get vk info');
    });
});

app.get('/serverOne', async (req, res) => {
    const options = {
        method: 'GET',
        uri: serverOne
    }
    request(options).then((resp) => {
        res.send(resp);
    }).catch(() => {
        res.send('cant get server info');
    });
});

app.get('/serverTwo', async (req, res) => {
    const options = {
        method: 'GET',
        uri: serverTwo
    }

    request(options).then((resp) => {
        res.send(resp);
    }).catch(() => {
        res.send('cant get server info');
    });
});