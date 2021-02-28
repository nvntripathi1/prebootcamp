/*Write a code get an integer number as input and print the odd and even digits of the number separately.

Input Description:
A single line containing an integer.

Output Description:
Print the even and odd integers of the integer in a separate line.*/


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput=[];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close" , ()=>{
var a=userInput[0];
var b=a.split("");
var line1="";
var line2="";
for (var i=0;i<b.length;i++)
{
    if (+b[i]%2===0)
    {
        line1=line1+b[i]+" ";
    }
    if (+b[i]%2!==0)
    {
        line2=line2+b[i]+" ";
    }
}
line1=line1.trim(); line2=line2.trim();
line1=line1.split(" "); line2=line2.split(" ");
for (i=0;i<line1.length;i++)
line1[i]=+line1[i];
for (i=0;i<line2.length;i++)
line2[i]=+line2[i];
line1=line1.sort(); line2=line2.sort();
for (i=0;i<line1.length;i++)
line1=line1.toString();
for (i=0;i<line2.length;i++)
line2=line2.toString();
for (i=0;i<line1.length;i++)
line1=line1.replace(','," ");
for (i=0;i<line2.length;i++)
line2=line2.replace(','," ");
console.log(line1); console.log(line2);
});