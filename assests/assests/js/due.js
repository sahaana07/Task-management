$(document).ready(function () {
    var posttoday=[
    {
    Taskstatus:"Completed",
    Projectname:"Project 6",
    Taskname:"electric walk-through",
    Taskpriority:"Low",
    Taskdue:"Due:Jan 10",
    Completion:"4/5",
    Taskaccountability:"Accountablility: Naveen",
    Personaccountable:"Naveen",
    Taskprogress:"10",
    Taskassignee:"Avinash Manivaran",
    Startdate:"-",
    Promiseddate:"10/01/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"To-do",
    Projectname:"Project 1",
    Taskname:"painting",
    Taskpriority:"Low",
    Taskdue:"Due:Sept 7",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Harini",
    Personaccountable:"Harini",
    Taskprogress:"10",
    Taskassignee:"Naveen,Surya,subha",
    Startdate:"01/08/2019",
    Promiseddate:"07/08/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"To-do",
    Projectname:"Project 2",
    Taskname:"Floor 3 pipeline",
    Taskpriority:"High",
    Taskdue:"Due:Sept 10",
    Completion:"2/5",
    Taskaccountability:"Accountablility: Ram",
    Personaccountable:"Ram",
    Taskprogress:"0",
    Taskassignee:"aparna.s",
    Startdate:"-",
    Promiseddate:"10/09/2020",
    assigneeimg:""
  },{
    Taskstatus:"On-process",
    Projectname:"Project 7",
    Taskname:"Tasks",
    Taskpriority:"Low",
    Taskdue:"Due:Jul 10",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Anushree",
    Personaccountable:"Anushree",
    Taskprogress:"50",
    Taskassignee:"Aashik,Mithun",
    Startdate:"14/06/2019",
    Promiseddate:"10/07/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"On-hold",
    Projectname:"Project 2",
    Taskname:"Floor 3 pipeline",
    Taskpriority:"High",
    Taskdue:"Due:Sept 10",
    Completion:"2/5",
    Taskaccountability:"Accountablility: Ram",
    Personaccountable:"Ram",
    Taskprogress:"0",
    Taskassignee:"aparna.s",
    Startdate:"-",
    Promiseddate:"10/09/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"On-process",
    Projectname:"Project 8",
    Taskname:"Inspect interior",
    Taskpriority:"High",
    Taskdue:"Due:Nov 11",
    Completion:"2/5",
    Taskaccountability:"Accountablility: Aravindhan",
    Personaccountable:"Aravindhan",
    Taskprogress:"30",
    Taskassignee:"helen ,collins",
    Startdate:"01/08/2019",
    Promiseddate:"11/11/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"To-do",
    Projectname:"Project Alpha",
    Taskname:"Redesign Landing Page",
    Taskpriority:"High",
    Taskdue:"Due:Nov 20",
    Completion:"3/5",
    Taskaccountability:"Accountablility: John D.",
    Personaccountable:"Harini",
    Taskprogress:"25",
    Taskassignee:"Harish,bavya",
    Startdate:"05/06/2025",
    Promiseddate:"20/11/2025",
    assigneeimg:""
  },
  {
    Taskstatus:"On-process",
    Projectname:"Project 23",
    Taskname:"Monthly fire",
    Taskpriority:"High",
    Taskdue:"Due:Sept 15",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Harsh",
    Personaccountable:"Harish",
    Taskprogress:"30",
    Taskassignee:"Fathima Yilmaz,chaithanya",
    Startdate:"01/08/2019",
    Promiseddate:"15/09/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"Completed",
    Projectname:"Project 7",
    Taskname:"Tasks",
    Taskpriority:"Low",
    Taskdue:"Due:Jul 10",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Anushree",
    Personaccountable:"Anushree",
    Taskprogress:"50",
    Taskassignee:"Aashik,Mithun",
    Startdate:"14/06/2019",
    Promiseddate:"10/07/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"On-process",
    Projectname:"Project 11",
    Taskname:"Material cost",
    Taskpriority:"Low",
    Taskdue:"Due:May 15",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Anushka",
    Personaccountable:"Anushka",
    Taskprogress:"0",
    Taskassignee:"Ram,madhuja,haridhra",
    Startdate:"01/08/2019",
    Promiseddate:"15/05/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"On-hold",
    Projectname:"Project 3",
    Taskname:"Interior design",
    Taskpriority:"Medium",
    Taskdue:"Due:Oct 9",
    Completion:"1/5",
    Taskaccountability:"Accountablility: hema",
    Personaccountable:"Hema",
    Taskprogress:"100",
    Taskassignee:"charles stone",
    Startdate:"09/01/2020",
    Promiseddate:"09/10/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"On-process",
    Projectname:"Project 9",
    Taskname:"Interior",
    Taskpriority:"Low",
    Taskdue:"Due:Nov 21",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Thankvika",
    Personaccountable:"Thanvika",
    Taskprogress:"0",
    Taskassignee:"Stephen",
    Startdate:"21/09/2020",
    Promiseddate:"21/11/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"Completed",
    Projectname:"Project 23",
    Taskname:"Monthly fire",
    Taskpriority:"High",
    Taskdue:"Due:Sept 15",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Harsh",
    Personaccountable:"Harish",
    Taskprogress:"30",
    Taskassignee:"Fathima Yilmaz,chaithanya",
    Startdate:"01/08/2019",
    Promiseddate:"15/09/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"Completed",
    Projectname:"Project 11",
    Taskname:"Material cost",
    Taskpriority:"Low",
    Taskdue:"Due:May 15",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Anushka",
    Personaccountable:"Anushka",
    Taskprogress:"0",
    Taskassignee:"Ram,madhuja,haridhra",
    Startdate:"01/08/2019",
    Promiseddate:"15/05/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"To-do",
    Projectname:"Project 4",
    Taskname:"Interior design",
    Taskpriority:"High",
    Taskdue:"Due:Sept 28",
    Completion:"4/5",
    Taskaccountability:"Accountablility: yuvan",
    Personaccountable:"yuvan",
    Taskprogress:"0",
    Taskassignee:"aparna.s,Aravindhan Rajendi",
    Startdate:"09/04/2020",
    Promiseddate:"28/09/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"Completed",
    Projectname:"Project 9",
    Taskname:"Interior",
    Taskpriority:"Low",
    Taskdue:"Due:Nov 21",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Thankvika",
    Personaccountable:"Thanvika",
    Taskprogress:"0",
    Taskassignee:"Stephen",
    Startdate:"21/09/2020",
    Promiseddate:"21/11/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"On-process",
    Projectname:"Project Alpha",
    Taskname:"Redesign Landing Page",
    Taskpriority:"High",
    Taskdue:"Due:Nov 20",
    Completion:"3/5",
    Taskaccountability:"Accountablility: John D.",
    Personaccountable:"Harini",
    Taskprogress:"25",
    Taskassignee:"Harish,bavya",
    Startdate:"05/06/2025",
    Promiseddate:"20/11/2025",
    assigneeimg:""
  },
  {
    Taskstatus:"To-do",
    Projectname:"Project 5",
    Taskname:"Install electric service panel",
    Taskpriority:"Low",
    Taskdue:"Due:Sept 22",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Hariprasath",
    Personaccountable:"Hariprasath",
    Taskprogress:"30",
    Taskassignee:"Tavisha,Muthu,Kavitha",
    Startdate:"11/09/2020",
    Promiseddate:"22/09/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"On-process",
    Projectname:"Project 1",
    Taskname:"painting",
    Taskpriority:"Low",
    Taskdue:"Due:Sept 7",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Harini",
    Personaccountable:"Harini",
    Taskprogress:"10",
    Taskassignee:"Unassigned",
    Startdate:"01/08/2019",
    Promiseddate:"07/08/2019",
    assigneeimg:""
  },
  
  {
    Taskstatus:"On-hold",
    Projectname:"Project 4",
    Taskname:"Interior design",
    Taskpriority:"High",
    Taskdue:"Due:Sept 28",
    Completion:"4/5",
    Taskaccountability:"Accountablility: yuvan",
    Personaccountable:"yuvan",
    Taskprogress:"0",
    Taskassignee:"aparna.s,Aravindhan Rajendi",
    Startdate:"09/04/2020",
    Promiseddate:"28/09/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"On-hold",
    Projectname:"Project 5",
    Taskname:"Install electric service panel",
    Taskpriority:"Low",
    Taskdue:"Due:Sept 22",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Hariprasath",
    Personaccountable:"Hariprasath",
    Taskprogress:"30",
    Taskassignee:"Tavisha,Muthu,Kavitha",
    Startdate:"11/09/2020",
    Promiseddate:"22/09/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"To-do",
    Projectname:"Project 3",
    Taskname:"Interior design",
    Taskpriority:"Medium",
    Taskdue:"Due:Oct 9",
    Completion:"1/5",
    Taskaccountability:"Accountablility: hema",
    Personaccountable:"Hema",
    Taskprogress:"100",
    Taskassignee:"charles stone",
    Startdate:"09/01/2020",
    Promiseddate:"09/10/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"Completed",
    Projectname:"Project 8",
    Taskname:"Inspect interior",
    Taskpriority:"High",
    Taskdue:"Due:Nov 11",
    Completion:"2/5",
    Taskaccountability:"Accountablility: Aravindhan",
    Personaccountable:"Aravindhan",
    Taskprogress:"30",
    Taskassignee:"helen ,collins",
    Startdate:"01/08/2019",
    Promiseddate:"11/11/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"To-do",
    Projectname:"Project 6",
    Taskname:"electric walk-through",
    Taskpriority:"Low",
    Taskdue:"Due:Jan 10",
    Completion:"4/5",
    Taskaccountability:"Accountablility: Naveen",
    Personaccountable:"Naveen",
    Taskprogress:"10",
    Taskassignee:"Avinash Manivaran",
    Startdate:"-",
    Promiseddate:"10/01/2020",
    assigneeimg:""
  }
]

    // Store the array globally to access from function
    window.posttoday = posttoday;

    $(".posts-today").empty();
    for (var i = 0; i < posttoday.length; i++) {
        var today = '<div class="textleft">' +
            '<button class="circle-btn" onclick="openDetailFromList(' + i + ')"></button>' +
            '<span class="task-text"> ' + posttoday[i].Taskname + '</span>' +
            '</div><hr>';
        $(".posts-today").append(today);
    }
}); 

