     // I do not own any of the Love2d framework   //
    //    and I am just making it possible to     //
   //  use Love2d with online game development.  //
  // You can use this API as freely as you want //
 //  But that doesn't mean you can say it is   //
//       Yours... *Darkish/Creepy face*       //


var love = {
	audio: {
		newScource: function(sound, stype) {
			this.sound = document.createElement("audio");
			this.sound.src = sound;

			this.sound.setAttribute("preload", "auto");
			this.sound.setAttribute("controls", "none");
			this.sound.style.display = "none";

			document.body.appendChild(this.sound)
		},
		play: function(src) {
			src.sound.play();
		},
	},

	event: {

	},

	filesystem: {

	},

	font: {

	},

	graphics: {
		newImage: function(img) {
			this.image = new Image();
			this.image.src = img;
		},
		draw: function(img, x, y, r, sx, sy, ox, oy, kx, ky) {
			lCanv.ctx.drawImage(img, x + ox, y + oy, img.width * sx, img.height * sy)
		},
		print: function(text, x, y, r, sx, sy, ox, oy, kx, ky) {

		},
		rectangle: function(type, x, y, width, height) {
			if (type == "fill") {
				ctx
			} else if (type == "line") {

			}
		}
	},

	image: {

	},

	joystick: {

	},

	keyboard: {

	},

	math: {

	},

	mouse: {

	},

	physics: {

	},

	sound: {

	},

	system: {

	},

	thread: {

	},

	timer: {

	},

	touch: {

	},

	video: {

	},

	window: {

	},

	config: { // This is for the love.conf(t) file so that it can set everything up first.
		window: {
			title: "Untitled",
			icon: nil,
			width: 800,
			height: 600,

		},
	},
}

lCanv = {
	canvas = document.createElement("canvas")
	loadCanvas = function() {
		this.canvas.width = love.conf.window.width;
		this.canvas.height = love.conf.window.height;
		this.ctx = this.canvas.getContext("2d");

		document.body.insertbefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(this.update, 20)

		window.addEventListener('keydown', function (e) {
			lCanv.key = e.keyCode;
		})
		window.addEventListener('keyup', function (e) {
			lCanv.key = false;
		})
	}
}

function init() {
	love.conf(love.config)
	love.update()
	love.keypressed(lCanv.key)
	love.draw()
}