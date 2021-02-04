document.addEventListener("DOMContentLoaded", () => {

  document.querySelector('#btn').addEventListener('click', () => {
    document.querySelector('#result').value = gerarCpf();
  });

  document.querySelector("#clipboard").addEventListener('click', () => {
    navigator.clipboard.writeText(document.querySelector('#result').value);
  });

  const upper = (text) => {
    return text.toUpperCase();
  }

  const gerarCpf = () => {
    const n1 = aleatorio(), n2 = aleatorio(), n3 = aleatorio(), d1 = dig(n1, n2, n3);
    return `${n1}.${n2}.${n3}-${d1}${dig(n1, n2, n3, d1)}`;
  }

  const dig = (n1, n2, n3, n4) => {
    let nums = n1.split("").concat(n2.split(""), n3.split("")), x = 0;
    if (n4) nums[9] = n4;
    for (let i = (n4 ? 11 : 10), j = 0; i >= 2; i--, j++) x += parseInt(nums[j]) * i;
    return (y = x % 11) < 2 ? 0 : 11 - (y = x % 11);
  }

  const aleatorio = () => {
    return ("" + Math.floor(Math.random() * 999)).padStart(3, '0');
  }
});