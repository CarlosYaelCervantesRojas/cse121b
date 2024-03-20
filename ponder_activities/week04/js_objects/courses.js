const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'}, 
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent(sectionNum) {
        let section = this.sections.find(section => section.sectionNum === sectionNum);
        if (section) {
            section.enrolled += 1;
            renderSections(this.sections);
        }
    },
    dropStudent(sectionNum) {
        let section = this.sections.find(section => section.sectionNum === sectionNum);
        if (section) {
            section.enrolled -= 1;
            renderSections(this.sections)
        }
    }
  };

function setCourseInfo(course) {
    document.getElementById("courseName").innerText = course.name;
    document.getElementById("courseCode").innerText = course.code;
}

function renderSections(sections) {
    const sectionsFormat = sections.map(section => {
        return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
      </tr>`
    });

    document.getElementById("sections").innerHTML = sectionsFormat.join("");
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);

document.getElementById("enrollStudent").addEventListener("click", () => {
    const value = Number(document.getElementById("sectionNumber").value);
    aCourse.enrollStudent(value);
});

document.getElementById("dropStudent").addEventListener("click", () => {
    const value = Number(document.getElementById("sectionNumber").value);
    aCourse.dropStudent(value);
});