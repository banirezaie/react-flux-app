import {useState, useEffect} from "react"
import { getCourses } from "../api/courseApi"
import CourseList from './CourseList'

const CoursesPage = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses().then(_courses=> setCourses(_courses))
    }, []) 

    return (
      <CourseList courses={courses} />
    )
  
}

export default CoursesPage
