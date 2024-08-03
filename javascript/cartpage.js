let productsInCart= document.getElementById('shoppingCart');
if(!productsInCart){
	productsInCart = [];
}
const parent = document.querySelector('#container2');
const cartcount = document.querySelector('#sum-count');
const productscount = document.querySelectorAll('.wrapper');
const countnumber = function () {
	let count = 0;
	productsInCart.forEach(item => {
		count += item.count;
	});
	return count;
}

const parentElement = document.querySelector('#container2');
const cartSumPrice = document.querySelector('#sum-prices');
const products = document.querySelectorAll('.wrapper');
const countTheSumPrice = function () {
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	return sum;
}

const parentoftax = document.querySelector('#container2');
const carttax = document.querySelector('#tax');
const productstax = document.querySelectorAll('.wrapper');
const countThetax = function () {
	let tax = 0;
	productsInCart.forEach(item => {
		tax += Math.round(item.price * 0.02 * 100 / 100);
	});
	return tax;
}


const parenttotal = document.querySelector('#container2');
const carttotal = document.querySelector('#total');
const productstotal = document.querySelectorAll('.wrapper');
const countThetotal = function () {
	let total = 0;
	productsInCart.forEach(item => {
		total += Math.round(item.price + item.price * 0.02 * 100 / 100);
	});
	return total;
}


const updateShoppingCartHTML = function () {
	document.getElementById('shoppingCart');
	if (productsInCart.length > 0) {
		let result = productsInCart.map(product => {
			return `
			<article class="cartproduct">
				<header>
					<a class="remove">
						<img src="${product.image}" alt="">
						
					</a>
				</header>
				<div class="content">
					<h1>${product.name}</h1>
					
				</div>
				<footer class="content">
					<span class="button-minus" data-id=${product.id}>-</span>
					<span class="button" >${product.count}</span>
					<span class="button-plus" data-id=${product.id}>+</span>
					<h2 class="full-price">
						₹${product.price}
					</h2>
					
				</footer>
			</article>
            </div>
			`
		});
		parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		cartSumPrice.innerHTML = '₹' + countTheSumPrice();

		parent.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		cartcount.innerHTML = countnumber();

		parentoftax.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		carttax.innerHTML = '₹' + countThetax();

		parenttotal.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		carttotal.innerHTML = '₹' + countThetotal();

	}
	 else {
		document.querySelector('.checkout').classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty">OOPS! UR CART IS EMPTY!</h4>';
		cartSumPrice.innerHTML = '';

	}
}
function updateProductsInCart(product) {
	for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == product.id) {
			productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return;
		}
	}
	productsInCart.push(product);
}

products.forEach(item => {
	item.addEventListener('click', (e) => {
		if (e.target.classList.contains('addToCart')) {
			const productID = e.target.dataset.productId;
			const productName = item.querySelector('.productName').innerHTML;
			const productPrice = item.querySelector('.priceValue').innerHTML;
			const productImage = item.querySelector('img').src;
			let product = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice,
			}
			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});
parentElement.addEventListener('click', (e) => {
	const isPlusButton = e.target.classList.contains('button-plus');
	const isMinusButton = e.target.classList.contains('button-minus');

	if (isPlusButton || isMinusButton) {
		for (let i = 0; i < productsInCart.length; i++) {
			if (productsInCart[i].id == e.target.dataset.id) {
				if (isPlusButton) {
					productsInCart[i].count += 1
					
				}
				else if (isMinusButton) {
					productsInCart[i].count -= 1
				}
				productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

			}
			if (productsInCart[i].count <= 0) {
				productsInCart.splice(i, 1);
			}
		}
		updateShoppingCartHTML();
	}
});
updateShoppingCartHTML();








