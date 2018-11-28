function replaceArray(txt, find, replace) {
  find.forEach((e, i) => {
    txt = txt.replace(new RegExp(e, "g"), replace[i]);
  });
  return txt;
};
