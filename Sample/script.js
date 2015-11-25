var students = [{
    name: "James",
    age: 23,
    langs: ["C++", "JS", "Python"],
}, {
    name: "Carol",
    age: 21,
    langs: ["C++", "JS"],

}, {
    name: "Tindi",
    age: 22,
    langs: ["JS", "Python"],

}];

$(document).ready(function() {
    //do something
    var html = "";

    students.forEach(function(student) {
        html = "<div class='student'>";
        html += "<h2>" + student.name + "</h2>";
        html += "<p><strong>Age: </strong>" + student.age + "</p>";
        html += "<div class='langs'>";

        student.langs.forEach(function(lang) {
            html += '<span>' + " " + lang + '</span>';

        });

        html += "</div>";
        html += "</div>";

        $('div.students').append(html);

    });
});
