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
// Close navbar collapse on nav-link click (for smooth collapse on mobile)
    document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(document.querySelector('.navbar-collapse'));
        if (bsCollapse && document.querySelector('.navbar-collapse').classList.contains('show')) {
          bsCollapse.hide();
        }
      });
    });

   
    function showContent(pageId, elem) {
     
      document.querySelectorAll('.page-content').forEach(div => (div.style.display = 'none'));

      
      const contentDiv = document.getElementById(pageId);
      if (contentDiv) contentDiv.style.display = 'block';

      
      document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
      });
      if (elem) elem.classList.add('active');

      
      const title = document.getElementById('contentTitle');
      title.textContent = elem ? elem.textContent.trim() : '';

     
    }

    
    window.onload = () => {
      showContent('boardview', document.querySelector('.navbar-nav .nav-link.active'));
    };