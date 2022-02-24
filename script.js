function myFunction(x) {
    x.classList.toggle("change");
  var hidden = document.getElementById('menu');
    if (hidden.style.display === 'block') hidden.style.display = 'none';
  else hidden.style.display = 'block';
  
  var main = document.getElementById('mbody');
   if (main.style.marginLeft == '235px') main.style.marginLeft='0px';
  else main.style.marginLeft='235px';
}
function Function() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("menu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}