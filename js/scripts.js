$(document).ready(function() {
    var newTask;

    $("form#new-task").submit(function(event) {
        event.preventDefault();

        var inputtedTask = $("input#new-task").val();

        newTask = { task: inputtedTask };

        $("ul#tasks").append("<li><span class='task'>" +
                                newTask.task +
                                "</span></li>");

        $("input#new-task").val("");

        $(".task").text(newTask.task);

        $(".task").last().click(function() {
            $(".task").parent().toggle();
            $("ul#completed").append("<li><span class='completed'>" +
                                    newTask.task +
                                    "</span></li>");

            $(".completed").last().click(function() {
                $(".task").parent().toggle();
                $(".completed").parent().toggle();
                $(this).remove();

            });
        });
    });
});
