




// HEART ONE/ CONTAINER/ WRAPPER / top middle

var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(255 - (progress*0));
					// var blue = Math.ceil(progress*0);

					var color = "rgb(" + 0 + ", 0, " + 0 + ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="heartone"></div>

					`
					var child = document.getElementsByClassName("container")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper").appendChild(container)

					counter++;

				}, timer)

				timer += 200; //update timer to make sure the next instance happens after this one	
			}




// HEARTTWO/ CONTAINER TWO/ WARPPER TWO / top left
		var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container2";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 0 + ", 0, " + 0+ ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="hearttwo"></div>

					`
					var child = document.getElementsByClassName("container2")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper2").appendChild(container)

					counter++;

				}, timer)

				timer += 100; //update timer to make sure the next instance happens after this one	
			}

	



// HEART THREE/ CONTAINER 3/ WRAPPER THREE / top right
		var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container3";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 0 + ", 0, " + 0 + ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="heartthree"></div>

					`
					var child = document.getElementsByClassName("container3")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper3").appendChild(container)

					counter++;

				}, timer)

				timer += 150; //update timer to make sure the next instance happens after this one	
			}




// HEART FOUR/ CONTAINER 4/ WRAPPER 4 / second row far right
		var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container4";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 0 + ", 0, " + 0 + ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="heartfour"></div>

					`
					var child = document.getElementsByClassName("container4")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper4").appendChild(container)

					counter++;

				}, timer)

				timer += 300; //update timer to make sure the next instance happens after this one	
			}



// HEART Five/ CONTAINER 5/ WRAPPER 5 / second row far left
		var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container5";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 0 + ", 0, " + 0 + ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="heartfive"></div>

					`
					var child = document.getElementsByClassName("container5")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper5").appendChild(container)

					counter++;

				}, timer)

				timer += 180; //update timer to make sure the next instance happens after this one	
			}


// HEART SIX/ CONTAINER 6/ WRAPPER 6 / third row far left
		var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container6";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 0 + ", 0, " + 0+ ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="heartsix"></div>

					`
					var child = document.getElementsByClassName("container6")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper6").appendChild(container)

					counter++;

				}, timer)

				timer += 150; //update timer to make sure the next instance happens after this one	
			}



// HEART 7 / CONTAINER 7/ WRAPPER 7/ THIRD ROW FAR RIGHT

var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container7";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 0 + ", 0, " + 0+ ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="heartseven"></div>

					`
					var child = document.getElementsByClassName("container7")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper7").appendChild(container)

					counter++;

				}, timer)

				timer += 250; //update timer to make sure the next instance happens after this one	
			}


// HEART EIGHT / THIRD ROW MIDDLE
var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container8";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 0 + ", 0, " + 0 + ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="hearteight"></div>

					`
					var child = document.getElementsByClassName("container8")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper8").appendChild(container)

					counter++;

				}, timer)

				timer += 120; //update timer to make sure the next instance happens after this one	
			}



// HEART NINE/ FOURTH row far left
		var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container9";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 0 + ", 0, " + 0 + ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="heartnine"></div>

					`
					var child = document.getElementsByClassName("container9")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper9").appendChild(container)

					counter++;

				}, timer)

				timer += 150; //update timer to make sure the next instance happens after this one	
			}


// HEART TEN/ 4TH row MIDDLE
		var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container10";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 0 + ", 0, " + 0+ ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="heartten"></div>

					`
					var child = document.getElementsByClassName("container10")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper10").appendChild(container)

					counter++;

				}, timer)

				timer += 150; //update timer to make sure the next instance happens after this one	
			}



// HEART elevent / 4th row far right
		var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container11";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 0 + ", 0, " + 0 + ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="hearteleven"></div>

					`
					var child = document.getElementsByClassName("container11")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper11").appendChild(container)

					counter++;

				}, timer)

				timer += 150; //update timer to make sure the next instance happens after this one	
			}





// BROKEN HEART JAVASCRIPT
$(document).ready(function(){ 
        $('.heart-Circle').click(function(){
          $('.heart-Container').toggleClass('broken');
          
        });
      });


// window.onclick = myFunction;

// function myFunction() {
//     document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
// }

$(document).ready(function(){ 
        $('.heart-Circle2').click(function(){
          $('.heart-Container2').toggleClass('broken');
        });
      });




// $('.heart-Container2').mouseenter(function(){
//     $(".heartbroken").css("background-color", "red");
//    $(".point").css("background-color", "red");
//   $(".right-Side .point ").css("background-color", "red");
// });
// $('.heart-Container2').mouseleave(function(){
//     $(".heartbroken").css("background-color", "white");
//   $(".point").css("background-color", "white");
//     $(".right-Side .point").css("background-color", "white");
// });



// SCROLL FUNCTION
// $(window).scroll(function(){
//   console.log($(window).scrollTop());
//   $(".pixels").html($(window).scrollTop());
//   var scrollAmount= $(window).scrollTop() + "px";
//   $(".ball").css("height",scrollAmount).css("width", scrollAmount)
// });







// function myFunction() {
// if (confirm('Are you sure you want to save this thing into the database?')) {
//     // Save it!
// } else {
//     // Do nothing!
// }}





// function myFunction(event) {
//     var x = event.which || event.keyCode;
//     if (x == 27) {
//         alert ("You pressed the Escape key!");
//     }
// }

// $('div').click(function(){
//     alert("Press the corresponding key to play!");
// });
