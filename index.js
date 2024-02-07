let fs = require('fs');
let path = require('path');
const fileName = path.join(__dirname,'./data/data.txt')

function writeToAFile(content){
    try{
        fs.writeFile(fileName, content, err=>{
            if(!err) console.log('Saved!')
        })
    }catch(e) {
        console.log('Issue when writing to a file');
    }
}

const sum = 30 + 20;
writeToAFile(`The sum of 30 and 20 is ${sum}`);

//http server
const http = require('http');

const port = +process.env.PORT || 3000

//create the web server
http.createServer((req, res) => {
    res.writeHead(200, {
        'Context-type' : 'text/plain'
    })
    res.end(`The sum of 30 and 20 is ${sum}`)

}).listen(port, ()=>{
    console.log(`Server is running on: http://localhost:${port}`);
})

