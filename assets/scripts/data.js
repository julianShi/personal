var story = [
	{
		type: "exp",
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
		skills: ["ROS", "C++"],
		icon:"fa-graduation-cap",
		url: "",
	},{
		type: "ed",
		degree: "Master's degree (Thesis), Mechanical Engineering",
		school: "McGill University",
		start: "Fall 2014",
		end: "Summer 2016 (expected)",
		location: "Montreal, QC, Canada",
		pointDescriptions: [
			"Design finite element and modal analysis algorithms for structural dynamics and vibration computing."
			],
		courses:[
			"Applied Mathematics",
			"Control Systems",
			"Finite Element",
			"Advanced Dynamics",
			"Machine Learning",
			"Artificial Intelligence",
			],
		icon:"fa-graduation-cap",
		url: ""
	},{
		type: "exp",
		title: "Mechanical Engineer",
		company: "Chinese Academy of Sciences",
		start: "Mar 2013",
		end: "Aug 2013 ",
		location: "Beijing, China",
		pointDescriptions:[
				"In a combustion lab, designed the embedded system prototype of temperature control using SCM-51 development kit. Wrote sensors drivers using assembly language.",
				"Built mathematical models of an industrial recuperative gas turbine generator using the Gas Turbine Simulation Program (GSP) and Matlab/Simulink. Wrote its starting manoeuvre handbook."
			],
		skills: ["Simulink", "Matlab", "GSP"],
		icon:"fa-suitcase",
		url: ""
	},{
		type: "ed",
		degree: "Bachelor of Science (BS), Aerospace, Aeronautical and Astronautical Engineering",
		school: "Beihang University",
		start: "2009",
		end: "2013",
		location: "Beijing, China",
		pointDescriptions: [
			],
		courses:[
			"Mathematics,",
			"Fluid Mechanics",
			"Thermodynamics",
			"C Programming",
			"Electrics and Electronics",
			"Manufacturing Practise",
			"Automatic Control",
			],
		icon:"fa-graduation-cap",
		url: ""
	},
];

var projects = [

];


// if you have a current job
var current = story[0];
// otherwise
// var current = null


function viewCtrl($scope) {
	$scope.currentPos = current;
	$scope.story = story;

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