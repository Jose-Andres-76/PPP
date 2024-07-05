// Object containing translations
const translations = {
    en: {
        // labels
        labelFN: "Enter your full name:",
        labelEM: "Enter your email:",
        labelCP:"Enter your contact phone:",
        labelA:"Enter your address:",
        labelMSG:"Enter your message:",
        // labels
        sendButt: "Send"
    },
    es: {
        // labels
        labelFN: "Ingrese su nombre completo:",
        labelEM: "Ingrese su correo electrónico:",
        labelCP:"Ingrese su teléfono de contacto:",
        labelA:"Ingrese su dirección:",
        labelMSG:"Ingrese su mensaje:",
        // buttons
        sendButt: "Enviar"
    }
};

// Function to switch language
function switchLanguage(lang) {
    // labels
    document.getElementById('labelFN').textContent = translations[lang].labelFN;
    document.getElementById('labelEM').textContent = translations[lang].labelEM;
    document.getElementById('labelCP').textContent = translations[lang].labelCP;
    document.getElementById('labelA').textContent = translations[lang].labelA;
    document.getElementById('labelMSG').textContent = translations[lang].labelMSG;
    // buttons
    document.getElementById('sendButt').textContent = translations[lang].sendButt;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('btn-en').addEventListener('click', () => switchLanguage('en'));
    document.getElementById('btn-es').addEventListener('click', () => switchLanguage('es'));
    console.log('Language event listeners added'); // Debugging log
});
