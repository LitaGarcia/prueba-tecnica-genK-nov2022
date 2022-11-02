const createDOMbutton = (str) => {
  const button = document.createElement('button');
  const buttonText = document.createTextNode(str);
  button.appendChild(buttonText);
  document.body.appendChild(button);
};

for (let i = 1; i <= 1000; i++) {
  createDOMbutton(i + ' botón');
}

const toCapitalizeLastChar = (button) => {
  const buttonText = button.firstChild.data;
  const lastChar = buttonText.charAt(buttonText.length - 1).toUpperCase();
  const newButtonText =
    buttonText.substring(0, buttonText.length - 1) + lastChar;
  button.firstChild.data = newButtonText;
};

const handleMouseOver = (ev) => {
  toCapitalizeLastChar(ev.currentTarget);
};

const toLowerCaseLastChar = (button) => {
  const buttonText = button.firstChild.data;
  const lastChar = buttonText.charAt(buttonText.length - 1).toLowerCase();
  const newButtonText =
    buttonText.substring(0, buttonText.length - 1) + lastChar;
  button.firstChild.data = newButtonText;
};

const handleMouseOut = (ev) => {
  toLowerCaseLastChar(ev.currentTarget);
};

let btns = document.querySelectorAll('button');
btns.forEach((b) => {
  b.addEventListener('mouseover', handleMouseOver);
  b.addEventListener('mouseout', handleMouseOut);
});
