// Instance the tour
var tour = new Tour({
    steps: [
        {
            element: "#midterm_perf_rev_button",
            title: "Midterm Performance Review",
            content: "Click on this Go button to view midterm performance review for all the students",
            smartPlacement: true

        },
        {
            element: "#presem_roster_rev_button",
            title: "Pre-Semester Roster Review",
            content: "Click on this Go button to view pre-semester roster review for all the students",
            smartPlacement: true,
            onNext: function(){
                document.location.href = '/page1';
                tour.setCurrentStep(0);
                return (new jQuery.Deferred()).promise();
            }
        },
        {
            element: "#table",
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
