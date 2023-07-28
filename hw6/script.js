const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
  math: [4, 4, 3, 4],
  algorithms: [3, 3, 3, 4, 4, 4],
  data_science: [5, 5, 3, 4]
  }
  }, {
  name: "Victor",
  course: 4,
  subjects: {
  physics: [5, 5, 5, 3],
  economics: [2, 3, 3, 3, 3, 5],
  geometry: [5, 5, 2, 3, 5]
  }
  }, {
  name: "Anton",
  course: 2,
  subjects: {
  statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
  english: [5, 3],
  cosmology: [5, 5, 5, 5]
  }
  }];

// task#1
function getSubjects({subjects}) {
  return Object.keys(subjects).map((subject) => `${subject[0].toUpperCase()}${subject.slice(1).replace('_', ' ')}`);
};

console.log(getSubjects(students[0]));

// task#2
function getAverageMark({subjects}) {
  const collectMarks = Object.values(subjects).reduce((acc, subject) => acc.concat(subject));
  const average = collectMarks.reduce((a, b) => a + b) / collectMarks.length;
  return Number(average.toFixed(2));
};

console.log(getAverageMark(students[0]));

// task#3
function getStudentInfo(students) {
	const {name, course} = students;
	const average = getAverageMark(students);
	return {course, name, average};
};

console.log(getStudentInfo(students[0]));

// task#4
function getStudentsNames(students) {
  return students.map((student) => student.name).sort((a, b) => a.localeCompare(b));
};

console.log(getStudentsNames(students));

// task#5
function getBestStudent(students) {
  const names = students.map((student) => getStudentInfo(student));
  const best = names.reduce((acc, name) => acc.average > name.average ? acc : name);
  console.log(best);
	return best.name;
};

console.log(getBestStudent(students));

// task#6
function calculateWordLetters(word) {
	const obj = {};

	for (let i = 0; i < word.length; i++) {
		const letter = word[i];
		obj[letter] ? obj[letter]++ : obj[letter] = 1;
	}
	return obj;
};

console.log(calculateWordLetters('dlkhjlgkjhlslksjh'))