import AliIconfont from './../assets/theme/ali-iconfont'

console.log(AliIconfont);

let styles = '';
let singleStyles = ''
for (var i in AliIconfont) {
  singleStyles = `.my-icon-${i}::before {content:'\\${AliIconfont[i].substring(3,7)}'}`;
  styles =styles+ singleStyles+'\n';
}

console.log(styles)


function loadingIcon() {
  function includeStyleElement(styles, styleId) {
    if (document.getElementById(styleId)) {
      return
    }
    var style = document.createElement("style");
    style.id = styleId;
    (document.getElementsByTagName("head")[0] || document.body).appendChild(style);
    if (style.styleSheet) { //for ie
      style.styleSheet.cssText = styles;
    } else { //for w3c
      style.appendChild(document.createTextNode(styles));
    }
  }
  console.log(styles)
  includeStyleElement(styles, "newstyle");
}


export default {
  loadingIcon
}