function openDetailFromList(index) {
    localStorage.setItem("selectedTaskFromList", JSON.stringify(posttoday[index]));
    window.location.href = '../pages/detailedview.html';
}

$(document).ready(function () {
    var posttomorrow=[
    {
    Taskstatus:"Completed",
    Projectname:"Project 6",
    Taskname:"electric walk-through",
    Taskpriority:"Low",
    Taskdue:"Due:Jan 10",
    Completion:"4/5",
    Taskaccountability:"Accountablility: Naveen",
    Personaccountable:"Naveen",
    Taskprogress:"10",
    Taskassignee:"Avinash Manivaran",
    Startdate:"-",
    Promiseddate:"10/01/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"To-do",
    Projectname:"Project 1",
    Taskname:"painting",
    Taskpriority:"Low",
    Taskdue:"Due:Sept 7",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Harini",
    Personaccountable:"Harini",
    Taskprogress:"10",
    Taskassignee:"Naveen,Surya,subha",
    Startdate:"01/08/2019",
    Promiseddate:"07/08/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"To-do",
    Projectname:"Project 2",
    Taskname:"Floor 3 pipeline",
    Taskpriority:"High",
    Taskdue:"Due:Sept 10",
    Completion:"2/5",
    Taskaccountability:"Accountablility: Ram",
    Personaccountable:"Ram",
    Taskprogress:"0",
    Taskassignee:"aparna.s",
    Startdate:"-",
    Promiseddate:"10/09/2020",
    assigneeimg:""
  },{
    Taskstatus:"On-process",
    Projectname:"Project 7",
    Taskname:"Tasks",
    Taskpriority:"Low",
    Taskdue:"Due:Jul 10",
    Completion:"3/5",
    Taskaccountability:"Accountablility: Anushree",
    Personaccountable:"Anushree",
    Taskprogress:"50",
    Taskassignee:"Aashik,Mithun",
    Startdate:"14/06/2019",
    Promiseddate:"10/07/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"On-hold",
    Projectname:"Project 2",
    Taskname:"Floor 3 pipeline",
    Taskpriority:"High",
    Taskdue:"Due:Sept 10",
    Completion:"2/5",
    Taskaccountability:"Accountablility: Ram",
    Personaccountable:"Ram",
    Taskprogress:"0",
    Taskassignee:"aparna.s",
    Startdate:"-",
    Promiseddate:"10/09/2020",
    assigneeimg:""
  },
  {
    Taskstatus:"On-process",
    Projectname:"Project 8",
    Taskname:"Inspect interior",
    Taskpriority:"High",
    Taskdue:"Due:Nov 11",
    Completion:"2/5",
    Taskaccountability:"Accountablility: Aravindhan",
    Personaccountable:"Aravindhan",
    Taskprogress:"30",
    Taskassignee:"helen ,collins",
    Startdate:"01/08/2019",
    Promiseddate:"11/11/2019",
    assigneeimg:""
  },
  {
    Taskstatus:"To-do",
    Projectname:"Project Alpha",
    Taskname:"Redesign Landing Page",
    Taskpriority:"High",
    Taskdue:"Due:Nov 20",
    Completion:"3/5",
    Taskaccountability:"Accountablility: John D.",
    Personaccountable:"Harini",
    Taskprogress:"25",
    Taskassignee:"Harish,bavya",
    Startdate:"05/06/2025",
    Promiseddate:"20/11/2025",
    assigneeimg:""
  }
]

    // Store the array globally to access from function
    window.posttomorrow = posttomorrow;

    $(".posts-tomorrow").empty();
    for (var i = 0; i < posttomorrow.length; i++) {
        var tomorrow = '<div class="textleft">' +
            '<button class="circle-btn" onclick="openDetailFromList(' + i + ')"></button>' +
            '<span class="task-text"> ' + posttomorrow[i].Taskname + '</span>' +
            '</div><hr>';
        $(".posts-tomorrow").append(tomorrow);
    }
}); 

function openDetailFromList(index) {
    localStorage.setItem("selectedTaskFromList", JSON.stringify(posttomorrow[index]));
    window.location.href = '../pages/detailedview.html';
}