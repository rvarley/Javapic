; //Defensive semicolon

//Authors:  Kevin and Ransom

(function () {
    var form = document.getElementById("signup");
    form.noValidate=true;
    addEvent(form, 'submit', function(e){
        e.preventDefault();
        var elements = this.elements;
        var name = elements.name.value;
        var username = elements[1].value;
        var email = elements[2].value;
        console.log("name is:" + name);
        console.log("username is:" + username);
        console.log("email is:" + email);
        if (!ValidateName(name)) {
            alert("Name required.");
        }
        if (!ValidateUsername(username)) {
            alert("Username required.");
        }
        if (ValidateEmail(email) !== true) {
            alert("Invalid Email Address");
        } else {
            form.setAttribute("action", "gallery.html?" + name); 

        }
        form.setAttribute("action", "gallery.html?" + document.querySelector("[name=name]")); 
        var loc = document.querySelectorAll("#signup input[type='text']");
        console.log("elements.name.value is:  " + elements.name.value);
        console.log("querySelector is:  " + loc);
        window.location.href = "gallery.html?" + loc[0].value;

    });
}());

function ValidateName(name) {

    if (name === '') {
        return false;
        console.log("no name entered");
    } else {
        return true;
    }
}
function ValidateUsername(username) {

    if (username === '') {
        return false;
        console.log("no username entered");
    } else {
        return true;
    }
}

// Helper function to add an event listener
function addEvent (el, event, callback) {
  if ('addEventListener' in el) {                  // If addEventListener works
    el.addEventListener(event, callback, false);   // Use it
  } else {                                         // Otherwise
    el['e' + event + callback] = callback;         // CreateIE fallback
    el[event + callback] = function () {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event + callback]);
  }
}

// Helper function to remove an event listener
function removeEvent(el, event, callback) {
  if ('removeEventListener' in el) {                      // If removeEventListener works
    el.removeEventListener(event, callback, false);       // Use it 
  } else {                                                // Otherwise
    el.detachEvent('on' + event, el[event + callback]);   // Create IE fallback
    el[event + callback] = null;
    el['e' + event + callback] = null;
  }
}

function ValidateEmail(email) {
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if ((re.test(email))) {
        return true;
    }
    alert("Invalid email address");
    return false;
}

