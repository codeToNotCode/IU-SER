// Instance the tour
var tour = new Tour({
    steps: [

        {
            element: "#table",
            title: "Information regarding all the students in the roster",
            content: "",
            placement: "top",
            onShow: function() {
                $("#table").css("border", "solid");
            },
            onHide: function () {
                $("#table").css("border", "thin");
            }
        },
        {
            element: "#student_row",
            title: "Student Record",
            content: "Click on any row to get full record of a particular student",
            placement: "top",
            onShow: function() {
                $("#student_row").css("background-color", "#DDF4EA");
            },
            onHide: function () {
                $("#student_row").css("background-color", "#f1f1f1");
            },
            onNext: function(){
                document.location.href = 'page3.html';
                tour.setCurrentStep(0);
                return (new jQuery.Deferred()).promise();
            }
        },
        {
            element: "#student_name",
            title: "Information regarding all the students in the roster",
            content: "",
            smartPlacement: true
        }

    ]});

// Initialize the tour
tour.init();

// Start the tour
tour.start();/**
 * Created by ps23 on 5/26/2017.
 */
