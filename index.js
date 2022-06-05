

const mdjson = function(s) { 
	var u = s.split(' ');
	var r = [];
	u.forEach((l) => {
		r.push(`${l}: {"split": "${s[l]}","md5": "${md5(s[l])}"`)
	})
	return r.join('},')

module.exports = {
	mdjson
}
