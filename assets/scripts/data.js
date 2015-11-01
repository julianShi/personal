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
		icon:"fa-wrench",
		url: "",
	},{
		type:"pub",
		title:"Constructive Non-iterative Explicit Models of Turbofan Engines with Introduced Poles",
		company:"IEEE",
		location: "Montreal, QC, Canada",
		date: "2015",
		pointDescriptions: [
			"Developed volume dynamic model for turbofan engines"
		],
		icon:"fa-book",
		url:""
	},{
		type: "ed",
		degree: "Master's degree (Thesis), Mechanical Engineering",
		school: "McGill University",
		start: "Aug 2014",
		end: "May 2016 (expected)",
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
		type: "misc",
		title: "Moving to Canada",
		date: "Jun 2014",
		quote: "It's so cold here, but the positiveness of the people here toward harsh weather and the beauty of sparkling white landscapes make winter one of my favorite things about Canada.",
		icon:"fa-plane"
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
		degree: "Exchange student, Information Technology",
		school: "University of Tsukuba",
		date: "2012",
		location: "Tsukuba, Japan",
		pointDescriptions: [
			"Design a software/hardware mechanism for real-time atmosphere data sensing, wireless communication and display using the eKo kit."
			],
		icon:"fa-exchange",
		url: ""
	},{
		type:"proj",
		title:"Recuperative distiller product",
		company:"Beihang University",
		location: "Beijing, China",
		start: "Sep 2010",
		end: "May 2011",
		pointDescriptions: [
			"Led a 4 people team, designed recuperative processes which recycle steam.",
			"Designed parts of prototypes with AutoCAD. Manufactured chambers by welding. Manufactured medal heat exchanger using drilling lathes."
			],
		icon:"fa-recycle",
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
			"Mathematics",
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

var color = {
	'exp': 'green',
	'ed': 'purple',
	'proj': 'orange'
}

var projects = [

];


// if you have a current job
var current = story[0];
// otherwise
// var current = null


function viewCtrl($scope) {
	$scope.currentPos = current;
	$scope.story = story;
	$scope.storyColor = color;

	$scope.refresh = function() {
		window.setTimeout(function(){
			// MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
			// $('.collapse').collapse()
			toggleMenu();
		}, 1000);
	};
}

$(function(){
}());