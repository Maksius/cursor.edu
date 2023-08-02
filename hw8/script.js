class Student {
  constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this._marks = [5, 4, 4, 5];
      this.remand = false;
  }

  getInfo() {
    return `Студент ${this.course}-го курсу, ${this.university}, ${this.fullName}`;
  }

  get marks() {
      return this.dismissed ? null: this._marks;
  }

  set marks(newMark) {
      return this.dismissed ? null : this._marks.push(newMark);
  }

  getAverageMark() {
      return Number((this._marks.reduce((acc, value) => acc + value) / this._marks.length).toFixed(1));
  }

  dismiss() {
      this.dismissed = true;
  }

  recover() {
      this.dismissed = false;
  }
}

const newStudent = new Student('Вища Школа Психотерапії м.Одеса', 1, 'Остап Родоманський Бендер');
console.log(newStudent.getInfo());
console.log(newStudent.marks);
newStudent.marks = 5;
console.log(newStudent.marks);
console.log(`Average mark: ${newStudent.getAverageMark()}`);
newStudent.dismiss();
console.log(newStudent.marks);
newStudent.recover();
console.log(newStudent.marks);

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
      super(university, course, fullName)
      this.getScholarship();
  }
  getScholarship() {
    setInterval(() => {
      !this.remand && this.getAverageMark() >= 4 ? console.log(`Ви отримали 1400 грн. стипендії`) : console.log("Ви відраховані")
    }, 30000)
  }
}

const budgetStudents = new BudgetStudent();
