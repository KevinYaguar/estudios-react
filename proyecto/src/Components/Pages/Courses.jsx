import React, { Component } from 'react';
import axios from 'axios';
import CourseGrid from '../Organisms/CourseGrid.jsx'

class Courses extends Component {

  constructor(props){
    super(props)

    this.state = {
      courses: []
    }
  }

  componentDidMount(){
    axios.get('http://my-json-server.typicode.com/KevinYaguar/json-db/cursos')
      .then(res=>
        this.setState({
          courses: res.data
        })
      )
  }

  render(){

    const {courses} = this.state;

    return <CourseGrid courses={courses}/>
  }
}
export default Courses;