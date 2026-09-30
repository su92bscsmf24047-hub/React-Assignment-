const students = [
  { id: 1, name: "Ali", score: 78 },
  { id: 2, name: "Sara", score: 45 },
  { id: 3, name: "Ahmed", score: 50 },
  { id: 4, name: "Fatima", score: 92 },
  { id: 5, name: "Usman", score: 33 },
];

function StudentList() {
  return (
    <ul className="student-list">
      {students.map((student) => (
        <li key={student.id} className="student-item">
          <span className="student-name">{student.name}</span>
          <span className="student-score">Score: {student.score}</span>
          {student.score >= 50 ? (
            <span className="status pass">Pass</span>
          ) : (
            <span className="status fail">Fail</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
