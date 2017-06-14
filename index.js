window.addEventListener('load', function () {
	'use strict';
	const getJson = function (json, callback) {
		const http = new XMLHttpRequest();
		http.overrideMimeType('application/json');
		http.onreadystatechange = function () {
			if (http.readyState == 4 && http.status == 200) {
				return callback(http.responseText);
			}
		}
		http.open('GET', json, true);
		http.send(null);
	};
	getJson('assets/potions.json', function (json) {
		const products = JSON.parse(json);
		var ul = document.getElementById('product-ul');
		Object.keys(products.potions).forEach(function (potion) {
			potion = products.potions[potion];
			const li = document.createElement('li');
			const img = document.createElement('img');
			const p = document.createElement('p');
			const span = document.createElement('span');
			span.appendChild(document.createTextNode('$' + potion.price));
			p.appendChild(document.createTextNode(potion.name + '\u00A0-\u00A0'));
			img.src = 'assets/products/' + potion.image;
			li.appendChild(img);
			li.appendChild(p);
			li.appendChild(span);
			ul.appendChild(li);
		});
		return ul;
	});
}, false);