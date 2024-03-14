document.addEventListener('DOMContentLoaded', function() {
    const lengthInput = document.getElementById('length');
    const uppercaseInput = document.getElementById('uppercase');
    const lowercaseInput = document.getElementById('lowercase');
    const numbersInput = document.getElementById('numbers');
    const symbolsInput = document.getElementById('symbols');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const passwordDisplay = document.getElementById('password');
  
    generateBtn.addEventListener('click', function() {
      const length = +lengthInput.value;
      const includeUppercase = uppercaseInput.checked;
      const includeLowercase = lowercaseInput.checked;
      const includeNumbers = numbersInput.checked;
      const includeSymbols = symbolsInput.checked;
  
      passwordDisplay.textContent = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    });
  
    copyBtn.addEventListener('click', function() {
      const password = passwordDisplay.textContent;
      if (!password) return;
      const textarea = document.createElement('textarea');
      textarea.value = password;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
      alert('Password copied to clipboard!');
    });
  
    function generatePassword(length, uppercase, lowercase, numbers, symbols) {
      let charCodes = [];
      if (uppercase) charCodes = charCodes.concat(arrayFromLowToHigh(65, 90));
      if (lowercase) charCodes = charCodes.concat(arrayFromLowToHigh(97, 122));
      if (numbers) charCodes = charCodes.concat(arrayFromLowToHigh(48, 57));
      if (symbols) charCodes = charCodes.concat(arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126)));
      
      const passwordCharacters = [];
      for (let i = 0; i < length; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
      }
      return passwordCharacters.join('');
    }
  
    function arrayFromLowToHigh(low, high) {
      const array = [];
      for (let i = low; i <= high; i++) {
        array.push(i);
      }
      return array;
    }
  });
  