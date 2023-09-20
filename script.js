document.addEventListener('DOMContentLoaded', function () {
  let string = '';
  let memory = 0;
  let inputField = document.querySelector('.input');
  let buttons = document.querySelectorAll('.button');
  
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.innerHTML === '=') {
        try {
          string = eval(string);
          inputField.value = string;
        } catch (error) {
          inputField.value = 'Error';
        }
      } else if (e.target.innerHTML === 'C') {
        string = '';
        inputField.value = string;
      } else if (e.target.innerHTML === 'M+') {
        memory += parseFloat(string) || 0;
        inputField.value = string;
      } else if (e.target.innerHTML === 'M-') {
        memory -= parseFloat(string) || 0;
        inputField.value = string;
      } else if (e.target.innerHTML === 'MR') {
        inputField.value = memory.toString(); // Display memory value
      } else {
        string = string + e.target.innerHTML;
        inputField.value = string;
      }
    });
  });
});
