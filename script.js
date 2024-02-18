function getFormvalue() {
    //Write your code here
	let inputs=document.querySelectorAll("input");
	let firstName=inputs[0].value
	let lastName=inputs[1].value
	let fullName= firstName+" "+lastName
	alert(fullName)
}
