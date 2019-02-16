// --- CHARACTER WINDOW SELECT FUNCTION ---

// function to navigate through character windows
// var characterNumber = $('.character-window').length;
// var characterWindow = document.getElementsByClassName('character');
var characterWindow = $('.character');
var active = 'active';
var idle = 'idle';
var characterNumber = characterWindow.length - 1;
var characterNumberUp = characterWindow.length + 7;
var characterNumberDown = characterWindow.length - 7;

function characterSelect(startIndex, endIndex) {
	/*
		if left left arrrow is pressed when first character window is active, make the last character window active (same for right arrow in reverse)
		making it possible to cycle through all the items in one direction
	*/
	if ( characterWindow.eq(startIndex).hasClass(active) ) {
		console.log(characterWindow.eq(startIndex).hasClass(active));		
		characterWindow.removeClass(active);
		characterWindow.eq(endIndex).addClass(active);
		characterWindow.eq(endIndex).removeClass(idle);
	} else {
        var activeCharacterWindow = $('.active');
		characterWindow.removeClass(active);
		// make previous character window active
		if (startIndex === 0) {
			activeCharacterWindow.prev().addClass(active);  
			activeCharacterWindow.prev().removeClass(idle);  
		}
		// make next character window active
		else if (startIndex === characterNumber) {
			activeCharacterWindow.next().addClass(active);  
			activeCharacterWindow.next().removeClass(idle);  
		}
		else if (startIndex === characterNumberDown){

		}
	}
}
// --- CHARACTER WINDOW CONTROLS --- 

// if left or right arrow key has been pressed call characterSelect function with start and end indexes as arguments and also call keyControlCharacterAnimations function

$(window).on('keydown', function(e) {
	if(e.which === 37) { 
		//Left
        console.log("Left");
		characterSelect(0, characterNumber);
	}
	else if (e.which === 39) {
		//Right
        console.log("Right");
		characterSelect(characterNumber, 0);
	}
	else if (e.which === 38) {
		//Up
		console.log("Up");
		characterSelect(0, characterNumberUp);
	}
	else if (e.which === 40) {
		//Down
		console.log("Down");
		characterSelect(0, characterNumberDown);
	}
	else if (e.which === 13) {
		//Enter
		var link = $('.active').attr('href');
		window.location.replace(link);
	}
	else if (e.which == 66){
		window.location.replace('/');   
	}
});