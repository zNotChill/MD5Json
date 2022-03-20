$(document).ready(function(){
    $("#enter").click(function(){
        if (document.getElementById('input').value.length === 0) {
            document.getElementById('output').innerHTML = '<div class="flash mt-3 flash-error" style="max-width: 300px"> <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"></path></svg> Please enter a string! </div>';
            return
        }
        document.getElementById('output').innerHTML = ""
        const split = document.getElementById('input').value.split(' ')
        const length = split.length;
        const list = []
        for (let l = 0; l < length; l++) {
            list.push(`{"${l + 1}": {
                "split": "${split[l]}",
                "md5": "${md5(split[l])}"
            }`) // l + 1 bc who the hell wants to use arrays that begin at 0 lets be honest
            document.getElementById('output').innerHTML = `<div class="flash mt-3 flash-success" style="max-width: 1000px"> <!-- <%= octicon "check" %> --> <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg> ${list.join(',')}</div>`
        }
    })
})