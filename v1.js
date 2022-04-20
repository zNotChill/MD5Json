

const mdjson = function(s) { 
	if (!s) {
		throw new TypeError("String not defined");
	} else {
		var u = s.split(' ');
		var r = [];
		for (let l = 0; l < u.length; l++) {
			r.push(`${l}: {"split": "${s[l]}","md5": "${md5(s[l])}"`)
		}
		return r.join('},')
	}
}
