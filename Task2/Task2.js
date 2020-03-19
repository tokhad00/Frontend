const showMenuButton = document.getElementById('show-menu');
const contextMenu = document.getElementById('menu');

function addContextMenu() {
	contextMenu.innerHTML = '';
	contextMenu.innerHTML = `
    <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
            <nav class="pull">
                <ul class="top-nav" id="target-menu">
                    <li><a href="#">Главная <span class="indicator"><i class="fa fa-angle-right"></i></span></a></li>
                    <li><a href="#">Вход <span class="indicator"><i class="fa fa-angle-right"></i></span></a></li>
                    <li><a href="#">Договор оферты <span class="indicator"><i class="fa fa-angle-right"></i></span></a></li>
                    <li><a href="#">Часто задаваемые вопросы <span class="indicator"><i class="fa fa-angle-right"></i></span></a></li>
                    <li><a href="#">Новости <span class="indicator"><i class="fa fa-angle-right"></i></span></a></li>
                </ul>
            </nav>
        </div>
    </div>`;

    const page = document.getElementById('body');
    const targetMenu = document.getElementById('target-menu');
    
	targetMenu.addEventListener('click', function(e) {
        let target = e.target;
        alert(target.innerText);
        e.stopPropagation();
    });
    
    page.addEventListener('click', function() {
        contextMenu.innerHTML = '';
    });
}

showMenuButton.addEventListener('contextmenu', addContextMenu);