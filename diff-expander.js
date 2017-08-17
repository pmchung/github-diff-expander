function expander() {
  return document.querySelector('.js-expand[data-url*=".coffee"], .js-expand[data-url*=".js"');
}

function onRemoval() {
  setTimeout(function() {
    expand(expander());
  }, 0);
}

function expand(link) {
  if (!link) return;
  link.addEventListener('DOMNodeRemovedFromDocument', onRemoval);
  link.click();
}

expand(expander());
