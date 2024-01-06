theinput = document.querySelector(".date");
button = document.querySelector(".button");
result = document.querySelector(".result div");

button.onclick = function ageclac() {
  birthday = new Date(theinput.value);
  d1 = birthday.getDate();
  m1 = birthday.getMonth() + 1;
  y1 = birthday.getFullYear();

  today = new Date();
  d2 = today.getDate();
  m2 = today.getMonth() + 1;
  y2 = today.getFullYear();

  y3 = y2 - y1;
  if (m2 <= m1) {
    y3--;
    m3 = 12 + m2 - m1;
  } else {
    m3 = m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    d3 = amro(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.innerHTML = `you Have<span> ${y3}</span> years and <span>${m3} </span>months and<span> ${d3}</span> days old`;
};
function amro(year, month) {
  return new Date(year, month, 0).getDate();
}
