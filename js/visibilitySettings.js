document.addEventListener('DOMContentLoaded', function() {
    function isMobile() {
        return window.innerWidth <= 768;
    }
    console.log('Visibility settings turning ON');
    document.getElementById('btnHome').addEventListener('click', function() {
        document.getElementById('Home').style.display = 'block';
        document.getElementById('Home2').style.display = 'block';
        document.getElementById('Home3').style.display = 'block';
        document.getElementById('demo').style.display = 'block';
        document.getElementById('Form').style.display = 'none';
        document.getElementById('FormIntro').style.display = 'none';
        document.getElementById('logoScreen').style.display = 'none';
        document.getElementById('aboutMe').style.display = 'none';
        document.getElementById('aboutMe2').style.display = 'none';
        document.getElementById('aboutMe3').style.display = 'none';
        document.getElementById('aboutMe4').style.display = 'none';
        if (isMobile()) {
            document.getElementById('aboutMe5').style.display = 'none';
            document.getElementById('aboutMe6').style.display = 'none';
            document.getElementById('aboutMe7').style.display = 'none';
            document.getElementById('demoMobile').style.display = 'block';
            document.getElementById('demoMobile2').style.display = 'block';
            document.getElementById('demoMobile3').style.display = 'block';
            document.getElementById('demoMobile4').style.display = 'block';
            document.getElementById('demoMobile5').style.display = 'none';
        }
    });
    document.getElementById('btnForm').addEventListener('click', function() {
        document.getElementById('Home').style.display = 'none';
        document.getElementById('Home2').style.display = 'none';
        document.getElementById('Home3').style.display = 'none';
        document.getElementById('demo').style.display = 'none';
        document.getElementById('Form').style.display = 'block';
        document.getElementById('FormIntro').style.display = 'block';
        document.getElementById('logoScreen').style.display = 'none';
        document.getElementById('aboutMe').style.display = 'none';
        document.getElementById('aboutMe2').style.display = 'none';
        document.getElementById('aboutMe3').style.display = 'none';
        document.getElementById('aboutMe4').style.display = 'none';
        if (isMobile()) {
            document.getElementById('aboutMe5').style.display = 'none';
            document.getElementById('aboutMe6').style.display = 'none';
            document.getElementById('aboutMe7').style.display = 'none';
            document.getElementById('demoMobile').style.display = 'none';
            document.getElementById('demoMobile2').style.display = 'none';
            document.getElementById('demoMobile3').style.display = 'none';
            document.getElementById('demoMobile4').style.display = 'none';
            document.getElementById('demoMobile5').style.display = 'none';
        }
    });
    document.getElementById('btnAboutMe').addEventListener('click', function() {
        document.getElementById('Home').style.display = 'none';
        document.getElementById('Home2').style.display = 'none';
        document.getElementById('Home3').style.display = 'none';
        document.getElementById('demo').style.display = 'none';
        document.getElementById('Form').style.display = 'none';
        document.getElementById('FormIntro').style.display = 'none';
        document.getElementById('logoScreen').style.display = 'none';
        document.getElementById('aboutMe').style.display = 'block';
        document.getElementById('aboutMe2').style.display = 'block';
        document.getElementById('aboutMe3').style.display = 'block';
        document.getElementById('aboutMe4').style.display = 'block';
        if (isMobile()) {
            document.getElementById('aboutMe5').style.display = 'block';
            document.getElementById('aboutMe6').style.display = 'block';
            document.getElementById('aboutMe7').style.display = 'block';
            document.getElementById('demoMobile').style.display = 'none';
            document.getElementById('demoMobile2').style.display = 'none';
            document.getElementById('demoMobile3').style.display = 'none';
            document.getElementById('demoMobile4').style.display = 'none';
            document.getElementById('demoMobile5').style.display = 'none';
        }
    });
    document.getElementById('visualizer').addEventListener('click', function() {
        document.getElementById('Home').style.display = 'none';
        document.getElementById('Home2').style.display = 'none';
        document.getElementById('Home3').style.display = 'none';
        document.getElementById('demo').style.display = 'none';
        document.getElementById('Form').style.display = 'none';
        document.getElementById('FormIntro').style.display = 'none';
        document.getElementById('logoScreen').style.display = 'block';
        document.getElementById('aboutMe').style.display = 'none';
        document.getElementById('aboutMe2').style.display = 'none';
        document.getElementById('aboutMe3').style.display = 'none';
        document.getElementById('aboutMe4').style.display = 'none';
        if (isMobile()) {
            document.getElementById('aboutMe5').style.display = 'none';
            document.getElementById('aboutMe6').style.display = 'none';
            document.getElementById('aboutMe7').style.display = 'none';
            document.getElementById('demoMobile').style.display = 'none';
            document.getElementById('demoMobile2').style.display = 'none';
            document.getElementById('demoMobile3').style.display = 'none';
            document.getElementById('demoMobile4').style.display = 'none';
            document.getElementById('demoMobile5').style.display = 'none';
        }
    });
    document.getElementById('btnHome2').addEventListener('click', function() {
        document.getElementById('Home').style.display = 'block';
        document.getElementById('Home2').style.display = 'block';
        document.getElementById('Home3').style.display = 'block';
        document.getElementById('demo').style.display = 'block';
        document.getElementById('Form').style.display = 'none';
        document.getElementById('FormIntro').style.display = 'none';
        document.getElementById('logoScreen').style.display = 'none';
        document.getElementById('aboutMe').style.display = 'none';
        document.getElementById('aboutMe2').style.display = 'none';
        document.getElementById('aboutMe3').style.display = 'none';
        document.getElementById('aboutMe4').style.display = 'none';
        if (isMobile()) {
            document.getElementById('aboutMe5').style.display = 'none';
            document.getElementById('aboutMe6').style.display = 'none';
            document.getElementById('aboutMe7').style.display = 'none';
            document.getElementById('demoMobile').style.display = 'block';
            document.getElementById('demoMobile2').style.display = 'block';
            document.getElementById('demoMobile3').style.display = 'block';
            document.getElementById('demoMobile4').style.display = 'block';
            document.getElementById('demoMobile5').style.display = 'block';
        }
    });
    document.getElementById('btnForm2').addEventListener('click', function() {
        document.getElementById('Home').style.display = 'none';
        document.getElementById('Home2').style.display = 'none';
        document.getElementById('Home3').style.display = 'none';
        document.getElementById('demo').style.display = 'none';
        document.getElementById('Form').style.display = 'block';
        document.getElementById('FormIntro').style.display = 'block';
        document.getElementById('logoScreen').style.display = 'none';
        document.getElementById('aboutMe').style.display = 'none';
        document.getElementById('aboutMe2').style.display = 'none';
        document.getElementById('aboutMe3').style.display = 'none';
        document.getElementById('aboutMe4').style.display = 'none';
        if (isMobile()) {
            document.getElementById('aboutMe5').style.display = 'none';
            document.getElementById('aboutMe6').style.display = 'none';
            document.getElementById('aboutMe7').style.display = 'none';
            document.getElementById('demoMobile').style.display = 'none';
            document.getElementById('demoMobile2').style.display = 'none';
            document.getElementById('demoMobile3').style.display = 'none';
            document.getElementById('demoMobile4').style.display = 'none';
            document.getElementById('demoMobile5').style.display = 'none';
        }
    });
    document.getElementById('btnAboutMe2').addEventListener('click', function() {
        document.getElementById('Home').style.display = 'none';
        document.getElementById('Home2').style.display = 'none';
        document.getElementById('Home3').style.display = 'none';
        document.getElementById('demo').style.display = 'none';
        document.getElementById('Form').style.display = 'none';
        document.getElementById('FormIntro').style.display = 'none';
        document.getElementById('logoScreen').style.display = 'none';
        document.getElementById('aboutMe').style.display = 'block';
        document.getElementById('aboutMe2').style.display = 'block';
        document.getElementById('aboutMe3').style.display = 'block';
        document.getElementById('aboutMe4').style.display = 'block';
        if (isMobile()) {
            document.getElementById('aboutMe5').style.display = 'block';
            document.getElementById('aboutMe6').style.display = 'block';
            document.getElementById('aboutMe7').style.display = 'block';
            document.getElementById('demoMobile').style.display = 'none';
            document.getElementById('demoMobile2').style.display = 'none';
            document.getElementById('demoMobile3').style.display = 'none';
            document.getElementById('demoMobile4').style.display = 'none';
            document.getElementById('demoMobile5').style.display = 'none';
        }
    });
});