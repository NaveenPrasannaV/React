import { useEffect, useState } from "react";
import Course from "./Course";
import loading from "../../data/assets/loading.gif";

function CourseList(){

    const [dummy, setDummy] = useState(true);

    const [courseList, setCourseList] = useState();

    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost:3000/courses')
            .then(response => {
                if(!response.ok){
                    throw Error("couldn't retrive data")
                }
                console.log(response)
                return response.json()
            })
            .then(data => setCourseList(data))
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })
        } , 2000)
    } , []);

    function handleDelete(id){
        console.log(id);
        setCourseList(courseList.filter((course) => (course.id!=id)));
    }

   //courseList.sort((x,y) => (x.price-y.price));

    if(!courseList){
        return(
            <>
                {!error && <img src={loading} alt="Loading..." style={{width: "200px", height: "200px"}}/>}
                {error && <p>{error}</p>}
            </>
        )
   }
 

    const courseMap = courseList.filter((course) => (course.price>0)).map( (course) => (
                                                                    <Course 
                                                                        key={course.id} 
                                                                        name={course.name} 
                                                                        price={course.price} 
                                                                        image={course.image} 
                                                                        rating={course.rating} 
                                                                        delete={handleDelete}
                                                                        id = {course.id}
                                                                    />));

    return(
        <>
            <>{courseMap}</>
            <button onClick={() => { setDummy(false); } }>Dummy Button</button>
        </>
    );

}

export default CourseList

//npx json-server --watch data/dummyData.json --port 3000 --static .data