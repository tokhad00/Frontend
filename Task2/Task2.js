Element.prototype.makeDraggable = function() {
  const currentBlock = this;
  currentBlock.onmousedown = function(e) {
    const offsetX = e.pageX - parseInt(currentBlock.getBoundingClientRect().left);
    const offsetY = e.pageY - parseInt(currentBlock.getBoundingClientRect().top);

    document.onmousemove = function(e) {
      currentBlock.style.left = Math.max(Math.min(e.pageX - offsetX, currentBlock.parentNode.clientWidth - currentBlock.clientWidth), 0) + 'px';
      currentBlock.style.top = Math.max(Math.min(e.pageY - offsetY, currentBlock.parentNode.clientHeight - currentBlock.clientHeight), 0) + 'px';
    };

    document.onmouseup = function() {
      document.onmousemove = currentBlock.onmouseup = null;
    };
  };

  currentBlock.ondragstart = function() {
    return 0;
  };
};

document.getElementById('pink-block').makeDraggable();
document.getElementById('green-block').makeDraggable();
document.getElementById('blue-block').makeDraggable();
document.getElementById('purple-block').makeDraggable();