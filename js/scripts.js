// $(document).ready(function() {
// $(".groceryForm").submit(function(event) {
//   event.preventDefault();
// var blanks = ["item1", "item2", "item3", "item4", "item5", "item6"];


//     blanks.map(function(blank) {
//     $('.list').append('<li>'+ blanks + '</li>');
    

// });
// });

$(document).ready(function(){
  $("#grocery").submit(function(event) {
    var addItem = $("input#items").val();
    var groceryItems = addItem.split(", ");

    event.preventDefault();
    groceryItems.sort();
    var sortedList = groceryItems.map(function(groceryItem) {
      $("#itemslist").append("<li>" + groceryItem.toUpperCase() + "</li>");
      });
    $("#grocery").hide();
  });
});


// $(document).ready(function() {
//   $("#form1").submit(function(event) {
//     event.preventDefault();
//     var blanks = ["item1", "item2", "item3", "item4", "item5", "item6"];

//     blanks.forEach(function(blank) {
//       var userInput = $("input#" + blank).val();
//       $("." + blank).text(userInput); });