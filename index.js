const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

const wuFirstDictionary = [
    "vizual",
    "smilin'",
    "wilin'",
    "childish",
    "auditory",
    "tap-dancin'",
    "coolest",
    "foolish",
    "elite",
    "tiger",
    "formidable",
    "the Superior",
    "the Transcendant",
    "the Crimson",
    "incredible",
    "the Magical",
    "block",
    "gifted",
    "monkey",
    "furious",
    "phantom",
    "raw",
    "bold",
    "the Immaculate",
    "notorious",
    "invincible",
    "blessed",
    "thunderous",
    "jade"
]

const wuLastDictionary = [
    "assassin",
    "killa",
    "knight",
    "nomad",
    "savior",
    "fighter",
    "slaya'",
    "commando",
    "entitiy",
    "form",
    "samurai",
    "commander",
    "guardian",
    "destroyer",
    "captain",
    "soul",
    "conqueror",
    "warrior",
    "hustler",
    "shogun",
    "dynasty",
    "professional",
    "emperor",
    "oracle",
    "soldier",
    "guru",
    "player",
    "colonel",
    "gambino",
    "authority"
]

const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        });
    }
    else if(page == '/namemaker'){
        
        if(params['generator']) {

            let answer = ''     //collects the final answer
            
            
            const nameArray = params['generator'].split(' w ')    //split the first and 
            console.log(nameArray)
            const firstNumber = nameArray[0]
            
            
            
            const lastNumber = nameArray[1]
            
            answer += wuFirstDictionary[firstNumber%wuFirstDictionary.length] + ' ' + wuLastDictionary[lastNumber%wuLastDictionary.length]  
            console.log(answer)
            res.writeHead(200, {'Content-Type': 'text/text'});
            res.end(answer)  
        }
        
        
    }
    else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
    }
    else if (page == '/css/style.css'){
        fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
        });
    }

})

server.listen(8000);