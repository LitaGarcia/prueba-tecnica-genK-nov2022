const createDOMbutton = (str) => {
  const button = document.createElement('button');
  const buttonText = document.createTextNode(str);
  button.appendChild(buttonText);
  document.body.appendChild(button);
};

for (let i = 1; i <= 1000; i++) {
  createDOMbutton(i + ' botón');
}
