document.addEventListener('DOMContentLoaded', function() {
    console.log('Visibility settings turning ON');
    document.getElementById('btnHome').addEventListener('click', function() {
        document.getElementById('Home').style.display = 'block';
        document.getElementById('demo').style.display = 'block';
        document.getElementById('Form').style.display = 'none';
        document.getElementById('logoScreen').style.display = 'none';
    });
    document.getElementById('btnForm').addEventListener('click', function() {
        document.getElementById('Home').style.display = 'none';
        document.getElementById('demo').style.display = 'none';
        document.getElementById('Form').style.display = 'block';
        document.getElementById('logoScreen').style.display = 'none';
    });
    document.getElementById('visualizer').addEventListener('click', function() {
        document.getElementById('Home').style.display = 'none';
        document.getElementById('demo').style.display = 'none';
        document.getElementById('Form').style.display = 'none';
        document.getElementById('logoScreen').style.display = 'block';
    });

});