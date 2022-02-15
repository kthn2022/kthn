function myFunction(x) {
    x.classList.toggle("change");
  var hidden = document.getElementById('menu');
    if (hidden.style.display === 'block') hidden.style.display = 'none';
  else hidden.style.display = 'block';
  
  var main = document.getElementById('mbody');
   if (main.style.marginLeft == '220px') main.style.marginLeft='0px';
  else main.style.marginLeft='220px';
}
