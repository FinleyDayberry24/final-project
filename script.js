// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector('#request-form');
//     console.log(form);
// });

const icons = [
    "bi-car-front",
    "bi-train-front",
    "bi-bus-front",
    "bi-airplane",
    "bi-exclamation-diamond-fill"
];

const passengerName = [];
const riderCounts = [];
const transportModes = [];

const form = document.querySelector('#request-form');
const nameInput = document.querySelector('#passenger-name');
const ridersInput = document.querySelector('#riders');
const transportSelect = document.querySelector('#transportation');
const ticketSection = document.querySelector('#tickets-container');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const riders = Number(ridersInput.value);
    const mode = transportSelect.value;

    if (name === "" || riders < 1) {
        alert("Please enter a valid name and number of riders.");
        return;
    }

    passengerName.push(name);
    riderCounts.push(riders);
    transportModes.push(mode);

    
    function createTick(name, riders, mode) {
        const ticket = document.createElement("div");
        ticket.classList.add("ticket");

        let iconClass = icons[4];

        if (mode === "automobile") iconClass = icons[0];
        if (mode === "train") iconClass = icons[1];
        if (mode === "bus") iconClass = icons[2];
        if (mode === "plane") iconClass = icons[3];

        const icon = document.createElement("i");
        icon.classList.add("bi", iconClass, "ticket-icon");

        const nameEl = document.createElement("h2");
        nameEl.textContent = name.toUpperCase();

        const header = document.createElement("div");
        header.classList.add("ticket-header");
        header.append(icon, nameEl);

        const ridersEl = document.createElement("p");
        ridersEl.textContent = `${riders} PASSENGERS`;

        const editIcon = document.createElement("i");
        editIcon.classList.add("bi", "bi-pencil-square");

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("bi", "bi-trash");

        const actions = document.createElement("div");
        actions.classList.add("ticket-actions");
        actions.appendChild(editIcon);
        actions.appendChild(deleteIcon);

        ticket.append(header, ridersEl, actions);
        return ticket;
    }

    const ticket = createTick(name, riders, mode);

    ticketSection.appendChild(ticket);

    form.reset();
});
