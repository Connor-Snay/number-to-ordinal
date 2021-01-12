
function numberToOrdinal() {
	var num = 113; //Change this number
	var num = num.toString();
	var last = num.charAt(num.length-1);
	var secondLast = num.charAt(num.length-2);
	if (last === "1" && secondLast !== "1"){
	  console.log(num + "st");
	}
	else if (last === "2" && secondLast !=="1"){
	  console.log(num + "nd");
	}
	else if (last === "3" && secondLast !=="1"){
	  console.log(num + "rd");
	}
	else if (last === "0" && secondLast === ""){
	  console.log("0");
	}
	else {
	  console.log(num + "th");
	}
}