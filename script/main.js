



function calculate() {
    let courses = document.getElementById('ddlCources');
    let courseIndex = courses.selectedIndex;
    let coursePrice = parseFloat(courses.options[courseIndex].value);

   



    let levels = document.getElementById('ddlLevels');
    let levelIndex = levels.selectedIndex;
    let levelAddPrice = parseFloat(levels.options[levelIndex].value);
 

    let txtHours = document.getElementById('txtHours').value;
    let IntHours = parseFloat(txtHours);
    
 
    document.getElementById('txtTotal').value = '$ ' + (coursePrice + levelAddPrice) * IntHours;

    
   


    /***** */
    if (courseIndex == 1 && levelIndex == 1) {
        document.getElementById('resource').src='./images/touch1book.jpg';
    }
    if (courseIndex == 1 && levelIndex == 2) {
        document.getElementById('resource').src='./images/touch2book.jpg';
    }
    if (courseIndex == 1 && levelIndex == 3) {
        document.getElementById('resource').src='./images/touch3book.jpg';
    }
    if (courseIndex == 1 && levelIndex == 4) {
        document.getElementById('resource').src='./images/touch4book.jpg';
    }
    if (courseIndex == 2 && levelIndex == 1) {
        document.getElementById('resource').src='./images/ieltsbook.jpg';
    }
    if (courseIndex == 2 && levelIndex == 2) {
        document.getElementById('resource').src='./images/ieltsbook.jpg';
    }
    if (courseIndex == 2 && levelIndex == 3) {
        document.getElementById('resource').src='./images/ieltsbook.jpg';
    }
    if (courseIndex == 2 && levelIndex == 4) {
        document.getElementById('resource').src='./images/ieltsbook.jpg';
    }
    if (courseIndex == 3 && levelIndex == 1) {
        document.getElementById('resource').src='./images/conversationbook.jpg';
    }
    if (courseIndex == 3 && levelIndex == 2) {
        document.getElementById('resource').src='./images/conversationbook.jpg';
    }
    if (courseIndex == 3 && levelIndex == 3) {
        document.getElementById('resource').src='./images/conversationbook.jpg';
    }
    if (courseIndex == 3 && levelIndex == 4) {
        document.getElementById('resource').src='./images/conversationbook.jpg';
    }
    if (courseIndex == 4 && levelIndex == 1) {
        document.getElementById('resource').src='./images/academicwritingbook.jpg';
    }
    if (courseIndex == 4 && levelIndex == 2) {
        document.getElementById('resource').src='./images/academicwritingbook.jpg';
    }
    if (courseIndex == 4 && levelIndex == 3) {
        document.getElementById('resource').src='./images/academicwritingbook.jpg';
    }
    if (courseIndex == 4 && levelIndex == 4) {
        document.getElementById('resource').src='./images/academicwritingbook.jpg';
    }
  




}


// Scrol top

$(document).ready(function (event) {

    let scroll_top = $('.scroll-top');

    console.log(scroll_top);

    scroll_top.hide(300);

    $(window).scroll(function () {

        if ($(window).scrollTop() > 200) {
            scroll_top.show(300);
        } else {
            scroll_top.hide(300);
        }

    });

    scroll_top.click(function () {
        $('html').animate({ scrollTop: 0 }, 1000);
    });

});

// NavBar

$(document).ready(function () {

    $(window).scroll(function () {

        let scrollDist = $(document).scrollTop();
        if (scrollDist > 500) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }

    });

});


/*******clock Start */
var hourpointer=document.getElementById("hour-pointer");
var minutepointer=document.getElementById("minute-pointer");
var secondpointer=document.getElementById("second-pointer");
var numeric=document.getElementById("numeric");
function currentTime(){
    var date = new Date();


    var hourAngle=date.getHours() * 30;
    var minuteAngle=date.getMinutes() * 6;
    var secondAngle=date.getSeconds() * 6;
    hourpointer.style.transform="rotate("  +hourAngle + "deg)";
    minutepointer.style.transform="rotate(" +  minuteAngle + "deg)";
    secondpointer.style.transform="rotate(" + secondAngle + "deg)";
numeric.innerHTML=date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

setInterval(currentTime,0);


/*******clock End */

/*****************AJAX send message Start */
var xhr = false;

xhr = new XMLHttpRequest();

function getData(dataSource, divID) {
    if (xhr) {
        var obj = document.getElementById(divID);
        xhr.open('GET', dataSource);


        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                obj.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }
}

/*****************AJAX send message End */

/*****************Registration Start */
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var cources = document.contactForm.cources.value;
    var stuId = document.contactForm.stuId.value;
    var pMethod = document.contactForm.pMethod.value;
    var Language = [];
    var checkboxes = document.getElementsByName("Language[]");
    
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            Language.push(checkboxes[i].value);
        }
    }
    var nameErr = emailErr = mobileErr = countryErr = genderErr = courcesErr = stuIdErr=pMethodErr= true;
    if (name == "") {
        printError("nameErr", "<p style='color:red;'>Please enter your full Name</p>");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "<p style='color:red;'>Enter valid name</p>");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    if (email == "") {
        printError("emailErr", "<p style='color:red;'>Please enter your email</p>");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "<p style='color:red;'>Please enter a valid email</p>");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
    if (mobile == "") {
        printError("mobileErr", "<p style='color:red;'>Please enter your mobile number</p>");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "<p style='color:red;'>Please enter a valid mobile number</p>");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    if (country == "Select") {
        printError("countryErr", "<p style='color:red;'>Please select country</p>");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    if (gender == "") {
        printError("genderErr", "<p style='color:red;'>Please select you gender</p>");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    /** */
    if(cources==""){
        printError("courcesErr", "<p style='color:red;'>Please Select Your Cource</p>");
    } else {
        printError("courcesErr", "");
        courcesErr = false;
    }

    /** */
    if(stuId==""){
        printError("stuIdErr", "<p style='color:red;'>Please Select Your Status</p>");
    } else {
        printError("stuIdErr", "");
        stuIdErr = false;
    }
    /** */

    /** */
    if(pMethod==""){
        printError("pMethodErr", "<p style='color:red;'>Please Select Your Payment Method</p>");
    } else {
        printError("pMethodErr", "");
        pMethodErr = false;
    }

    /** */
    if ((nameErr || emailErr || mobileErr || countryErr || genderErr || courcesErr ||stuIdErr||pMethodErr)  == true) {
        return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Country: " + country + "\n" +
            "Gender: " + gender + "\n"+
            "Cources:" + cources +"\n"+
            "Student ID: " + stuId+"\n"+
            "Payment Method: " + pMethod+"\n";
        if (Language.length) {
            dataPreview += "Language: " + Language.join(", ");
        }
        alert(dataPreview);
    }
};
/*****************Registration End */
// Local Storage Start


function handleSubmit(){
    const FULLNAME = document.getElementById('name').value;
    const EMAIL = document.getElementById('email').value;
    const PHONENUMBER = document.getElementById('mobile').value;

    localStorage.setItem('LocalSFull_Name',FULLNAME);
    localStorage.setItem('E_Mail',EMAIL);
    localStorage.setItem('Phone_Number',PHONENUMBER);
    return;

}









