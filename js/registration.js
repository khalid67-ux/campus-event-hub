const form =
    document.getElementById("registrationForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const phoneInput =
    document.getElementById("phone");

const successMessage =
    document.getElementById("successMessage");

const registerButton =
    document.getElementById("registerButton");


const params =
    new URLSearchParams(window.location.search);


const eventId =
    Number(params.get("id"));


const event =
    events.find(event => event.id === eventId);


if (!event) {

    form.innerHTML = `
        <h2>Event not found.</h2>
        <a href="events.html"
           class="btn primary-btn">
            Back to Events
        </a>
    `;

} else {

    document.getElementById("registrationTitle")
        .textContent =
        `Register for ${event.title}`;

}


/* =========================
   VALIDATION
========================= */

function validateForm() {

    let valid = true;


    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const phone =
        phoneInput.value.trim();


    document.getElementById("nameError")
        .textContent = "";

    document.getElementById("emailError")
        .textContent = "";

    document.getElementById("phoneError")
        .textContent = "";


    if (name.length < 3) {

        document.getElementById("nameError")
            .textContent =
            "Name must contain at least 3 characters.";

        valid = false;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        document.getElementById("emailError")
            .textContent =
            "Please enter a valid email address.";

        valid = false;
    }


    const phonePattern =
        /^01[3-9]\d{8}$/;


    if (!phonePattern.test(phone)) {

        document.getElementById("phoneError")
            .textContent =
            "Enter a valid Bangladeshi phone number.";

        valid = false;
    }


    return valid;
}


/* =========================
   GET REGISTRATIONS
========================= */

function getRegistrations() {

    return JSON.parse(
        localStorage.getItem("registrations")
    ) || [];

}


/* =========================
   FORM SUBMIT
========================= */

form.addEventListener(
    "submit",
    function(eventSubmit) {

        eventSubmit.preventDefault();


        if (!validateForm()) {
            return;
        }


        let registrations =
            getRegistrations();


        /* Registration Limit */

        const eventRegistrations =
            registrations.filter(
                registration =>
                    registration.eventId === eventId
            );


        if (
            eventRegistrations.length >=
            event.seats
        ) {

            alert(
                "Registration Full"
            );

            registerButton.disabled = true;

            registerButton.textContent =
                "Registration Full";

            return;
        }


        /* Save registration */

        const registration = {

            id: Date.now(),

            eventId: event.id,

            eventTitle: event.title,

            name: nameInput.value.trim(),

            email: emailInput.value.trim(),

            phone: phoneInput.value.trim(),

            registeredAt:
                new Date().toLocaleString()

        };


        registrations.push(
            registration
        );


        localStorage.setItem(
            "registrations",
            JSON.stringify(registrations)
        );


        successMessage.textContent =
            "Registration successful!";


        form.reset();

    }
);
