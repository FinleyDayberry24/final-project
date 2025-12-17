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
const transTypes = ["automobile", "train", "bus", "plane"];

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


const newMode = document.querySelector('#cone');
const newModeInput = document.querySelector('#new-mode');
const saveBtn = document.querySelector('#save-btn');
const cancelBtn = document.querySelector('#cancel-btn');
const hseTransport = document.querySelector('.hse-transport');

newMode.addEventListener("click", function() {
    if (hseTransport) {
        hseTransport.style.display = 'block';
        if (newModeInput) newModeInput.focus();
    }
});

saveBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (!newModeInput) return;
    const newModeValueRaw = newModeInput.value.trim();
    const newModeValue = newModeValueRaw
    if (transTypes.includes(newModeValue)) {
        alert("This mode of transportation already exists. Please enter a different mode.");
        return;
    }
    const createNewMode = document.createElement("option");
    createNewMode.value = newModeValue;
    createNewMode.textContent = newModeValueRaw.charAt(0).toUpperCase() + newModeValueRaw.slice(1);
    transportSelect.appendChild(createNewMode);
    transTypes.push(newModeValue);
    if (hseTransport) hseTransport.style.display = 'none';
    newModeInput.value = "";
});

cancelBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (hseTransport) hseTransport.style.display = 'none';
    if (newModeInput) newModeInput.value = "";
});