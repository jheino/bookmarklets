javascript: (function() {
	var metaTags = document.getElementsByTagName("meta");
	var title = document.title;

	for (var i = 0; i < metaTags.length; i++) {
		if (metaTags[i].getAttribute("property") == "og:title") {
			title = metaTags[i].getAttribute("content");
			break;
		}
	}

	prompt("", location.href + " - " + title);
})();
