var converter = {
	// First we have Variables, which are the Objects that are in the page, or in this case, the iframe from the actual web page.
	convert: document.getElementById("convert"),

	// These are the left Options:
	Import: document.getElementById("import"),
	Paste: document.getElementById("paste"),

	// These are the right Options:
	WithLua: document.getElementById("wl"),
	WithoutLua: document.getElementById("wol"),

	// We finnished the variables, so now we have the functions!!!
	convert: function() {
		alert("Conversion Successful!")
	},
}

function selectOption(side, option) {
	if (side == "left") {

		if (option == 1) {
			converter.Import.backgroundColor = '#b1e3fa';
			converter.Paste.backgroundColor = '#a0d2e9';
		} else if (option == 2) {
			converter.buttons.Paste.backgroundColor = '#b1e3fa';
			converter.buttons.Import.backgroundColor = '#a0d2e9';
		}

	} else if (side == "right") {

		if (option == 1) {
			converter.WithLua.backgroundColor = '#b1e3fa';
			converter.WithoutLua.backgroundColor = '#a0d2e9';
		} else if (option == 2) {
			converter.WithoutLua.backgroundColor = '#b1e3fa';
			converter.WithLua.backgroundColor = '#a0d2e9';
		}

	} else {
		alert("function has not been performed proplery...")
	}
}
