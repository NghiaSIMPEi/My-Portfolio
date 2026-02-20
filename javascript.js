document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('menu-toggle');
    var items = document.getElementById('menu-items');
    if (toggle && items) {
        toggle.addEventListener('click', function() {
            items.classList.toggle('active');
        });
    }
});