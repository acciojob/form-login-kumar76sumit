function getFormvalue() {
    //Write your code here
	let inputs=document.querySelectorAll("input");
	let firstName=inputs[0].value;
	let lastName=inputs[1].value;
	let button=inputs[2].value;
	button.addEventListener("click",alert(firstName + " " + lastName));
}
