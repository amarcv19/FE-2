const body = document.body;

const div = document.createElement('div');

const div1 = document.createElement('div');
const div2 = document.createElement('div');

div1.append(div2);

div.append(div1);

body.appendChild(div);


/*

// without using a single line in html file , create entire web page using js
// eg-> 

document.body
document.createElement()
body.append()
body.appendChild()

document.getElementById()
document.getElementByName()
document.getElementByClass()
document.getElementByTagName()


setAttribute()
getAttribute()

textContent 
innerText 
innerHTML 

*/