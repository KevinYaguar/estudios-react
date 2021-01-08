import {useState, useEffect} from 'react';
import axios from 'axios';

const useCourse = id =>{

    const [course, setCourse] = useState({ })

    useEffect( ()=>{
        axios.get(`http://my-json-server.typicode.com/KevinYaguar/json-db/cursos/${id}`)
          .then(res=> setCourse(res.data))
      }, [])

      return course
}

export default useCourse;