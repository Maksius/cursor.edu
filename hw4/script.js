const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
  const boys = [];
  const girls = [];
  const pairs = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].endsWith('а') || students[i].endsWith('я')) {
      girls.push(students[i]);
    } else boys.push(students[i]);
  };

  for (let i = 0; i < students.length / 2; i++) {
	  pairs.push([boys[i], girls[i]]);
	};

	return pairs;
};

console.log ('Pairs', getPairs(students));

const pairs = getPairs(students);

function assignment(pairs) {
  const assignmentThemes = [];

  for (let i = 0; i < pairs.length; i++) {
	  assignmentThemes.push([pairs[i].join(' та '), " : ", themes[i]]);
	};

	return assignmentThemes;
};

console.log ('Assignment', assignment(pairs));

const assignmentThemes = assignment(pairs);

function markForStudent(students, marks) {
  const personalMarks = [];

  for (let i = 0; i < students.length; i++) {
	  personalMarks.push([students[i], ' : ', marks[i]]);
	};

	return personalMarks;
};

console.log ('Personal marks', markForStudent(students, marks));

function markForProject(assignmentThemes) {
  const projectMarks = [];

  for (let i = 0; i < assignmentThemes.length; i++) {
    const random = Math.round((Math.random() * 5 + 1).toFixed(0));
	  projectMarks.push([assignmentThemes[i], ' : ', random]);
	};
  
  return projectMarks;
}

console.log ('Project marks', markForProject(assignmentThemes));
