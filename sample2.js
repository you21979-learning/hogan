const Hogan = require("hogan.js")
 
const template = Hogan.compile(`
{{#is_active}}
aaaaaaaaa
{{/is_active}}
{{^is_active}}
bbbbbbbbbb
{{/is_active}}
id:{{user.id}}
name:{{user.name}}
{{#users}}
id:{{id}}
name:{{name}}
{{/users}}
`);
const output = template.render({
    is_active:false,
    user:{
        id:-1,
        name:"xxx"
    },
    users:[{
        id:0,
        name:"hoge"
    },{
        id:1,
        name:"hage"
    }],
});

console.log(output)
