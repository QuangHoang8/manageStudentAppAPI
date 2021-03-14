import axios from "axios";
import { Utils } from "./utils/Utils";
// const user = "vu";
const url = "http://localhost:5000/Student";
const getStudentEndPoint = `${url}/GetStudents`;
const addStudentEndPoint = `${url}/AddStudent`;
const modifyStudentEndPoint = `${url}/ModifyStudent`;
const getStudentByIdEndPoint = `${url}/GetStudent`;

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

export const modifyStudent = async (modifiedStudent) => {
  let fd = new FormData();

  modifiedStudent = {
    ...modifiedStudent,
    gender: Number.parseInt(modifiedStudent.gender),
    admissionDate: new Date(modifiedStudent.admissionDate).toLocaleDateString(
      "en-CA"
    ),
  };
  console.log(new Date(modifiedStudent.admissionDate));
  for (const key in modifiedStudent) {
    if (Object.hasOwnProperty.call(modifiedStudent, key)) {
      const value = modifiedStudent[key];
      fd.append(key, value);
    }
  }
  return await axios.post(modifyStudentEndPoint, fd, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${fd._boundary}`,
    },
  });
};
// await axios.post(modifyStudentEndPoint, {
//   modifiedStudent: modifiedStudent,
// });

export const getStudentById = async (id) => {
  const result = await axios.get(getStudentByIdEndPoint, {
    params: {
      id,
    },
  });
  const data = result.data.data;
  return {
    ...data,
    img: Utils.getAvatarUrlFromFileName(data.img),
    admissionDate: new Date(data.admissionDate),
    birthday: new Date(data.birthday),
  };
};
