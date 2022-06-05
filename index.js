
const mdjson = function(s) {
	var u = s.split(' ');
	var r = [];
	for (let l = 0; l < u.length; l++) {
		r.push(`${l}: {"split": "${s[l]}","md5": "${md5(s[l])}"`)
	}
	return r.join('},')
}

module.exports = {
	mdjson
}
