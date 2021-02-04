document.addEventListener("DOMContentLoaded", () => {

  document.querySelector('#btn').addEventListener('click', () => {
    document.querySelector('#result').innerHTML = upper(document.querySelector('#texto').value);
  });

  const upper = (text) => {
    return text.toUpperCase();
  }
});