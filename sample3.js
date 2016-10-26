const Hogan = require("hogan.js")
const fs = require('fs')
 
const template = Hogan.compile(fs.readFileSync("./tmpl/api_request.js.tmpl", "utf8"));

const spec = {
    global : {
    },
    defs : [
    {
        name:"getTicker",
        method:"ticker.do",
        params:[
            {
                name:"pair",
                type:"string",
            }
        ],
    },
    {
        name:"getDepth",
        method:"depth.do",
        params:[
            {
                name:"pair",
                type:"string",
            },
            {
                name:"max",
                type:"int8",
            }
        ],
    }
    ],
}

const output = template.render(spec);

console.log(output)
