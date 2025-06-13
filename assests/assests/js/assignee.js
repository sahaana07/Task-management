var assignees = [
  {
    assigneename: "Sarah Anderson",
    designation: "Product Designer",
    taskcompleted: "10",
    taskpending: "4",
    tasks: [{name:"Wireframe homepage",completed:true},
            {name:"Update design system",completed:false},
            {name:"Create user flow",completed:false},
            {name:"Review mobile UI",completed:false}]
  },
  {
    assigneename: "Michael Chen",
    designation: "Frontend Developer",
    taskcompleted: "8",
    taskpending: "3",
    tasks: [{name:"Fix navbar bug",completed:true},
            {name:"Implement dashboard chart",completed:false},
            {name:"Optimize image loading",completed:false}]
  },
  {
    assigneename: "Priya Kapoor",
    designation: "QA Engineer",
    taskcompleted: "12",
    taskpending: "2",
    tasks: [{name:"Smoke test v1.2",completed:true},
            {name:"Write test cases",completed:false},
            {name:"Regression testing",completed:false}]
  },
  {
    assigneename: "Daniel Lee",
    designation: "Backend Developer",
    taskcompleted: "9",
    taskpending: "5",
    tasks: [{name:"Build auth API",completed:true},
            {name:"Fix token refresh issue",completed:false},
            {name:"Update DB schema",completed:false}]
  },
  {
    assigneename: "Emily Rivera",
    designation: "UI/UX Intern",
    taskcompleted: "5",
    taskpending: "6",
    tasks: [{name:"Prototype user journey",completed:true},
            {name:"Collect design feedback",completed:false},
            {name:"Design login page",completed:false}]
  },
  {
    assigneename: "Ravi Shankar",
    designation: "DevOps Engineer",
    taskcompleted: "11",
    taskpending: "1",
    tasks: [{name:"Setup CI/CD pipeline",completed:true},
            {name:"Monitor server load",completed:false},
            {name:"Deploy staging build",completed:false}]
  },
  {
    assigneename: "Linda Martinez",
    designation: "Scrum Master",
    taskcompleted: "7",
    taskpending: "2",
    tasks: [{name:"Conduct sprint retro",completed:true},
            {name:"Create sprint board",completed:false},
            {name:"Update JIRA status",completed:false}]
  },
  {
    assigneename: "Akash Verma",
    designation: "Business Analyst",
    taskcompleted: "6",
    taskpending: "3",
    tasks: [{name:"Gather client requirements",completed:true},
            {name:"Analyze workflow",completed:false},
            {name:"Prepare BRD",completed:false}]
  },
  {
    assigneename: "Fatima Noor",
    designation: "Content Strategist",
    taskcompleted: "9",
    taskpending: "1",
    tasks: [{name:"Plan onboarding content",completed:true},
            {name:"Update knowledge base",completed:false},
            {name:"Write feature release notes",completed:false}]
  },
  {
    assigneename: "Ethan Brooks",
    designation: "Tech Lead",
    taskcompleted: "13",
    taskpending: "0",
    tasks: [{name:"Code review for team",completed:true},
            {name:"Resolve merge conflicts",completed:false},
            {name:"Architect new module",completed:false}]
  }
];
// Global variable to track current modal index
let currentModalIndex = 0;

$(document).ready(function() {
    // Initialize assignee cards
    initializeAssigneeCards();
    
    // Set up modal event handlers
    setupModalHandlers();
});

function initializeAssigneeCards() {
    $(".assignee-list").empty();
    
    assignees.forEach((assignee, index) => {
        let completed = parseInt(assignee.taskcompleted);
        let pending = parseInt(assignee.taskpending);
        let total = completed + pending;
        let progress = total === 0 ? 0 : Math.round((completed / total) * 100);

        $(".assignee-list").append(`
            <li class="card">
                <div class="card-content"></div>
                <div class="card-info">
                    <h2 class="card-name">${assignee.assigneename}</h2>
                    <p class="card-title">${assignee.designation}</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${progress}%;" 
                             aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
                            ${progress}%
                        </div>
                    </div>
                    <div class="card-stats">
                        <div class="stat">
                            <span class="stat-value">${pending}</span>
                            <span class="stat-label">Pending</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${completed}</span>
                            <span class="stat-label">Completed</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <button class="action-button primary" data-index="${index}">
                            <span>Assigned Tasks</span>
                        </button>
                    </div>
                </div>
            </li>
        `);
    });
}

function setupModalHandlers() {
    // Handle assignee button clicks
    $(document).on('click', '.action-button.primary', function(e) {
        e.preventDefault();
        currentModalIndex = $(this).data('index');
        showModal(currentModalIndex);
    });

    // Close modal
    $(document).on('click', '.close-post, .progressmodal-sandbox', function() {
        $('#progressmodal-name').hide();
    });

    // Next button
    $(document).on('click', '.next-post', function(e) {
        e.preventDefault();
        if (currentModalIndex < assignees.length - 1) {
            currentModalIndex++;
            showModal(currentModalIndex);
        }
    });

    // Previous button
    $(document).on('click', '.prev-post', function(e) {
        e.preventDefault();
        if (currentModalIndex > 0) {
            currentModalIndex--;
            showModal(currentModalIndex);
        }
    });
}

function showModal(index) {
    const assignee = assignees[index];
    
    // Update modal content
    $('#modal-assignee-name').text(assignee.assigneename);
    $('#modal-assignee-designation').text(assignee.designation);
    
    // Clear and repopulate tasks table
    const $taskTable = $('#modal-tasks').empty();
    
    assignee.tasks.forEach(task => {
        const statusClass = task.completed ? 'status-completed' : 'status-pending';
        const statusText = task.completed ? 'Completed' : 'Pending';
        
        $taskTable.append(`
            <tr>
                <td>${task.name}</td>
                <td class="${statusClass}">${statusText}</td>
            </tr>
        `);
    });
    
    // Prevent background scrolling
    $('body').addClass('modal-open');
    
    // Show modal
    $('#progressmodal-name').show();
    
    // Update navigation buttons state
    updateNavButtons();
}

// Close modal
$(document).on('click', '.close-post, .progressmodal-sandbox', function() {
    $('#progressmodal-name').hide();
    // Re-enable background scrolling
    $('body').removeClass('modal-open');
});

function updateNavButtons() {
    // Disable Previous button if at first item
    $('.prev-post').toggleClass('disabled', currentModalIndex === 0);
    
    // Disable Next button if at last item
    $('.next-post').toggleClass('disabled', currentModalIndex === assignees.length - 1);
    
    // Also disable the actual button element
    $('.prev-post').prop('disabled', currentModalIndex === 0);
    $('.next-post').prop('disabled', currentModalIndex === assignees.length - 1);
}