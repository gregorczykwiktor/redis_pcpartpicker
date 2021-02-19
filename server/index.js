const gpu = require(__dirname + '/data/grafika.json');
const computerCase = require(__dirname + '/data/obudowa.json');
const mobo = require(__dirname + '/data/plyta.json');
const cpu = require(__dirname + '/data/procesor.json');
const ram = require(__dirname + '/data/ram.json');
const ssd = require(__dirname + '/data/ssd.json');
const fan = require(__dirname + '/data/wentylator.json');
const psu = require(__dirname + '/data/zasilacz.json');

const redis = require("redis");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const express = require("express");
const axios = require("axios");
const port = 5000;
const cors = require("cors");
const redisClient = redis.createClient();
const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

redisClient.on("connect", function () {
  console.log("Connection to database succeed.");
});

var gpuKey = 0;

gpu.forEach(() => {

  let uniqueKey = 'GPU' + gpuKey;

  redisClient.hmset(uniqueKey, [
    'Nazwa', gpu[gpuKey].Nazwa,
    'Uklad', (gpu[gpuKey].Uklad ? gpu[gpuKey].Uklad : ""),
    'Pamiec', (gpu[gpuKey].Pamiec ? gpu[gpuKey].Pamiec : ""),
    'Rodzaj', (gpu[gpuKey].Rodzaj ? gpu[gpuKey].Rodzaj : ""),
    'Zlacza', (gpu[gpuKey].Zlacza ? gpu[gpuKey].Zlacza : ""),
    'Cena', gpu[gpuKey].Cena
  ]
    , (err, ress) => {
      if (err) {
        console.error(err);
      } else {
        //console.log(ress);
      }
    });

  gpuKey++;

});

var caseKey = 0;

computerCase.forEach(() => {

  let uniqueKey = 'CASE' + caseKey;

  redisClient.hmset(uniqueKey, [
    'Nazwa', computerCase[caseKey].Nazwa,
    'Typ', (computerCase[caseKey].Typ ? computerCase[caseKey].Typ : ""),
    'Standard', (computerCase[caseKey].Standard ? computerCase[caseKey].Standard : ""),
    'Rozszerzenia', (computerCase[caseKey].Rozszerzenia ? computerCase[caseKey].Rozszerzenia : ""),
    'MaxDlugosc', (computerCase[caseKey].maxDlugosc ? computerCase[caseKey].maxDlugosc : ""),
    'Cena', computerCase[caseKey].Cena
  ]
    , (err, ress) => {
      if (err) {
        console.error(err);
      } else {
        //console.log(ress);
      }
    });
  
  caseKey++;

});

var moboKey = 0;

mobo.forEach(() => {

  let uniqueKey = 'Mobo' + moboKey;

  redisClient.hmset(uniqueKey, [
    'Nazwa', mobo[moboKey].Nazwa,
    'ObslugiwaneProc', (mobo[moboKey].obslugiwaneProc ? mobo[moboKey].obslugiwaneProc : ""),
    'Format', (mobo[moboKey].Format ? mobo[moboKey].Format : ""),
    'Gniazdo', (mobo[moboKey].Gniazdo ? mobo[moboKey].Gniazdo : ""),
    'Chipset', (mobo[moboKey].Chipset ? mobo[moboKey].Chipset : ""),
    'Cena', mobo[moboKey].Cena
  ]
    , (err, ress) => {
      if (err) {
        console.error(err);
      } else {
        //console.log(ress);
      }
    });
  
  moboKey++;

});

var cpuKey = 0;

cpu.forEach(() => {

  let uniqueKey = 'CPU' + cpuKey;

  redisClient.hmset(uniqueKey, [
    'Nazwa', cpu[cpuKey].Nazwa,
    'Seria', (cpu[cpuKey].Seria ? cpu[cpuKey].Seria : ""),
    'Taktowanie', (cpu[cpuKey].Taktowanie ? cpu[cpuKey].Taktowanie : ""),
    'Rdzenie', (cpu[cpuKey].Rdzenie ? cpu[cpuKey].Rdzenie : ""),
    'Cache', (cpu[cpuKey].Cache ? cpu[cpuKey].Cache : ""),
    'Cena', cpu[cpuKey].Cena
  ]
    , (err, ress) => {
      if (err) {
        console.error(err);
      } else {
        //console.log(ress);
      }
    });
  
  cpuKey++;

});

var ramKey = 0;

