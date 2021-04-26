import { Prompt } from "react-router-dom"

const ManageCoursePage = props => {
  return (
    <>
      <h2>Manage Course</h2>
      {
        <Prompt
          when={true}
          message='Are you sure you want to leave this page? ha?'
        />
      }
      {props.match.params.slug}
    </>
  )
}

export default ManageCoursePage
