'use strict';

const createDOMbutton = () => {
  const button = document.createElement('button');
  const buttonText = document.createTextNode('1 botón');
  button.appendChild(buttonText);
  document.body.appendChild(button);
  return button;
};

const button = createDOMbutton();

const toCapitalizeLastChar = () => {
  const buttonText = button.firstChild.data;
  const lastChar = buttonText.charAt(buttonText.length - 1).toUpperCase();
  const newButtonText =
    buttonText.substring(0, buttonText.length - 1) + lastChar;
  button.firstChild.data = newButtonText;
};

const handleMouseOver = (ev) => {
  toCapitalizeLastChar();
};

const toLowerCaseLastChar = () => {
  const buttonText = button.firstChild.data;
  const lastChar = buttonText.charAt(buttonText.length - 1).toLowerCase();
  const newButtonText =
    buttonText.substring(0, buttonText.length - 1) + lastChar;
  button.firstChild.data = newButtonText;
};

const handleMouseOut = (ev) => {
  toLowerCaseLastChar();
};

button.addEventListener('mouseover', handleMouseOver);
button.addEventListener('mouseout', handleMouseOut);
