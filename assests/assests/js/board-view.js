const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
document.getElementById('taskForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  alert('Task submitted!');
  const modal = bootstrap.Modal.getInstance(document.getElementById('addTaskModal'));
  modal.hide();
});



function toggleDropdown() {
  const list = document.getElementById("assigneeList");
  list.style.display = list.style.display === "block" ? "none" : "block";
}

function updateSelected() {
  const checkboxes = document.querySelectorAll('#assigneeList input[type="checkbox"]');
  const selected = [];
  checkboxes.forEach(cb => {
    if (cb.checked) selected.push(cb.value);
  });

  const selectedBox = document.querySelector('.selected-box');
  selectedBox.textContent = selected.length ? selected.join(', ') : "Select Assignees";
}

// Optional: Close dropdown if clicked outside
window.addEventListener('click', function (e) {
  const dropdown = document.getElementById('assigneeDropdown');
  if (!dropdown.contains(e.target)) {
    document.getElementById("assigneeList").style.display = "none";
  }
});
