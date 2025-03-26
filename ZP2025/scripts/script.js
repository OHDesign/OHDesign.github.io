//------------------------show back to top button----------------------------------------
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
			document.getElementById("scrollToTopBtn").style.visibility = 'visible';
			document.getElementById("scrollToTopBtn").style.opacity = '1.0';
		} else {
			document.getElementById("scrollToTopBtn").style.opacity = '0.0';
			document.getElementById("scrollToTopBtn").style.visibility = 'hidden'
		}
	}

//-------------------------hamburger menue----------------------------------------------
	// When user clicks on menue, show menue and transform menue to X
	var menue = 1;

	function menuestatus(x) {
		if(menue==1 && x!=0){
			document.getElementById("nav").style.right = '0px';
			document.getElementById("line1").style.transform = 'translate(17px, 0px) rotate(45deg)'
			document.getElementById("line2").style.opacity = '0.0'
			document.getElementById("line3").style.transform = 'translate(-16px, 20px) rotate(-45deg)'
			menue = 0;
			return 0;
		}else{
			document.getElementById("nav").style.right = '-100%';
			document.getElementById("line1").style.transform = 'translate(0px, 0px) rotate(0deg)'
			document.getElementById("line2").style.opacity = '1.0'
			document.getElementById("line3").style.transform = 'translate(0px, 0px) rotate(0deg)'
			menue = 1;
			return 1;
		}
	}

