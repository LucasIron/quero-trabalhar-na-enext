window.addEventListener('load', function () {
	'use strict';
	var http = new XMLHttpRequest();
	http.overrideMimeType('application/json');
	http.onreadystatechange = function () {
		if (http.readyState === 4 && http.status === '200') {
			console.log('status 200');
			var products = JSON.parse(http.responseText);
			var ul = document.getElementById('product-ul');
			products.potions.forEach(function (potion) {
				var li = document.createElement('li');
				var img = document.createElement('img');
				img.src = 'assets/products/' + potion.image;
				li.appendChild(img);
				var p = document.createElement('p');
				var node = document.createTextNode(potion.name + ' - ');
				p.appendChild(node);
				var span = document.createElement('span');
				node = document.createTextNode(potion.price);
				span.appendChild(node);
				p.appendChild(span);
				li.appendChild(p);
				ul.appendChild(li);
			});
		}
	}
	http.open('GET', 'assets/potions.json', true);
	http.send(null);
}, false);