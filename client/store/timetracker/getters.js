const todayTimeStamp = new Date().setHours(0, 0, 0, 0);

export default {
  tasks: state => state.tasks
    .filter(task => new Date(task.startDateTime).setHours(0, 0, 0, 0) === todayTimeStamp),
  reportText: state => state.reportText,
};
