//Shift Start Button
function shiftstart() {
    var start = confirm('Start Shift?');
    if (start == true) {
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
    alert('Shift Ended');
}
//testing report data button
function GTX() {
    alert(window.text);
}
