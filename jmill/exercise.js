var exercise = {};
exercise.hobbies = [];
// return list of people taking 1.00
exercise.getCourseList = function(courseName) {
    var list = [];
    var dataLength = exercise.data.contacts.length;
    var people = exercise.data.contacts;
    var person;
    // enter code to list each person that takes this course
    for (var i = 0; i < dataLength; i++){
        person = people[i]
        if (person.courses.includes(courseName)){
            list.push(person);
        }
    }
    return list;
};
// return list of hobbies
exercise.getHobbies = function() {
    var dataLength = exercise.data.contacts.length;
    var target = exercise.data.contacts;
    var person;
    // enter code to get person and their hobbies
    // add new hobby to exercise.hobbies;

    return exercise.hobbies;
};