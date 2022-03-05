function getAkanName() {
    let dateOfBirth = document.getElementById("birth-date").value;
    let date = new Date(dateOfBirth);
    let year = parseInt(date[0]);
    let month = parseInt(date[1]);
    let day = date.getDay();

    let gender = document.getElementById("gender").value;
    const FemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const MaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let display = document.getElementById("output")

    let century = Math.floor((year-1)/100) + 1;
    let numDay = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
    let dayOfWeek = Math.round(numDay)
    
    
    display.innerHTML = dayOfWeek
    if (dateOfBirth === "" || gender === "") {
        display.classList.add("error");
        display.innerHTML = "please input the date and gender";
    }else {
        display.classList.remove("error");
    }
    if(!isNaN(day)){
        if (gender === "male"){
            display.innerHTML = "Your Akan name is " + MaleNames[day] + " and you were born on a " + WeekDays[day];
        }
        else if (gender === "female"){
            display.innerHTML = "Your Akan name is " + FemaleNames[day] + " and you were born on " + WeekDays[day];
        }
        else {
            alert("Ensure you have chosen a valid birth date and selected a gender");
            display.innerHTML = "";
        }
    }
    clearForm();
}

function clearForm() {
    document.getElementById("data-form").reset();
}