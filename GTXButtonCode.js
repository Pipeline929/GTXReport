//Shift Start Button
function shiftstart() {
    var start = confirm('Start Shift?');
    if (start == true) {
       //displays alert of shift start
        alert('Shift Started on ' + month + '/' + day + '/' + year + ' at ' + hour + ':' + minute + ':' + second);
        //console prints date and time of shift start
        console.log('Shift Started on ' + month + '/' + day + '/' + year + ' at ' + hour + ':' + minute + ':' + second);
    }
}
//Report Button
function report() {
    window.text = prompt('What is your report?');

}
//Shift End Button
function shiftend() {
    //displays alert of shift end.
    alert('Shift Ended');
    //console prints date and time of shift end
    alert('Shift ended on ' + month + '/' + day + '/' + year + ' at ' + hour + ':' + minute + ':' + second);
    console.log('Shift ended on ' + month + '/' + day + '/' + year + ' at ' + hour + ':' + minute + ':' + second);
}
//testing report data button
function GTX() {
    alert(window.text);
}
