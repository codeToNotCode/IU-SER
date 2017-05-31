// Instance the tour
var tour = new Tour({
    steps: [
        {
            element: "#student_name",
            title: "Student Name and University ID",
            content: "Name and university ID of the selected student",
            placement: "top",
            onShow: function() {
                $("#student_name").css("border", "solid");
            },
            onHide: function () {
                $("#student_name").css("border", "thin");
            }
        },
        {
            element: "#left_container",
            title: "Student details",
            content: "Information of the selected student retrieved from database",
            placement: "top",
            onShow: function() {
                $("#left_container").css("border", "solid");
            },
            onHide: function () {
                $("#left_container").css("border", "thin");
            }
        },
        {
            element: "#positive",
            title: "Positive Results",
            content: "List of all positive results. You can select individual row to add it to Observations section",
            placement: "top",
            onShow: function() {
                $("#positive").css("border", "solid");
            },
            onHide: function () {
                $("#positive").css("border", "thin");
            }
        },
        {
            element: "#negative",
            title: "Negative Results",
            content: "List of all negative results. You can select individual row to add it to Observations section",
            placement: "top",
            onShow: function() {
                $("#negative").css("border", "solid");
            },
            onHide: function () {
                $("#negative").css("border", "thin");
            }
        },
        {
            element: "#neutral",
            title: "Neutral Results",
            content: "List of all neutral results. You can select individual row to add it to Observations section",
            placement: "top",
            onShow: function() {
                $("#neutral").css("border", "solid");
            },
            onHide: function () {
                $("#neutral").css("border", "thin");
            }
        },
        {
            element: "#right_container",
            title: "Additional Observations and Actions",
            content: "Here you can select multiple actions that you want to perform on the results on the left in addition already selected observations",
            placement: "top",
            onShow: function() {
                $("#right_container").css("border", "solid");
            },
            onHide: function () {
                $("#right_container").css("border", "thin");
            }
        },
        {
            element: "#dropdowns",
            title: "Types of Inputs",
            content: "Additional options and inputs to be added can be selected from the dropdowns here",
            placement: "top",
            onShow: function() {
                $("#dropdowns").css("border", "solid");
            },
            onHide: function () {
                $("#dropdowns").css("border", "thin");
            }
        },
        {
            element: "#results",
            title: "Results",
            content: "All the selected observations(positive/negative/neutral) and inputs from the dropdowns is displayed here under appropriate categories",
            placement: "top",
            onShow: function() {
                $("#results").css("border-color", "black");
            },
            onHide: function () {
                $("#results").css("border-color", "#990000");
            }
        },
        {
            element: "#submit_button",
            title: "Submit Observations",
            content: "Submit your inputs for this particular student",
            placement: "top",
            onShow: function() {
                $("#submit_button").css("border", "solid");
            },
            onHide: function () {
                $("#submit_button").css("border", "thin");
            }
        }
    ]});

// Initialize the tour
tour.init();

// Start the tour
tour.start();/**
 * Created by ps23 on 5/26/2017.
 */