ram.forEach(() => {

  let uniqueKey = 'RAM' + ramKey;

  redisClient.hmset(uniqueKey, [
    'Nazwa', ram[ramKey].Nazwa,
    'Pojemnosc', (ram[ramKey].Pojemnosc ? ram[ramKey].Pojemnosc : ""),
    'Rodzaj', (ram[ramKey].Rodzaj ? ram[ramKey].Rodzaj : ""),
    'Taktowanie', (ram[ramKey].Taktowanie ? ram[ramKey].Taktowanie : ""),
    'Opoznienie', (ram[ramKey].Opoznienie ? ram[ramKey].Opoznienie : ""),
    'Cena', ram[ramKey].Cena
  ]
    , (err, ress) => {
      if (err) {
        console.error(err);
      } else {
        //console.log(ress);
      }
    });
  
  ramKey++;

});

var ssdKey = 0;

ssd.forEach(() => {

  let uniqueKey = 'SSD' + ssdKey;

  redisClient.hmset(uniqueKey, [
    'Nazwa', ssd[ssdKey].Nazwa,
    'Pojemnosc', (ssd[ssdKey].Pojemnosc ? ssd[ssdKey].Pojemnosc : ""),
    'Interfejs', (ssd[ssdKey].Interfejs ? ssd[ssdKey].Interfejs : ""),
    'Odczyt', (ssd[ssdKey].Odczyt ? ssd[ssdKey].Odczyt : ""),
    'Zapis', (ssd[ssdKey].Zapis ? ssd[ssdKey].Zapis : ""),
    'Cena', ssd[ssdKey].Cena
  ]
    , (err, ress) => {
      if (err) {
        console.error(err);
      } else {
        //console.log(ress);
      }
    });

  ssdKey++;

});

var psuKey = 0;

psu.forEach(() => {

  let uniqueKey = 'PSU' + psuKey;

  redisClient.hmset(uniqueKey, [
    'Nazwa', psu[psuKey].Nazwa,
    'Moc', (psu[psuKey].Moc ? psu[psuKey].Moc : ""),
    'Standard', (psu[psuKey].Standard ? psu[psuKey].Standard : ""),
    'Sprawnosc', (psu[psuKey].Sprawnosc ? psu[psuKey].Sprawnosc : ""),
    'Certyfikat', (psu[psuKey].Certyfikat ? psu[psuKey].Certyfikat : ""),
    'Cena', psu[psuKey].Cena
  ]
    , (err, ress) => {
      if (err) {
        console.error(err);
      } else {
        //console.log(ress);
      }
    });
  
  psuKey++;

});

var fanKey = 0;

fan.forEach(() => {

  let uniqueKey = 'FAN' + fanKey;

  redisClient.hmset(uniqueKey, [
    'Nazwa', fan[fanKey].Nazwa,
    'Rozmiar', (fan[fanKey].Rozmiar ? fan[fanKey].Rozmiar : ""),
    'Obroty', (fan[fanKey].Obroty ? fan[fanKey].Obroty : ""),
    'Glosnosc', (fan[fanKey].Glosnosc ? fan[fanKey].Glosnosc : ""),
    'Lozysko', (fan[fanKey].Lozysko ? fan[fanKey].Lozysko : ""),
    'Dodatki', (fan[fanKey].Dodatki ? fan[fanKey].Dodatki : ""),
    'Przeplyw', (fan[fanKey].Przeplyw ? fan[fanKey].Przeplyw : ""),
    'Cena', fan[fanKey].Cena
  ]
    , (err, ress) => {
      if (err) {
        console.error(err);
      } else {
        //console.log(ress);
      }
    });
  
  fanKey++;

});

function getItem(req, res, next) {
  const { name } = req.params; 

  redisClient.hgetall(name, (err, data) => {
    if (err) throw err; 
    if (data !== null) {
      res.status(200).json(data);
    } else {
      next();
    }
  })
}

app.get('/api/:name', getItem);

app.get('/api/basket/:client', (req,res)=>{
  try{
    redisClient.lrange(req.params.client, 0, -1, (error, response)=>{
      return res.status(201).json({status : "SUCCESS", basketList : response});
    })
  }catch(error){
    return res.status(400).json({status: "ERROR", error});
  }
})
app.post('/api/basket', (req, res) => {
  try{
    redisClient.rpush(req.body.client, JSON.stringify(req.body.element));
    redisClient.lrange(req.body.client, 0, -1, (error, response)=>{
      return res.status(201).json({status : "SUCCESS", basketList : response});
    })
  }catch(error){
    return res.status(400).json({status: "ERROR", error});
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

