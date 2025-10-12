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
            //loop through name, collecting the numerical value of the sum of the person's character code
            //modulo the sum by the list of names
            //return the name at the index of the product
            let answer = ''
            let firstNumber = 0
            let lastNumber = 0
            const nameArray = params['generator'].split(' ')
            
            const firstName = nameArray[0]
            for (let i=0; i < firstName.length; i++){
                firstNumber += firstName.charCodeAt(i)
            }
            answer += wuFirstDictionary[firstNumber % wuFirstDictionary.length] + ' '

            const lastName = nameArray[1]
            for (let i=0; i < lastName.length; i++){
                lastNumber += lastName.charCodeAt(i)
            }
            answer += wuLastDictionary[lastNumber % wuLastDictionary.length]
             
            

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

})

server.listen(8000);