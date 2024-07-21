/*Question 30: Hello Admin: Greet users differently, especially 'admin'.
*/
var userNames = ["zaheer", "qabool", "admin"];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames[i], ", how are you?"));
    }
}
