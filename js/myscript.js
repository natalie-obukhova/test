"use strict";
$(document).ready(function() {
  var name = prompt("Как Вас зовут?", '');
  if (name == null) {
    alert("Жаль, что вы не захотели знакомиться!");
  }
  else {
    alert("Привет, " + name + "!");
  }
});
