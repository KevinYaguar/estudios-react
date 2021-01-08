import useCourse from '../CustomHooks/useCourse';


const Course = ({match}) => {

  const course = useCourse(match.params.id)

  return (
        <div className='ed-grid m-grid-3'>
            {course ?        
                (<>
                    <h1 className='m-cols-3'>Nombre del curso: {course.title}</h1>
                    <img className='m-cols-1' src={course.image} alt={course.title}/>
                    <p className='m-cols-2'>Profesor: {course.profesor}</p>
                </>)
            :   (
                    <h1>El curso no existe</h1>
                )
                }
        </div> 
    )
}

export default Course;