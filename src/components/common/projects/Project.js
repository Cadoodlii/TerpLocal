import { PiAddressBookBold } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";


const Project = ({project}) => {
    return (
        <div className="project">
            <div className="icon">
                <IoIosArrowRoundForward size = "100px"/>
            </div>
            <div className="project-inner">
                <PiAddressBookBold size = "100px"/>
                <div>
                    <h2>
                        {project.text}
                    </h2>
                    <p>
                        <pre> company: {project.manager} ,  looking for {project.major} majors</pre>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project