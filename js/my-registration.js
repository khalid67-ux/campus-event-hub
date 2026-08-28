const registrationList =
    document.getElementById("registrationList");


// ==============================
// Get Registrations
// ==============================

function getRegistrations() {

    return JSON.parse(
        localStorage.getItem("registrations")
    ) || [];

}


// ==============================
// Display Registrations
// ==============================

function displayRegistrations() {

    const registrations = getRegistrations();

    if (registrations.length === 0) {

        registrationList.innerHTML = `
            <div class="empty-state">

                <h2>No registrations yet</h2>

                <p>
                    You have not registered
                    for any event.
                </p>

                <br>

                <a
                    href="events.html"
                    class="btn primary-btn"
                >
                    Explore Events
                </a>

            </div>
        `;

        return;
    }


    registrationList.innerHTML =
        registrations.map((registration, index) => {

            return `

                <div class="registration-card">

                    <h2>
                        ${registration.eventTitle}
                    </h2>

                    <p>
                        <strong>Name:</strong>
                        ${registration.name}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${registration.email}
                    </p>

                    <p>
                        <strong>Phone:</strong>
                        ${registration.phone}
                    </p>

                    <p>
                        <strong>Registered:</strong>
                        ${registration.registeredAt}
                    </p>


                    <div class="registration-actions">

                        <button
                            class="download-btn"
                            onclick="downloadPDF(${index})"
                        >
                            Download PDF
                        </button>

                        <button
                            class="cancel-btn"
                            onclick="cancelRegistration(${index})"
                        >
                            Cancel Registration
                        </button>

                    </div>

                </div>

            `;

        }).join("");
}


// ==============================
// Download PDF
// ==============================

function downloadPDF(index) {

    const registrations = getRegistrations();

    const registration =
        registrations[index];


    if (!registration) {

        alert("Registration not found.");

        return;
    }


    if (!window.jspdf) {

        alert("PDF library could not be loaded.");

        return;
    }


    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();


    // Top bar

    doc.setFillColor(37, 99, 235);

    doc.rect(
        0,
        0,
        210,
        12,
        "F"
    );


    // CampusHub

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(24);

    doc.setTextColor(
        15,
        23,
        42
    );

    doc.text(
        "CampusHub",
        105,
        32,
        {
            align: "center"
        }
    );


    // Title

    doc.setFontSize(16);

    doc.setTextColor(
        37,
        99,
        235
    );

    doc.text(
        "Registration Confirmation",
        105,
        45,
        {
            align: "center"
        }
    );


    // Event box

    doc.setFillColor(
        239,
        246,
        255
    );

    doc.roundedRect(
        20,
        58,
        170,
        32,
        5,
        5,
        "F"
    );


    doc.setFontSize(17);

    doc.setTextColor(
        15,
        23,
        42
    );

    doc.text(
        registration.eventTitle,
        105,
        78,
        {
            align: "center"
        }
    );


    // Information

    doc.setFontSize(12);

    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setTextColor(
        100,
        116,
        139
    );

    doc.text("Name:", 25, 110);
    doc.text("Email:", 25, 125);
    doc.text("Phone:", 25, 140);
    doc.text(
        "Registration Date:",
        25,
        155
    );


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setTextColor(
        15,
        23,
        42
    );

    doc.text(
        registration.name,
        75,
        110
    );

    doc.text(
        registration.email,
        75,
        125
    );

    doc.text(
        registration.phone,
        75,
        140
    );

    doc.text(
        registration.registeredAt,
        75,
        155
    );


    // Divider

    doc.setDrawColor(
        226,
        232,
        240
    );

    doc.line(
        25,
        170,
        185,
        170
    );


    // Confirmation

    doc.setFontSize(12);

    doc.setTextColor(
        71,
        85,
        105
    );

    doc.text(
        "This document confirms your registration for the above campus event.",
        105,
        188,
        {
            align: "center"
        }
    );


    // Status

    doc.setFillColor(
        220,
        252,
        231
    );

    doc.roundedRect(
        70,
        202,
        70,
        14,
        7,
        7,
        "F"
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(11);

    doc.setTextColor(
        22,
        101,
        52
    );

    doc.text(
        "Registration Confirmed",
        105,
        211,
        {
            align: "center"
        }
    );


    // Footer

    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(9);

    doc.setTextColor(
        148,
        163,
        184
    );

    doc.text(
        "CampusHub - Campus Event Management System",
        105,
        280,
        {
            align: "center"
        }
    );


    doc.save(
        "CampusHub-Registration-Confirmation.pdf"
    );
}


// ==============================
// Cancel Registration
// ==============================

function cancelRegistration(index) {

    const registrations =
        getRegistrations();


    const registration =
        registrations[index];


    if (!registration) {

        alert("Registration not found.");

        return;
    }


    const confirmCancel =
        confirm(
            `Are you sure you want to cancel your registration for "${registration.eventTitle}"?`
        );


    if (!confirmCancel) {

        return;
    }


    registrations.splice(
        index,
        1
    );


    localStorage.setItem(
        "registrations",
        JSON.stringify(
            registrations
        )
    );


    displayRegistrations();

}


displayRegistrations();
