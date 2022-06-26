/**
 * Append a new child element to the parent Node element passed as argument
 * - Child element should be of specified tag type
 * - Child element should contain the specified text as its content
 * @param {Node} parentId
 * @param {String} childTagType
 * @param {String} text
 */
function addNewChildElementToParent(parentId, childTagType, text) {

  // get the parent element using parent Id

  const parentElement = document.getElementById(parentId);

  // create the child Tag type element
  const childTag = document.createElement(childTagType);
  
  // assign the text to the content of childTag
  childTag.innerText = text;


  // append the childTag to the parent Element

  parentElement.append(childTag);



}

addNewChildElementToParent("numbers-list", "li", "3"); // Appends 3 as a list item
// addNewChildElementToParent("text-paras", "p", "Hey there");

addNewChildElementToParent("text-paras","p","Hello amar chandra");// append amar chandra as a list item
// a new child element to parent 
