var progress=[
    {
    Teamname:"Development",    
    task1:"painting",
    task2:"drawing",
    Projectname:"Project 8",
    status1:"completed",
    status2:"On-process",
    assignee1:"harini",
    assignee2:"hema",
    accountability1:"praveen",
    accountability2:"vishnu",
    overallprogress:"60",
    totaltasks:"2 tasks"
  },
  {
    Teamname:"team 2",    
    task1:"task 1",
    task2:"task 2",
    Projectname:"Project 9",
    status1:"On-hold",
    status2:"To-do",
    assignee1:"hari",
    assignee2:"vishwa",
    accountability1:"hema",
    accountability2:"priya",
    overallprogress:"10",
    totaltasks:"4 tasks"
  },
  {
    Teamname:"team 3",
    task1:"Floor 3 pipeline",
    task2:"task 2",
    Projectname:"Project 10",
    status1:"completed",
    status2:"to-do",
    assignee1:"prasadh",
    assignee2:"meena",
    accountability1:"deepa",
    accountability2:"bavana",
    overallprogress:"30",
    totaltasks:"3 tasks"
  },
  {
    Teamname:"team 4",
    task1:"Tasks",
    task2:"task 2",
    Projectname:"Project 4",
    status1:"completed",
    status2:"to-do",
    assignee1:"prasadh",
    assignee2:"meena",
    accountability1:"deepa",
    accountability2:"bavana",
    overallprogress:"30",
    totaltasks:"3 tasks"
  },
  {
    Teamname:"team 5",
    task1:"Floor 3 pipeline",
    task2:"task 2",
    Projectname:"Project 6",
    status1:"On-hold",
    status2:"To-do",
    assignee1:"hari",
    assignee2:"vishwa",
    accountability1:"hema",
    accountability2:"priya",
    overallprogress:"10",
    totaltasks:"4 tasks"
  }
]
var progresslen = progress.length;
//Empty container:
$(".progress-box").empty();
//Loop:
for (let i = 0; i < progresslen; i++) {
  var listItem =
    '<div class="card1">' +
        '<div class="percent">' +
            '<svg>' +
                '<circle cx="70" cy="70" r="65"></circle>' +
                '<circle cx="70" cy="70" r="65" style="--percent: '+progress[i].overallprogress+'"></circle>' +
            '</svg>' +
            '<div class="number">' +
                '<h3>' + progress[i].overallprogress + '<span>%</span></h3>' +
            '</div>' +
        '</div>' +
        '<h3 class="heading3">' + progress[i].Teamname + '</h3>' +
        '<p class="small">' + progress[i].totaltasks + '</p>' +
        '<div class="go-corner">' +
            '<div class="go-arrow">' +
                '<button class="arrow" data-obj="' + i + '">→</button>' +
            '</div>' +
        '</div>' +
    '</div>';
  $(".progress-box").append(listItem);
}


var thisElement = 0;

function innerContent(index) {
  const team = progress[index];

  // Set the title (you can choose between Teamname or Projectname)
  $(".inner-title").html(`${team.Teamname}`);

  // Populate the table
  const tableBody = document.querySelector("#modaltable tbody");
  let rows = "";

  rows += `
    <tr>
      <td class="taskname">${team.task1}</td>
      <td class="acc">${team.accountability1}</td>
      <td class="ass">${team.assignee1}</td>
      <td class="status">${team.status1}</td>
    </tr>
    <tr>
      <td class="taskname">${team.task2}</td>
      <td class="acc">${team.accountability2}</td>
      <td class="ass">${team.assignee2}</td>
      <td class="status">${team.status2}</td>
    </tr>
  `;

  tableBody.innerHTML = rows;
}



//Open post:
$(".progress-box").on("click", ".arrow", function(e) {
  e.preventDefault();
  thisElement = $(this).attr("data-obj");
  innerContent(thisElement);
  $(".progressmodal").css({ "display": "block" });
  dissBtn();
});


//Close post:
$(".close-post, .progressmodal-sandbox").click(function(){
  $(".progressmodal").css({"display":"none"});
});

//Next post:
$(".next-post").click(function(e){
  e.preventDefault();
  if (thisElement<progresslen-1) {
    thisElement = parseInt(thisElement) + 1;
    innerContent(thisElement);
    dissBtn();
  };
});

//Prev post:
$(".prev-post").click(function(e){
  e.preventDefault();
  if (thisElement>0) {
    thisElement = parseInt(thisElement) - 1;
    innerContent(thisElement);
    dissBtn();
  };
});

//Button disable:
function dissBtn(){
  $(".prev-post, .next-post").removeClass("disabled");
  if (thisElement<=0){
    $(".prev-post").addClass("disabled");
  }
  else if (thisElement>=progresslen-1){
    $(".next-post").addClass("disabled");
  };
};

