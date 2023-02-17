function birdsInWeek(birdsPerDay, weekNumber) {
 
    const start = (weekNumber - 1) * 7;
    const end = start + 7;
  
    const birdsInWeek = birdsPerDay.slice(start, end).reduce((sum, count) => sum + count, 0);
  
    return birdsInWeek;
  }
  var birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
  
  console.log(birdsInWeek(birdsPerDay, 2))