// JavaScript Document

document.addEventListener("DOMContentLoaded", ()=>{
	
	const card = document.querySelectorAll('.section__cards');
	
	const prevButton = document.querySelector('.carousel-control.prev');
	const NextButton = document.querySelector('.carousel-control.next');
	
	let currentCardIndex = 0;
	
	const showCard = () => {
		cards.forEach(card=> card.classList.remove('show'))
		cards [index].classList.add("show");
	}
	
	const changeCard = (increment) => {
		currentCardIndex = (currentCardIndex + increment + cards.length) % cards.length;
		showCard(currentCardIndex);
	}
	
	NextButton.addEventListener("click",(Event)=>{
		event.preventDefault();
		changeCard(1);
	})
	
	prevButton.addEventListener("click",(Event)=>{
		event.preventDefault();
		changeCard(-1);
	})

});