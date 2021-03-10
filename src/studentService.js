import axios from "axios";
// const user = "vu";
const url = "http://localhost:5000/Student";
const getStudentEndPoint = `${url}/GetStudents`;
const addStudentEndPoint = `${url}/AddStudent`;
const modifyStudentEndPoint = ``;

export const getStudent = async (search, page, pageSize) =>
  (
    await axios.get(getStudentEndPoint, {
      params: {
        search,
        page,
        pageSize,
      },
    })
  ).data;

export const addStudent = async (newStudent) => {
  let fd = new FormData();

  newStudent = {
    ...newStudent,
    gender: Number.parseInt(newStudent.gender),
  };
  for (const key in newStudent) {
    if (Object.hasOwnProperty.call(newStudent, key)) {
      const value = newStudent[key];
      fd.append(key, value);
    }
  }
  return await axios.post(addStudentEndPoint, fd, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${fd._boundary}`,
    },
  });
};

export const modifyStudent = async (modifiedStudent) =>
  await axios.get(modifyStudentEndPoint, {
    modifiedStudent: modifiedStudent,
  });
