// Toggle Function for Tabs
function toggleTab(tabName) {
    var tabs = document.querySelectorAll('.tab-content');
    var buttons = document.querySelectorAll('.tab-button');

    // Hide all tab content
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Remove active state from buttons
    buttons.forEach(function(button) {
        button.style.backgroundColor = '#ff004f';
    });

    // Show the selected tab
    document.getElementById(tabName).style.display = 'block';

    // Set the button to active state
    var activeButton = document.querySelector('button[onclick="toggleTab(\'' + tabName + '\')"]');
    activeButton.style.backgroundColor = '#e60043'; // active color
}

// Show the first tab by default (optional)


  document.addEventListener('DOMContentLoaded', function() {
    toggleTab('skills');
  });



// Handle form submission to save contact information as an Excel file
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-Form"); // Note the hyphen

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Create data array for Excel
        const data = [
            ["Name", "Email", "Message"], // Headers
            [name, email, message] // User input
        ];

        // Convert data to a worksheet
        const ws = XLSX.utils.aoa_to_sheet(data);

        // Create a workbook and append the worksheet
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Contact Data");

        // Save the Excel file
        XLSX.writeFile(wb, "contact_data.xlsx");

        // Clear form fields (optional)
        form.reset();

        alert("Your message has been saved!");
    });
});
