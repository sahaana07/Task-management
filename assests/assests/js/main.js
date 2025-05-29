function openNav() {
	document.getElementById("sideMenu")
		.style.width = "300px";
	document.getElementById("contentArea")
		.style.marginLeft = "300px";
}

function closeNav() {
	document.getElementById("sideMenu")
		.style.width = "0";
	document.getElementById("contentArea")
		.style.marginLeft = "0";
}
function showContent(content) {
	document.getElementById("contentTitle")
		.textContent = content + " page";
}
 document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById("myChart").getContext("2d");

  const chartData = {
    labels: ["To Do", "In Progress", "Completed"],
    datasets: [{
      label: "Task Progress",
      data: [40, 30, 30],
      backgroundColor: ["#ff7e5f", "#6a11cb", "#00c9ff"],
      borderWidth: 5,
      hoverOffset: 10,
    }]
  };

  new Chart(ctx, {
    type: "doughnut",
    data: chartData,
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      cutout: '70%'
    }
  });
});
