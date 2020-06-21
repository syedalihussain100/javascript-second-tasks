///////////////////  pdf 21-25//////////////////////
// var user = prompt("Enter Yoour User Name");

// var firstName = "Zaid";
// var lastName = "Roy";
// var fullName = firstName + " " + lastName;
// alert(fullName);

// var data = "My Favourite Phone is: Samsung Galaxy S6 Eddge Plus";
// var check = data.length;
// document.write(check);

// var country = "Pakistani";
// var n = country.indexOf('n');
// alert(n);

// var z = "Hello World";
// var t = z.lastIndexOf('l');
// document.write(t);

// var e = "Pakistani";
// var x = e.indexOf('i');
// alert(x);

// var firstName = "Zaid";
// var lastName = "Roy";
// var z = firstName.concat(lastName);
// alert(z);

// var f = "Hyderabad"

//     var res = f.replace("Hyderabad", "Islamabad");
// console.log(res);

// var message = "Ali and Sami are best friends. They play cricket and football together";
// console.log(message);

// var value = "Value: " + 472 + "<br>";
// var value1 = "Type: " + "String" + "<br/>";
// var value2 = "Value: " + 472 + "<br/>";
// var value3 = "Type: " + "Number" + '<br/>';
// document.write(value,value1,value2,value3);

// var caplital = "Users input: peanuts";
// var search = caplital.toUpperCase();
// console.log(search);

// var g = "User input: Javascript" + "<br/>";
// var w = "Title case: Javascript" + "<br/>";
// document.write(g,w);

// var num = "Number: " + 35.36  + "<br/>";
// var result = "Result: " + 3536 + "<br/>";
// document.write(num,result);

// var p = prompt("Enter a Value");
// switch (p) {
//     case "@":
//       alert("Note:\n ASCII code of @ is 64");
//         break;
//         case ".":
//          alert("Note: \n ASCII code of . is 46");
//          break;
//          case ",":
//          alert("Note: \n ASCII code of , is 44");
//          break;
//          case "!":
//           alert("Note: \n ASCII code of ! is 33");
//           break;
//     default:
//         alert("Note: \n ASCII ERROR");
// }

// var a = ["apple pie","cake","cookie","chips","patties"];
// var t = prompt("Welcome to abc Cookie What do you want Sir/Mam");
// switch (t) {
//     case "cookie":
//         alert("Cookie is avaible at index 2 in our bakery");
//         break;
//         case "pastry":
//         alert("We are sorry. pastry is not avaible in our bakery");
//         break;
//     default:
//         alert("Note: \n Cookie is not avaible \n Error 403")
// }

// var university = "University of karachi";
// var s = university.split("");
// console.log(s);

// var user =  "Pakistan";
// var g = user.search('n');
// console.log(g);

//////pdf 26 to 30///////

// var g = Math.random() + "<br/>";
// var y = Math.round(3) + "<br/>";
// var f = Math.floor(3) + "<br/>";
// var c = Math.ceil(4) + "<br/>";

// document.write(g,y,f,c)

//  var g = Math.random(-2.67) + "<br/>";
//  var y = Math.round(-3) + "<br/>";
//  var f = Math.floor(-3) + "<br/>";
//  var c = Math.ceil(-4) + "<br/>";

// //  document.write(g,y,f,c);

// var d = "The absolute value is 4 of -4";
// console.log(d);

// var diceRoll = Math.floor( Math.random() * 4) + "<br/>";
// var diceRolls = Math.floor( Math.random() * 6) + "<br/>" ;
// document.write('Random dice Value: ' + diceRoll);
// document.write('Random dice Value: ' + diceRolls);

// var heads = 0;
// var tails = 0;
// function click() {
//     x = (Math.floor(Math.random() * 2) == 0);
//     if(x){
//         flip("heads");

//     }else{
//         flip("tails");
//     }
// };

