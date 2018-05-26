function replaceArray = function(txt, find, replace) {
  for (var i = 0; i < find.length; i++) {
    txt = txt.replace(new RegExp(find[i], "g"), replace[i]);
  }
  return txt;
};
