function Student(name, gender, age, ) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (!('marks' in this) || !Array.isArray(this.marks)) {
		return false;
	}
	this.marks.push(...marksToAdd);
	return true;
}

Student.prototype.getAverage = function() {
	if (!('marks' in this) || !Array.isArray(this.marks)) {
		return 0;
	}
	if (this.marks.length === 0) {
		return 0;
	}
	let sum = this.marks.reduce((total, mark) => total + mark, 0);
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {

	delete this.subject;
	delete this.marks;


	this.excluded = reason;
};
