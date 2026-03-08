import { useState } from 'react';
import { PeopleCounter } from './components/PeopleCounter';

export const App = () => {

  const [students, setStudents] = useState(0);
  const [employees, setEmployees] = useState(0);

  const MAX_COUNT = 20;

  const incrementStudents = () => {
    setStudents(x => (x < MAX_COUNT ? x + 1 : x));
  }
  const decrementStudents = () => {
    setStudents(x => (x > 0 ? x - 1 : x));
  }

  const incrementEmployees = () => {
    setEmployees(x => (x < MAX_COUNT ? x + 1 : x));
  }
  const decrementEmployees = () => {
    setEmployees(x => (x > 0 ? x - 1 : x));
  }


  const total = students + employees;

  return (
    <div>
      <h2>Mate Party</h2>

      <PeopleCounter
        title="Students"
        count={students}
        max={20}
        increment={incrementStudents}
        decrement={decrementStudents}
      />

      <PeopleCounter
        title="Employees"
        count={employees}
        max={20}
        increment={incrementEmployees}
        decrement={decrementEmployees}
      />

      <p>Total: {total}</p>
    </div>
  );
};

export default App;