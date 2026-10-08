var canvas = document.getElementById("canvas")
var cx = canvas.getContext("2d")
canvas.width = 400
canvas.height = 400


function checkerboard(){
	//let instead of var if the variable never changes
	let color1 = "green"
	cx.fillStyle = "green"
	//(x,y,w,h)
	cx.fillRect(0,0,tile_size, tile_size)


	for(var r = 0; r < rows; r++){
		if (r%2 == 0){

		}
	}

}

//Store an image
var tree = new Image()
tree.src = "tree.png"


//clicking on screen
canvas.addEventListener("click", function(click){
	var rect = canvas.getBoundingClientRect()
	var mouse_x = click.clientX - rect.left
	var mouse_y = click.clientY - rect.top
	console.log(mouse_x, mouse_y)
})




function draw(){
	//(0,0) is top left, y increases as you down
	//(x, y, width, height)
	cx.clearRect(0,0, canvas.width, canvas.height)
	checkerboard()
	//(image, x, y, w, h)
	cx.drawImage(tree, 0,0,tile_size, tile_size)


	requestAnimationFrame(draw) //makes the function repeat
}

draw()












