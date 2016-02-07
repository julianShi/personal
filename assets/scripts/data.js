var story = [
	{
		type: "ed",
		degree: "Master of Mechanical Engineering (Thesis)",
		school: "McGill University",
		start: "Aug 2014",
		end: "May 2016 (expected)",
		location: "Montreal, QC, Canada",
		pointDescriptions: [
			" Developed semismooth Newton iterative algorithms to solve contact stress. ",
			" Developed a software project using FreeFem++ (in C++) libraries to compute contact stress. ",
			" Developed a frequency solver for rotor-stator contact (to be published in a conference). "
			],
		skills: ["Technical Writing", "C++", "Matlab/Simulink", "Latex", "Fortran"],
		courses:[
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
		title: "Simulation Engineer",
		company: "McGill Robotics",
		start: "Sept 2015",
		end: "Pre",
		location: "Montreal, QC, Canada",
		pointDescriptions:[
			"Write simulation control plug-ins with Gazebo API in C++. ",
			"Develop high-fidelity simulation environment for testing Mars Rover and drone.",
			"Built an autonomous vehicle with an Arduino board and a sonar sensor. "
			],
		skills: ["C++", "Python", "ROS", "Gazebo", "Arduino"],
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
		type: "misc",
		title: "Moving to Canada",
		date: "Jun 2014",
		quote: "It's so cold here, but the positiveness of the people here toward harsh weather and the beauty of sparkling white landscapes make winter one of my favorite things about Canada.",
		icon:"fa-plane"
	},{
		type: "exp",
		title: "Engineering intern",
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
		degree: "Bachelor of Engineering, Flying Vehicle Power Engineering",
		school: "Beihang University",
		start: "2009",
		end: "2013",
		location: "Beijing, China",
		pointDescriptions: [
			],
		courses:[
			"Fluid Dynamics",
			"Thermodynamics",
			"C Programming",
			"Electrics and Electronics",
			"Manufacturing Practise",
			"Automatic Control",
			"Heat Transfer"
			"Aircraft Engine"
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
			$('.paper-container .init').fadeOut('fast', function(){
				$('.paper-container .header').fadeIn('fast');
			});
		}, 1000);
	};
}
