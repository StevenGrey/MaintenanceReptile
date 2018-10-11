/**
 * 
 */

(function() {
	var menuEl = document.getElementById('ml-menu'),
	mlmenu = new MLMenu(menuEl, {
		backCtrl : false, 
		onItemClick: loadDummyData 
	});
	
	var openMenuCtrl = document.querySelector('.action--open'),
	closeMenuCtrl = document.querySelector('.action--close');
	
	openMenuCtrl.addEventListener('click', openMenu);
	closeMenuCtrl.addEventListener('click', closeMenu);
	
	function openMenu() {
		classie.add(menuEl, 'menu--open');
		closeMenuCtrl.focus();
	}
	
	function closeMenu() {
		classie.remove(menuEl, 'menu--open');
		openMenuCtrl.focus();
	}
	
	var gridWrapper = document.querySelector('.content');
	
	function loadDummyData(ev, itemName) {
		ev.preventDefault();
		closeMenu();
		gridWrapper.innerHTML = '';
		classie.add(gridWrapper, 'content--loading');
		setTimeout(function() {
			classie.remove(gridWrapper, 'content--loading');
			gridWrapper.innerHTML = '<ul class="products">' + dummyData[itemName] + '<ul>';
		}, 700);
	}
})();