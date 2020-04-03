const wrapper = document.getElementById('wrapper');
const contextMenu = document.createElement('div');
const contextMenuWidth = 300;
const contextMenuHeight = 168;

wrapper.addEventListener('contextmenu', function(evt) {
  evt.preventDefault();
  contextMenu.style.width = `${contextMenuWidth}px`;
  contextMenu.style.height = `${contextMenuHeight}px`;

  if ((screen.availWidth - evt.offsetX) < contextMenuWidth) {
		contextMenu.marginLeft = `${screen.availWidth - contextMenuWidth}px`;
	} else {
		contextMenu.style.marginLeft = `${evt.offsetX}px`;
	}
	if ((screen.availHeight - evt.offsetY) < (contextMenuHeight * 2)){
		contextMenu.style.marginTop = `${evt.offsetY - contextMenuHeight}px`;
	} else {
		contextMenu.style.marginTop = `${evt.offsetY}px`;
  }

  wrapper.innerHTML = '';
  contextMenu.innerHTML = `
  <nav class="pull" id="menu">
    <ul class="top-nav" id="target-menu">
      <li>Главная </li>
      <li>Вход </li>
      <li>Регистрация </li>
      <li>Договор оферты </li>
      <li>Часто задаваемые вопросы </li>
      <li>Новости </li>
      <li>О нас </li>
    </ul>
  </nav>`;

  wrapper.appendChild(contextMenu);
});

wrapper.addEventListener('click', function(evt) {
  if (evt.target.parentNode.parentNode.parentNode !== contextMenu) {
    wrapper.innerHTML = '';
  }
});