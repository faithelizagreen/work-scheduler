// Display today's day and date
$(document).ready(function () {
    //displays current day & time.
    $("#currentDay").text(moment().format("LLLL"));

    //Assign saveBtn on click listener 
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
})