let kind = location.hash.slice(1);
const a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
         'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
         'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4',
         '5', '6', '7', '8', '9'], b;
const arrays = {
  doublestruck: ['\ud835\udd38', '\ud835\udd39', '\u2102', '\ud835\udd3b', '\ud835\udd3c', '\ud835\udd3d', 
                 '\ud835\udd3e', '\u210d', '\ud835\udd40', '\ud835\udd41', '\ud835\udd42', '\ud835\udd43', 
                 '\ud835\udd44', '\u2115', '\ud835\udd46', '\u2119', '\u211a', '\u211d', '\ud835\udd4a',
                 '\ud835\udd4b', '\ud835\udd4c', '\ud835\udd4d', '\ud835\udd4e', '\ud835\udd4f', '\ud835\udd50',
                 '\u2124', '\ud835\udd52', '\ud835\udd53', '\ud835\udd54', '\ud835\udd55', '\ud835\udd56',
                 '\ud835\udd57', '\ud835\udd58', '\ud835\udd59', '\ud835\udd5a', '\ud835\udd5b', '\ud835\udd5c',
                 '\ud835\udd5d', '\ud835\udd5e', '\ud835\udd5f', '\ud835\udd60', '\ud835\udd61', '\ud835\udd62',
                 '\ud835\udd63', '\ud835\udd64', '\ud835\udd65', '\ud835\udd66', '\ud835\udd67', '\ud835\udd68',
                 '\ud835\udd69', '\ud835\udd6a', '\ud835\udd6b', '\ud835\udfd8', '\ud835\udfd9', '\ud835\udfda',
                 '\ud835\udfdb', '\ud835\udfdc', '\ud835\udfdd', '\ud835\udfde', '\ud835\udfdf', '\ud835\udfe0',
                 '\ud835\udfe1'],
  circledBw: ['\u24b6','\u24b7','\u24b8','\u24b9','\u24ba','\u24bb','\u24bc','\u24bd','\u24be','\u24bf',
              '\u24c0','\u24c1','\u24c2','\u24c3','\u24c4','\u24c5','\u24c6','\u24c7','\u24c8','\u24c9',
              '\u24ca','\u24cb','\u24cc','\u24cd','\u24ce','\u24cf','\u24d0','\u24d1','\u24d2','\u24d3',
              '\u24d4','\u24d5','\u24d6','\u24d7','\u24d8','\u24d9','\u24da','\u24db','\u24dc','\u24dd',
              '\u24de','\u24df','\u24e0','\u24e1','\u24e2','\u24e3','\u24e4','\u24e5','\u24e6','\u24e7',
              '\u24e8','\u24e9','\u24ea','\u2460','\u2461','\u2462','\u2463','\u2464','\u2465','\u2466',
              '\u2467','\u2468'],
  circledWb: [...'\ud83c\udd50\ud83c\udd51\ud83c\udd52\ud83c\udd53\ud83c\udd54\ud83c\udd55\ud83c\udd56\ud83c\udd57\ud83c\udd58\ud83c\udd59\ud83c\udd5a\ud83c\udd5b\ud83c\udd5c\ud83c\udd5d\ud83c\udd5e\ud83c\udd5f\ud83c\udd60\ud83c\udd61\ud83c\udd62\ud83c\udd63\ud83c\udd64\ud83c\udd65\ud83c\udd66\ud83c\udd67\ud83c\udd68\ud83c\udd69\ud83c\udd50\ud83c\udd51\ud83c\udd52\ud83c\udd53\ud83c\udd54\ud83c\udd55\ud83c\udd56\ud83c\udd57\ud83c\udd58\ud83c\udd59\ud83c\udd5a\ud83c\udd5b\ud83c\udd5c\ud83c\udd5d\ud83c\udd5e\ud83c\udd5f\ud83c\udd60\ud83c\udd61\ud83c\udd62\ud83c\udd63\ud83c\udd64\ud83c\udd65\ud83c\udd66\ud83c\udd67\ud83c\udd68\ud83c\udd69\u24ff\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039']
};
const allopts = document.getElementsByClassName('opt');
function hideAllOpts() {
  for(var i = 0; i < allopts.length; i++) allopts[i].style.display = '';
}
function kindUpdate() {
  hideAllOpts();
  kind = location.hash.slice(1);
  switch (kind) {
    case 'doublestruck':
      b = arrays.doublestruck;
      break;
    case 'fullwidth':
    case 'htmlentites':
    case 'cursive':
      alert('Not supported yet');
      break;
    case 'circled':
      b = arrays.circledBw;
      allopts[0].style.display = 'block';
      break;
    default:
      alert('Not found');
      break;
  }
} kindUpdate();

const optChange = {
  circled: function(e) {
    b = arrays['circled' + e.options[e.selectedIndex].value];
  },
  htmlentities1: function(e) {

  },
  htmlentities2: function(e) {

  }
};
window.onhashchange = kindUpdate;

function convert(txt) {
  return replaceArray(txt, a, b);
}

const $ = {}; document.querySelectorAll('[id]').forEach(e => $[e.id] = e);
function message(msg) {
  $.msg.innerHTML = msg;
  $.msg.style.display = '';
  setTimeout(function () {
    document.getElementById('msg').style.display = 'none'
  }, 1000);
}

$.input.oninput = () => $.output.value = convert($.input.value);
$.output.onfocus = () => {
  if(!$.output.value) return;
  $.output.select();
  document.execCommand('copy');
  $.output.blur();
  message('Copied!');
};