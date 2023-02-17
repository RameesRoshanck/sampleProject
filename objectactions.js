var task = {
    id: 2,
    status: 'active',
    isCompleted: false,
    spendTimes: [20],
    description: 'A new sample task for Javascript',
    comments: [
      { date: '19-04-2022 05:30PM', comment: 'Task updated with description' }
    ],
    project: { id: 2, code: 'Questions' },
    user: { id: 4, name: 'Ram' },
    categories: ['object', 'functions']
  };
  
  task.status = 'in-progress';
  
 
  var currentDate = new Date();
  var dateString = currentDate.toLocaleString();
  var newComment = { date: dateString, comment: 'This is a new comment' };
  task.comments.push(newComment);
  

  console.log('Project code: ' + task.project.code);
  

  console.log('Categories: ' + task.categories.join(', '));
  
  
  task.categories.push('array');
  console.log('Updated categories: ' + task.categories.join(', '));
  
 
  task.description = 'This is an updated task description';
  
  
  task.spendTimes.push(5, 15, 20);
  
  
  console.log('User name: ' + task.user.name);
  
  
  console.log('Comments:');
  for (var i = 0; i < task.comments.length; i++) {
    console.log(task.comments[i].comment);
  }
  
  
  task.isCompleted = true;