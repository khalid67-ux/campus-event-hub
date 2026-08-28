<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Events | Campus Event Hub</title>

    <link
        rel="stylesheet"
        href="css/style.css"
    >

</head>

<body>

<header class="navbar">

    <div class="container nav-content">

        <a href="index.html" class="logo">
            Campus <span>Hub</span>
        </a>

        <nav>
            <a href="index.html">Home</a>
            <a href="events.html">Events</a>
            <a href="my-registration.html">
                My Registration
            </a>
        </nav>

    </div>

</header>


<main>

<section class="section">

<div class="container">

    <div class="section-heading">

        <span>Upcoming</span>

        <h1>All Campus Events</h1>

        <p>
            Find an event that interests you.
        </p>

    </div>


    <!-- Search & Filter -->

    <div class="filters">

        <input
            type="text"
            id="searchInput"
            placeholder="Search event..."
        >

        <select id="categoryFilter">

            <option value="All">
                All Categories
            </option>

            <option value="Workshop">
                Workshop
            </option>

            <option value="Seminar">
                Seminar
            </option>

            <option value="Competition">
                Competition
            </option>

            <option value="Club Event">
                Club Event
            </option>

        </select>

    </div>


    <div
        id="eventsContainer"
        class="event-grid"
    ></div>

</div>

</section>

</main>


<footer class="footer">

    <div class="container">

        <p>
            © 2026 Campus Event Hub.
        </p>

    </div>

</footer>


<script src="js/data.js"></script>
<script src="js/events.js"></script>

</body>

</html>
