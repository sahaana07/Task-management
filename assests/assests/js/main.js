 document.querySelectorAll('.dropdown-toggle').forEach(item => {
            item.addEventListener('click', event => {
                if (event.target.classList.contains('dropdown-toggle')) {
                    event.target.classList.toggle('toggle-change');
                } else if (event.target.parentElement.classList.contains('dropdown-toggle')) {
                    event.target.parentElement.classList.toggle('toggle-change');
                }
            });
        });

        function showContent(content) {
            document.getElementById("contentTitle").textContent = content + " Page";
            document.getElementById("mainContent").innerHTML = `
                <h1>${content} Page</h1>
                
            `;
        }
       document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

function showContent(viewId) {
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => {
        if (section.id === viewId) {
            section.classList.remove('d-none');
        } else {
            section.classList.add('d-none');
        }
    });
}