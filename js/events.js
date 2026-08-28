const eventsContainer =
    document.getElementById("eventsContainer");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");


// ==============================
// Create Event Card
// ==============================

function createEventCard(event) {

    return `
        <div class="event-card">

           <img 
    src="${event.image}?auto=format&fit=crop&w=800&q=70"
    alt="${event.title}"
    class="event-image"
    loading="lazy"
>

            <div class="event-card-content">

                <span class="event-category">
                    ${event.category}
                </span>

                <h3>${event.title}</h3>

                <p>
                    ${event.description}
                </p>

                <div class="event-info">
                    <p>📅 ${event.date}</p>
                    <p>⏰ ${event.time}</p>
                    <p>📍 ${event.location}</p>
                    <p>👥 ${event.seats} seats</p>
                </div>

                <a 
                    href="details.html?id=${event.id}"
                    class="btn btn-primary"
                >
                    View Details
                </a>

            </div>

        </div>
    `;
}


// ==============================
// Display Events
// ==============================

function displayEvents(eventList) {

    if (eventList.length === 0) {

        eventsContainer.innerHTML = `
            <div class="no-events">
                <h3>No events found.</h3>
                <p>
                    Try another search or category.
                </p>
            </div>
        `;

        return;
    }


    eventsContainer.innerHTML =
        eventList
            .map(createEventCard)
            .join("");
}


// ==============================
// Search + Category Filter
// ==============================

function filterEvents() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();

    const selectedCategory =
        categoryFilter.value;


    const filteredEvents =
        events.filter(event => {

            // Search title, description and organizer
            const searchableText = `
                ${event.title}
                ${event.description}
                ${event.organizer}
            `.toLowerCase();


            const matchesSearch =
                searchableText.includes(searchText);


            const matchesCategory =
                selectedCategory === "All" ||
                selectedCategory === "All Categories" ||
                event.category === selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    displayEvents(filteredEvents);
}


// ==============================
// Search Event
// ==============================

searchInput.addEventListener(
    "input",
    filterEvents
);


// ==============================
// Category Filter
// ==============================

categoryFilter.addEventListener(
    "change",
    filterEvents
);


// ==============================
// URL Category
// ==============================

const params =
    new URLSearchParams(
        window.location.search
    );

const urlCategory =
    params.get("category");


if (urlCategory) {
    categoryFilter.value = urlCategory;
}


// ==============================
// Show Events Initially
// ==============================

filterEvents();
