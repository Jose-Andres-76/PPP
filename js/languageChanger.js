// Object containing translations
const translations = {
    en: {
        formTitle: "Contact Form",
        formText: "In the following form you can send us a message with your contact information. We will get back to you as soon as possible.",
        slogan: "Solid structure, excellent results.",
        welcome1: "Software Engineer",
        welcome3: "specialized in backend",
        welcome4: "A little about me",
        welcome6: "I am a backend development technician with experience in Java, JavaScript, and .NET, specializing in the design and implementation of efficient and scalable backend systems. My mission is to create high-quality software that brings recognition to the company and satisfaction to our customers. I aspire to be recognized in the technological field for offering agile and innovative solutions, always maintaining a reputation for integrity and responsibility. I am committed to continuous improvement and the adoption of new technologies to deliver exceptional solutions.",
        welcome8: "My Projects",
        //carousel
        slideOneHeader:"SIMEPCI",
        slideOne:"Private Health Centers Webpage",
        slideTwoHeader:"AGRIPRO",
        slideTwo:"Official landing page for AGRIPRO",
        slideThreeHeader:"Tony's Electronics Manager",
        slideThree:"Administration system for a Computer sales business",
        slideFourHeader:"Work Exchange",
        slideFour:"Work Exchange project for the Costa Rican Ministry of Labor",
        // labels
        labelFN: "Enter your full name:",
        labelEM: "Enter your email:",
        labelCP:"Enter your contact phone:",
        labelA:"Enter your address:",
        labelMSG:"Enter your message:",
        // buttons
        sendButt: "Send",
        // footer
        footerText:"Solid structure, excellent results.",
        footerCR:"© 2021 Jose Andres Ramos Espinoza. All rights reserved.",
        // CV link
        cvLink: "https://raw.githubusercontent.com/Jose-Andres-76/Portafolio/main/Tarea3/Curriculum Vitae English José Andrés Ramos Espinoza.pdf",
        CVtalk: "Here you can access my resume and get to know a little more about my skills and experience.",
        cvButtonText: "Download CV"
    },
    es: {
        formTitle: "Formulario de Contacto",
        formText: "Con el siguiente formulario pueden dejarme su información de contacto, estare al tanto de sus preguntas con respecto a mi trabajo.",
        slogan: "Estructura firme, resultado excelente.",
        welcome1: "Ingeniero de Software",
        welcome3: "con especialidad en backend",
        welcome4: "Un poco sobre mí",
        welcome6: "Soy un técnico en desarrollo backend con experiencia en Java, JavaScript y .NET, especializado en el diseño y la implementación de sistemas backend eficientes y escalables. Mi misión es crear software de alta calidad que brinde reconocimiento a la empresa y satisfacción a nuestros clientes. Aspiro a ser reconocido en el ámbito tecnológico por ofrecer soluciones ágiles e innovadoras, manteniendo siempre una reputación de integridad y responsabilidad. Estoy comprometido con la mejora continua y la adopción de nuevas tecnologías para ofrecer soluciones excepcionales.",
        welcome8: "Mis Proyectos",
        //carousel
        slideOneHeader:"SIMEPCI",
        slideOne:"Página web para Centros de Salud privados",
        slideTwoHeader:"AGRIPRO",
        slideTwo:"Landing page oficial de la empresa AGRIPRO",
        slideThreeHeader:"Administrador de Electrónicos Tony",
        slideThree:"Sistema de administracion de ventas de un negocio de Computadoras",
        slideFourHeader:"Bolsa de Trabajo",
        slideFour:"Proyecto de bolsa de Empleo para el Ministerio de Trabajo de Costa Rica",
        // labels
        labelFN: "Ingrese su nombre completo:",
        labelEM: "Ingrese su correo electrónico:",
        labelCP:"Ingrese su teléfono de contacto:",
        labelA:"Ingrese su dirección:",
        labelMSG:"Ingrese su mensaje:",
        // buttons
        sendButt: "Enviar",
        // footer
        footerText:"Estructura firme, resultado excelente.",
        footerCR:"© 2021 Jose Andres Ramos Espinoza. Todos los derechos reservados.",
        // CV link
        cvLink: "https://raw.githubusercontent.com/Jose-Andres-76/Portafolio/main/Tarea3/Curriculum Vitae Español José Andrés Ramos Espinoza.pdf",
        CVtalk: "Aquí pueden acceder a mi curriculum y conocer un poco mas a detalle mis habilidades y experiencia.",
        cvButtonText: "Descargar curriculum"
    }
};

// Function to switch language
function switchLanguage(lang) {
    document.getElementById('formTitle').textContent = translations[lang].formTitle;
    document.getElementById('formText').textContent = translations[lang].formText;
    document.getElementById('slogan').textContent = translations[lang].slogan;
    document.getElementById('welcome1').textContent = translations[lang].welcome1;
    document.getElementById('welcome3').textContent = translations[lang].welcome3;
    document.getElementById('welcome4').textContent = translations[lang].welcome4;
    document.getElementById('welcome6').textContent = translations[lang].welcome6;
    document.getElementById('welcome8').textContent = translations[lang].welcome8;
    //carousel
    document.getElementById('slideOneHeader').textContent = translations[lang].slideOneHeader;
    document.getElementById('slideOne').textContent = translations[lang].slideOne;
    document.getElementById('slideTwoHeader').textContent = translations[lang].slideTwoHeader;
    document.getElementById('slideTwo').textContent = translations[lang].slideTwo;
    document.getElementById('slideThreeHeader').textContent = translations[lang].slideThreeHeader;
    document.getElementById('slideThree').textContent = translations[lang].slideThree;
    document.getElementById('slideFourHeader').textContent = translations[lang].slideFourHeader;
    document.getElementById('slideFour').textContent = translations[lang].slideFour;
    // labels
    document.getElementById('labelFN').textContent = translations[lang].labelFN;
    document.getElementById('labelEM').textContent = translations[lang].labelEM;
    document.getElementById('labelCP').textContent = translations[lang].labelCP;
    document.getElementById('labelA').textContent = translations[lang].labelA;
    document.getElementById('labelMSG').textContent = translations[lang].labelMSG;
    // buttons
    document.getElementById('sendButt').textContent = translations[lang].sendButt;
    //footer
    document.getElementById('footerText').textContent = translations[lang].footerText;
    document.getElementById('footerCR').textContent = translations[lang].footerCR;
    // CV link
    const cvLink = document.getElementById('CV');
    cvLink.href = translations[lang].cvLink;
    cvLink.textContent = translations[lang].cvButtonText;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('btn-en').addEventListener('click', () => switchLanguage('en'));
    document.getElementById('btn-es').addEventListener('click', () => switchLanguage('es'));
    console.log('Language event listeners added'); // Debugging log
});
