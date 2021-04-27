import AboutPage from "./AboutPage"
import HomePage from "./HomePage"
import Header from "./common/Header"
import CoursesPage from "./CoursesPage"
import PageNotFound from "./NotFoundPage"
import ManageCoursePage from "./ManageCoursePage"
import { Route, Switch, Redirect } from "react-router-dom"

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={AboutPage} />
        <Route path='/course' component={ManageCoursePage} />
        <Route path='/course/:slug' component={ManageCoursePage} />
        <Route path='/courses' component={CoursesPage} />
        <Redirect from="/about-page" to="about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App
