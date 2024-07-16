document.addEventListener('DOMContentLoaded', function() {
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
    });

});