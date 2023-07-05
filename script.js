let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

function handleScroll() {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

function submitBox() {
  var input = document.getElementById("input-box").value;
  var scriptPattern = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
  var matches = input.match(scriptPattern);

  if (matches !== null) {
    for (var i = 0; i < matches.length; i++) {
      var scriptContent = matches[i].replace(/<\/?script[^>]*>/gi, "");
      console.log("Detected script:", scriptContent);
    }
    alert("Input contains script tags", scriptContent);
  } else {
    alert("Saved");
  }
}
