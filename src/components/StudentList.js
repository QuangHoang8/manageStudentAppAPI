import React, { useEffect } from "react";
import style from "./StudentList.module.css";
import StudentItem from "./StudentItem";
import { useDispatch, useSelector } from "react-redux";

import { refreshStudentList } from "../action/actionCreator";

export default function StudentList() {
  const studentList = useSelector((state) => state.students.studentList);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const searchValue = useSelector((state) => state.search.searchValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshStudentList());
  }, [dispatch, currentPage, searchValue]);

  const renderStudentList = () =>
    studentList.map((student) => (
      <StudentItem key={student.id} student={student} />
    ));

  if (studentList.length === 0) {
    return (
      <div className={style.list}>
        <p>Không tìm thấy kết quả nào</p>
      </div>
    );
  } else return <div className={style.list}>{renderStudentList()}</div>;
}
