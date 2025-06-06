document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
      const target = event.target.classList.contains('dropdown-toggle')
        ? event.target
        : event.target.parentElement.classList.contains('dropdown-toggle')
          ? event.target.parentElement
          : null;
      if (target) target.classList.toggle('toggle-change');
    });
  });

  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      /*document.querySelectorAll('.page-content').forEach(div => {
        div.style.display = 'none';
      });
      const pageId = this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
      if (pageId) {
        const contentDiv = document.getElementById(pageId);
        if (contentDiv) contentDiv.style.display = 'block';
      }
      const title = document.getElementById('contentTitle');
      if (this.textContent.trim().toLowerCase() === 'board') {
        title.textContent = '';
        title.style.display = 'none';
      } else {
        title.textContent = this.textContent.trim() + ' Page';
        title.style.display = 'block';
      }*/
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (!bsCollapse) {
          bsCollapse = new bootstrap.Collapse(navbarCollapse);
        }
        bsCollapse.hide();
      }
    });
  });

  const activeLink = document.querySelector('.navbar-nav .nav-link.active');
  if (activeLink) {
    activeLink.click();
  } else {
    const defaultContent = document.getElementById('boardview');
    if (defaultContent) defaultContent.style.display = 'block';
    const title = document.getElementById('contentTitle');
    title.textContent = '';
    title.style.display = 'none';
  }
});
