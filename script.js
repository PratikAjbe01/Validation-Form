const emailInput = document.getElementById('email');
const pass1Input = document.getElementById('pass1');
const pass2Input = document.getElementById('pass2');
const emailAns = document.getElementById('email-ans');
const notMatch = document.getElementById('notmatch');
const pass8Char = document.getElementById('8char');
const passUppercase = document.getElementById('uppercase');
const passLowercase = document.getElementById('lowercase');
const passSpecial = document.getElementById('specialchar');
const passDigit = document.getElementById('digit1');

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validate() {
  const email = emailInput.value;
  const pass1 = pass1Input.value;
  const pass2 = pass2Input.value;

  if (!emailRegexp.test(email)) {
    emailAns.innerText = 'Invalid Email';
    emailAns.style.color = 'red';
  } else {
    emailAns.innerText = '';
  }

  if (pass1 !== pass2) {
    notMatch.innerText = "Password didn't match";
    notMatch.style.color = 'red';
  } else {
    notMatch.innerText = '';
  }

  const char = /^.{8,}$/;
  const upper = /(?=.*[A-Z])/;
  const lower = /(?=.*[a-z])/;
  const special = /(?=.*[!@#$%^&*])/;
  const digit = /(?=.*\d)/;

  if (!char.test(pass1)) {
    pass8Char.innerText = 'At least 8 characters';
    pass8Char.style.color = 'red';
  } else {
    pass8Char.innerText = '';
  }

  if (!upper.test(pass1)) {
    passUppercase.innerText = 'Should contain 1 uppercase character';
    passUppercase.style.color = 'red';
  } else {
    passUppercase.innerText = '';
  }

  if (!lower.test(pass1)) {
    passLowercase.innerText = 'Should contain 1 lowercase character';
    passLowercase.style.color = 'red';
  } else {
    passLowercase.innerText = '';
  }

  if (!special.test(pass1)) {
    passSpecial.innerText = 'Should contain 1 special character';
    passSpecial.style.color = 'red';
  } else {
    passSpecial.innerText = '';
  }

  if (!digit.test(pass1)) {
    passDigit.innerText = 'Should contain 1 digit';
    passDigit.style.color = 'red';
  } else {
    passDigit.innerText = '';
  }

}
