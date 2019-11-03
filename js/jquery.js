$(document).ready(function() {
  const points = []; // The points total of each team
  const pointsGap = []; // The gaps between point totals
  let i = 1;

  $(".cell-td:last-child").each(function() {
    lastI = i - 1; // What was the previous i?
    points[i] = $(this).text(); // Get the points for this row
    if (i > 1) {
      // If this is not the first item
      pointsGap[i] = points[lastI] - points[i];
    }
    i++;
  });
  i = 1; // reset the counter for the next loop
  $(".row-body").each(function() {
    $(this).css("margin-top", pointsGap[i] / 2 + "em"); // Loop over every row and set the top margin to its pointsGap
    i++;
  });
});