//  var diceRoll = Math.floor( Math.random() * 10) + "<br/>";
//  document.write("random number between 1 and 100: " + diceRoll);

// var p = prompt("Enter Your Kg");
// var a = "50kg";
// switch (p) {
//     case a:
//         alert("The Weight of user is 58.3 Kilogram");
//         break;

//     default:
//         alert("Note \n No Kg Found");
// }

// random value generated
// var y = Math.floor(Math.random() * 10 + 1);

// counting the number of guesses
// made for correct Guess
// var guess = 1;

// document.getElementById("submitguess").onclick = function(){

// number guessed by user
// var x = document.getElementById("guessField").value;

// if(x == y)
// {
//    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
//            + guess + " GUESS ");
// }
// else if(x > y) /* if guessed number is greater
//    than actual number*/
// {
//    guess++;
//    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
// }
// else
// {
//    guess++;
//    alert("OOPS SORRY!! TRY A GREATER NUMBER")
// }
// }

//////////////Date Methods//////////////////////

// var date = new Date();
// console.log(date);

// function show_now(){
//     var my_month=new Date()

//     var month_name=new Array(12);
//     month_name[0]="January"
//     month_name[1]="February"
//     month_name[2]="March"
//     month_name[3]="April"
//     month_name[4]="May"
//     month_name[5]="June"
//     month_name[6]="July"
//     month_name[7]="August"
//     month_name[8]="September"
//     month_name[9]="October"
//     month_name[10]="November"
//     month_name[11]="December"

//     alert ("Current month = " + month_name[my_month.getMonth()]);
//     }

// var a = prompt("Check Sun or Sat");
// var q = "sun";
// if(q){
//     alert("Today is Sun");
// }else{
//     alert("No Find Yet")
// }

// var i = prompt("Check Your Fun Week");
// var e = "Saturday";
// var t = "Sunday";
// switch (i) {
//     case e:
//       alert("Its Half Day")
//         break;
//         case t:
//         alert("Its Fun Day")
//          break;
//     default:
//       alert("Error");
// }

// var date = "16th";
// if(date){
//     console.log("Last days of the month");
// }

// var date = new Date() ;
//  var date1 = date.getMinutes();
// var date2 = date.getMilliseconds();
// document.write(date,date1,date2)

// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
//   }

//   console.log(formatAMPM(new Date));

// var last = new Date('june 20 2020');

// var later = "Later Date: " + last;
// document.write(later);

// var j = new Date();
// var yt = "Current Data: " + j + "<br/>";
// var h = new Date('june 20 2020');
// var b = "1 hour ago it was" + h
// document.write(yt,b);

// var j = new Date();
// var c = "Current Date: " + j + "<br/>";
// var y = new Date(100);
// var s = "100 Year back, it was" + y + "<br/>";
// document.write(c,s);

// var b = prompt("Enter Your Birthday date");
// var age = "21";

// if(age){
//     alert("Note \n Your Birth year is 1994");
// }

// var bill = "K-Electric Bill" + "<br/>";
// var name = "BCD Customer";
// var feb = "Feburary";
// var units = 420;
// var units2 = 6560;
// var charges1 = 16;
// var late1 = "350";
// var gross1 = "6910";
// var customer = "Customer Name: " + name + "<br/>";
// var month = "Month: " + feb + "<br/>";
// var number = "Number of Units: " + units + "<br/>";
// var charges = "Charges Pr Unit: " + charges1 + "<br/>" + "<br/>" + "<br/>" + "<br/>" + "<br/>";
// var net = "Net Amount Payble (Within Due date): " + units2 + "<br/>";
// var late = "Late Payment sirCharges: " + late1 + "<br/>";
// var gross = "Gross Amount Payble (After Due Date): " + gross1 + "<br/>"

// document.write(bill,customer,month,number,charges,net,late,gross);

///////pdf 35 to 38/////////////////////

// var date = new Date();
// document.write(date);

function lol () {
    var name = "hammad";
    console.log(name);
}