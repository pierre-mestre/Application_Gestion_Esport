module.exports = {
	login: function(req, res, getIndex, element){
		let content;
		if(req.session.pseudo !== undefined){
			res.redirect('/index');
		} else {
			content = getIndex(element, req.session.pseudo);
			const token = req.headers.authorization;
			const origin = req.headers.origin;
			res.set("Content-Type", "text/html");
			res.send(content.toString());
		}
	}
}