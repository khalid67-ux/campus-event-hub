const featuredEvents = document.getElementById("featuredEvents");

function createEventCard(event) {

    return `
        <article class="event-card">

           <img
    src="${event.image}?auto=format&fit=crop&w=800&q=70"
    alt="${event.title}"
    class="event-image"
    loading="lazy"
>

            <div class="event-content">

                <span class="event-category">
                    ${event.category}
                </span>

                <h3>
                    ${event.title}
                </h3>

                <p class="event-info">
                    📅 ${event.date}
                </p>

                <p class="event-info">
                    🕐 ${event.time}
                </p>

                <p class="event-info">
                    📍 ${event.location}
                </p>

                <a
                    href="details.html?id=${event.id}"
                    class="btn primary-btn"
                >
                    View Details
                </a>

            </div>

        </article>
    `;
}


if (featuredEvents) {

    featuredEvents.innerHTML = events
        .slice(0, 3)
        .map(createEventCard)
        .join("");

}
