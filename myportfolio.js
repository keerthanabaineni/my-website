// Tab toggle functionality
function toggleTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => tab.style.display = 'none');
    buttons.forEach(button => button.style.backgroundColor = '#ff004f');

    document.getElementById(tabName).style.display = 'block';
    const activeButton = document.querySelector(`button[onclick="toggleTab('${tabName}')"]`);
    if (activeButton) activeButton.style.backgroundColor = '#e60043';
}

document.addEventListener('DOMContentLoaded', () => {
    toggleTab('skills'); // Default tab
});



  new Typed("#typed-role", {
    strings: [
      "Full Stack Developer",
      "AI & Data Analytics Enthusiast",
      "Software Developer",
      "Creative Web Designer"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });
