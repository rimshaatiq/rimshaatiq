// header toogle start //
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', ()=> {
	document.querySelector('body').classList.toggle('toggle-header')
	MenuBtn.classList.toggle('fa-xmark')
})

console.log('Hello World')

//header end//
//==============================//

//typing animation start//

let type = new Typed('.TypingAnimation',{
	strings: ['Software Engineer', 'UI/UX designer', 'Web Developer'],
	typeSpeed: 100,
	backSpeed: 50,
	backDelay: 2000,
	loop: true,
});

//typing animation end//

//==================================//

//skills bar animation//

const progressBars = document.querySelectorAll('.inner-bar');
window.addEventListener('scroll', function(){
	progressBars.forEach(function (progressBar) {
		const rect = progressBar.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom>=0) {
			const width = progressBar.getAttribute('data-width');
			progressBar.style.width = width + '%' 
		}
	})
})

//======================================//

//active link state on scroll start //
// get all nav links
let navLinks = document.querySelectorAll('header nav ul li a')
//get all sections.

let Section = document.querySelectorAll('section')
window.addEventListener('scroll', ()=>{
	const scrollPos= window.scrollY + 50
	Section.forEach(section=>{
		if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
			navLinks.forEach(link =>{
				link.classList.remove('active');
				if(section.getAttribute('id')=== link.getAttribute('href').substring(1)){
					link.classList.add("active");
				}
			})
		}
	})
})