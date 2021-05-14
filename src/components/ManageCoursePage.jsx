import { useState } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });
  
  const changeHandler = ({target}) => {
    setCourse({...course, [target.name]: target.value})
  }

  const formIsValid = () => {
    const _errors = {};

    if (!course.title) _errors.title = "title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors)
    // From is valid ir the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success(' course saved...')
    });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
         onChange={changeHandler}
        onSubmit={handleSubmit}
      />
      {
        <Prompt
          when={true}
          message='Are you sure you want to leave this page? ha?'
        />
      }
    </>
  );
}

export default ManageCoursePage;
