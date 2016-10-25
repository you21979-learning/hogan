const Hogan = require("hogan.js")
const data = {
  screenName: "dhg",
};
 
const template = Hogan.compile("Follow @{{screenName}}.");
const output = template.render(data);

console.log(output)
