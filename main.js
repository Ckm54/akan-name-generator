function getAkanName() {

    let dateOfBirth = document.getElementById("birth-date").value
    let date = dateOfBirth.split("-")
    let year = parseInt(date[0]);
    let month = parseInt(date[1]);
    let day = parseInt(date[2]);

    let century = Math.floor((year-1)/100) + 1;
    let dayOfWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
    console.log(dayOfWeek)
}