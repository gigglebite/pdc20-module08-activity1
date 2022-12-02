function validate(){

    //ID
    if(document.myform.inputID.value==""){
        document.getElementById("IDErr").innerHTML = "Please fill in your ID Number.";
        return false;
    } else {
        var regex = /^[1-9]\d*$/;
        if(regex.test(document.myform.inputID.value)==false){
        alert("Please enter a valid ID number.");
        return false; 
        }
    }


    // First Name
    if(document.myform.inputName.value==""){
        document.getElementById("FirstNameErr").innerHTML = "Please fill in your first name.";
        return false;
    } else {
        var regex = /^[a-z ,.'-]+$/i;
        if(regex.test(document.myform.inputName.value)==false){
        alert("Please enter a valid first name.");
        return false; 
        }
    }

    // Last Name

    if(document.myform.inputSurname.value==""){
        document.getElementById("SurnameErr").innerHTML = "Please fill in your surname.";
        return false;
    } else {
        var regex = /^[a-z ,.'-]+$/i;
        if(regex.test(document.myform.inputSurname.value)==false){
        alert("Please enter a valid surname.");
        return false; 
        }
    }

    // Department

    if(document.myform.inputDpt.value==""){
        document.getElementById("DepartmentErr").innerHTML = "Please fill in your department.";
        return false;
    } else {
        var regex = /^[a-z ,.'-]+$/i;
        if(regex.test(document.myform.inputDpt.value)==false){
        alert("Please enter a valid department.");
        return false; 
        }
    }

    // Email

    if(document.myform.inputEmail.value==""){
        document.getElementById("EmailErr").innerHTML = "Please enter your email.";
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myform.inputEmail.value)==false){
        alert("Please enter a valid email address");
        return false; 
        }
    }

    // Contact No. 

    if(document.myform.inputCtn.value==""){
        document.getElementById("CtnErr").innerHTML = "Please fill in your phone number.";
        return false;
    } else {
        var regex = /^[1-9]\d*$/;
        if(regex.test(document.myform.inputCtn.value)==false){
        alert("Please enter a valid contact number.");
        return false; 
        }
    }

    // Salary

    if(document.myform.inputSalary.value==""){
        document.getElementById("SalaryErr").innerHTML = "Please fill in your salary.";
        return false;
    } else {
        var regex = /^[1-9]\d*$/;
        if(regex.test(document.myform.inputSalary.value)==false){
        alert("Please enter a valid salary number.");
        return false; 
        }
    }

    // Username

    if(document.myform.inputUsername.value==""){
        document.getElementById("UsernameErr").innerHTML = "Please fill in your username.";
        return false;
    } else {
        var regex = "^[A-Za-z][A-Za-z0-9_]{7,29}$";
        if(regex.test(document.myform.inputUsername.value)==false){
        alert("Please enter a valid username.");
        return false; 
        }
    }

}
