$(document).ready(function() {
    $("form#new-task").submit(function(event) {
        event.preventDefault();

        var inputtedTask = $("input#new-task").val();

        var newTask = { task: inputtedTask };

        $("ul#tasks").append("<li><span class='task'>" +
                                newTask.task +
                                "</span></li>");

        $("input#new-task").val("");
        $(".task").text(newTask.task);

        $(".task").last().click(function() {
            $(".task").parent().toggle();
            // $("#completed").toggle();
            $("ul#completed").append("<li><span class='task'>" +
                                    newTask.task +
                                    "</span></li>");
            $("ul#completed").last().click(function() {
                $(".task").parent().toggle();
                // $("#completed").toggle();
                // $("ul#completed").remove("<li><span class='task'>" +
                //                         newTask.task +
                //                         "</span></li>");

                $(this).remove();

            // $(document).ready(function() {
            //     $(".task").click(function() {
            //         $(".task").toggle();
            //   });
            // });

            });
        });

    });
});
