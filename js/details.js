const eventDetails =
    document.getElementById("eventDetails");


const params =
    new URLSearchParams(window.location.search);


const eventId =
    Number(params.get("id"));


const event =
    events.find(event => event.id === eventId);


if (!event) {

    eventDetails.innerHTML = `
        <h2>Event not found.</h2>
        <a href="events.html"
           class="btn primary-btn">
            Back to Events
        </a>
    `;

} else {

    eventDetails.innerHTML = `

        <div class="event-details">

            <img
                src="${event.image}"
                alt="${event.title}"
                class="details-image"
            >

            <div class="details-content">

                <span class="event-category">
                    ${event.category}
                </span>

                <h1>
                    ${event.title}
                </h1>

                <p>
                    ${event.description}
                </p>

                <div class="details-info">

                    <p>
                        📅 <strong>Date:</strong>
                        ${event.date}
                    </p>

                    <p>
                        🕐 <strong>Time:</strong>
                        ${event.time}
                    </p>

                    <p>
                        📍 <strong>Location:</strong>
                        ${event.location}
                    </p>

                    <p>
                        👥 <strong>Organizer:</strong>
                        ${event.organizer}
                    </p>

                    <p>
                        🎟️ <strong>Maximum Seats:</strong>
                        ${event.seats}
                    </p>

                </div>

                <a
                    href="registration.html?id=${event.id}"
                    class="btn primary-btn"
                >
                    Register Now
                </a>

            </div>

        </div>

    `;

}
