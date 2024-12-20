function toggleContent(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function editDevice(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');
    const deviceName = cells[0].innerText;
    const newDeviceName = prompt("Promjeni ime uređaja:", deviceName);
    if (newDeviceName !== null) {
        cells[0].innerText = newDeviceName;
        alert("Ime uređaja je uspješno promjenjeno!");
    }
}

function deleteDevice(button) {
    if (confirm("Da li ste sigurni da želite obrisati ovaj uređaj?")) {
        const row = button.closest('tr');
        row.remove();
        alert("Uređaj je obrisan uspješno!");
    }
}