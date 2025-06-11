var teamlist=[
    {
        snum:"1",
        tname:"Development",
        tmembers:"Harini,Harish,Ravi,Tejashree,Naveen",
        tlead:"Ashwin"
    },
    {
        snum:"2",
        tname:"Front End",
        tmembers:"Ragu,Hema,Priya",
        tlead:"Ravi"
    },
    {
        snum:"3",
        tname:"Back End",
        tmembers:"Neha,Ragu,Prabhu,Thanvi",
        tlead:"Naveen"
    },
    {
        snum:"4",
        tname:"Team 4",
        tmembers:"Praveen,Thanushree,Joshi",
        tlead:"Sony"
    },
    {
        snum:"5",
        tname:"Team 5",
        tmembers:"Harini,Harish,Ravi,Tejashree,Naveen",
        tlead:"Akash"
    },
    {
        snum:"6",
        tname:"Team 6",
        tmembers:"Ragu,Hema,Priya",
        tlead:"Hari"
    },
    {
        snum:"7",
        tname:"Team 7",
        tmembers:"Neha,Ragu,Prabhu,Thanvi",
        tlead:"Hema"
    },
    {
        snum:"8",
        tname:"Team 8",
        tmembers:"Praveen,Thanushree,Joshi",
        tlead:"Raghu"
    },
    {
        snum:"9",
        tname:"Development",
        tmembers:"Harini,Harish,Ravi,Tejashree,Naveen",
        tlead:"ashwin"
    },
    {
        snum:"10",
        tname:"Front End",
        tmembers:"Ragu,Hema,Priya",
        tlead:"ashwin"
    },
    {
        snum:"11",
        tname:"Back End",
        tmembers:"Neha,Ragu,Prabhu,Thanvi",
        tlead:"ashwin"
    },
    {
        snum:"12",
        tname:"Team 12",
        tmembers:"Praveen,Thanushree,Joshi",
        tlead:"ashwin"
    },
    {
        snum:"13",
        tname:"Team 13",
        tmembers:"Harini,Harish,Ravi,Tejashree,Naveen",
        tlead:"ashwin"
    },
    {
        snum:"14",
        tname:"Team 14",
        tmembers:"Ragu,Hema,Priya",
        tlead:"ashwin"
    },
    {
        snum:"15",
        tname:"Team 15",
        tmembers:"Neha,Ragu,Prabhu,Thanvi",
        tlead:"ashwin"
    },
    {
        snum:"16",
        tname:"Team 16",
        tlead:"ashwin",
        tmembers:"Praveen,Thanushree,Joshi"
    }
]
/*var colorMap = {
  A: "#f94144", B: "#f3722c", C: "#f8961e", D: "#f9c74f",
  E: "#90be6d", F: "#43aa8b", G: "#577590", H: "#91cee7",
  I: "#9b5de5", J: "#ea94c7", K: "#00bbf9", L: "#00f5d4",
  M: "#ff006e", N: "#b898e3", O: "#3a86ff", P: "#e4c980",
  Q: "#fb5607", R: "#da96b4", S: "#aacc00", T: "#7ec3b1",
  U: "#5f0f40", V: "#ff9f1c", W: "#2ec4b6", X: "#e71d36",
  Y: "#6a4c93", Z: "#118ab2"
};
var colorMap = {
  A: "#5A8DEE", // soft blue
  B: "#39DA8A", // soft green
  C: "#F9D57A", // gentle yellow
  D: "#00CFDD", // cyan
  E: "#A77FF5", // violet
  F: "#FF82A9", // soft pink
  G: "#6C8EBF", // dusty blue
  H: "#FDAFAB", // soft coral
  I: "#B0C4DE", // light steel blue
  J: "#B39CD0", // lavender
  K: "#77D6D0", // mint teal
  L: "#F4BFBF", // light blush
  M: "#E2CFEA", // muted purple
  N: "#C8D5B9", // mossy green
  O: "#F6D6AD", // warm beige
  P: "#A3C9A8", // sage
  Q: "#FEC8D8", // peachy pink
  R: "#B8B3E9", // lilac
  S: "#C9CCD5", // neutral grey blue
  T: "#A6DCEF", // baby blue
  U: "#D0BCFF", // pastel purple
  V: "#F6C1C1", // soft red
  W: "#8AD3D6", // teal cyan
  X: "#D7E3FC", // very light blue
  Y: "#D1CFE2", // muted lavender
  Z: "#B6D7A8"  // pastel green
};


var teamtableBody = document.querySelector("#teams tbody");
var trows = "";*/
var teamlistlen = teamlist.length;
$(".team-box").empty();

for (var i = 0; i < teamlistlen; i++) {
  let detailId = `details${i}`;
  
  // Convert member string to a numbered list
  let membersArray = teamlist[i].tmembers.split(',');
  let memberListHTML = '<ol>';
  for (let member of membersArray) {
    memberListHTML += `<li>${member.trim()}</li>`;
  }
  memberListHTML += '</ol>';
  
  let teamHtml =
    '<div class="card-container">' +
      `<div class="clickable-row" data-target="${detailId}">` +
        teamlist[i].tname +
      '</div>' +
      `<div class="detail-row" id="${detailId}" style="display:none;">` +
        '<strong>Team Lead:</strong> ' + teamlist[i].tlead + '<br>' +
        '<strong>Team Members:</strong>' + memberListHTML +
      '</div>' +
    '</div>';

  $(".team-box").append(teamHtml);
}


/*var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.forEach(function (tooltipTriggerEl) {
  new bootstrap.Tooltip(tooltipTriggerEl);
});
*/
 /*document.querySelectorAll('.clickable-row').forEach(row => {
    row.addEventListener('click', () => {
      const targetId = row.getAttribute('data-target');
      const detailRow = document.getElementById(targetId);

      if (detailRow.style.display === 'table-row') {
        detailRow.style.display = 'none';
      } else {
        detailRow.style.display = 'table-row';
      }
    });
  });*/
  $(document).on('click', '.clickable-row', function() {
  var targetId = $(this).data('target');
  $('#' + targetId).slideToggle(); // Smooth toggle
});