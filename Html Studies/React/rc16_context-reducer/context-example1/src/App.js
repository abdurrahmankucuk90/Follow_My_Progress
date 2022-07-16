import { useState } from "react";
import StudentList from "./components/StudentList";
import { StudentContext } from "./context/StudentContext";
import data from "./data";

function App() {
  const [students, setStudents] = useState(data);

  const changeColor = (id, color) => {
    setStudents(
      students.map(
        (student) =>
          // student.id === id && { ...student, color: color } //!Default atamiyor, bu nedenle digerlerini siliyor. Filter ve map butun listeyi dondurmesi gerekiyor
          student.id === id ? { ...student, color: color } : student //!key ve value ayniysa sadece color yazilabilirdi.
      )
    );
  };

  return (
    <div>
      {/* //* cift suslu parantez gonderdik */}
      {/* <StudentContext.Provider value={{students, setStudents}} > */}
      <StudentContext.Provider value={{students,changeColor}} >
        <StudentList />
      </StudentContext.Provider>
    </div>
  );
}
export default App;
