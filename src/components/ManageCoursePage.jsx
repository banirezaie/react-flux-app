import { useState } from "react"
import { Prompt } from "react-router-dom"
import CourseForm from "./CourseForm"

const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  })
  
  const changeHandler = ({target}) => {
    setCourse({...course, [target.name]: target.value})
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} changeHandler={changeHandler} />
      {
        <Prompt
          when={true}
          message='Are you sure you want to leave this page? ha?'
        />
      }
    </>
  )
}

export default ManageCoursePage
