var experiences = [
	{
		title: "Software Engineer",
		company: "McGill Robotics",
		start: "Sept 2015",
		end: "Pre",
		location: "Montreal, QC, Canada",
		pointDescriptions:[
				"Set up a small unmanned aerial vehicle (UAV) and APM using ardupilot firmware.",
				"Set up simulation environments on robot operating system (ROS) for testing flying controller.",
				"Built a autonomous rover with an Arduino board and a sonar sensor.",
				"Implemented SLAM algorithm to map and navigate autonomously."
			],
		skills: ["ROS", "C++"]
	},{
		title: "Mechanical Engineer",
		company: "Chinese Academy of Sciences",
		start: "Mar 2013",
		end: "Aug 2013 ",
		location: "Beijing, China",
		pointDescriptions:[
				"In a combustion lab, designed the embedded system prototype of temperature control using SCM-51 development kit. Wrote sensors drivers using assembly language.",
				"Built mathematical models of an industrial recuperative gas turbine generator using the Gas Turbine Simulation Program (GSP) and Matlab/Simulink. Wrote its starting manoeuvre handbook."
			],
		skills: ["Simulink", "Matlab", "GSP"]
	}
];



// if you have a current job
var current = experiences[0];
// otherwise
// var current = null


function viewCtrl($scope) {
	$scope.experiences = experiences;
	$scope.currentPos = current;

	$scope.refresh = function() {
		window.setTimeout(function(){
			//scrollReveal
			// window.sr = new scrollReveal();
			// getRecentPosts();
			// initializeSizes();
			// addDivs();
			// MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
			// firstFlowerDraw();
		}, 500);
	};
}

$(function(){
}());