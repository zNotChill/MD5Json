$(document).ready(function(){
	$("#enter").click(function(){
		if (document.getElementById('input').value.length === 0) {
			document.getElementById('output').innerHTML = "Please enter some text!"
			return
		}
		document.getElementById('output').innerHTML = ""
		const split = document.getElementById('input').value.split(' ')
		const length = split.length;
		const list = []
		for (let l = 0; l < length; l++) {
			list.push(`"${l + 1}": {
				"split": "${split[l]}",
				"md5": "${md5(split[l])}"
			`) // l + 1 bc who the hell wants to use arrays that begin at 0 lets be honest
			 
		}
		document.getElementById('output').innerHTML = `{${list.join(',')}}}`
		fetch('./createTempJSON/' + `{${list.join('},')}}}`)
	})
})
