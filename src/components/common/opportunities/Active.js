import "./Opportunities.css";
import { useState } from "react";

const Active = ({status}) => {
    const [active, setActive] = useState(status);

    const handleToggle = () => {
        setActive(!active);
    }

    return( 
        <>
            <div className="active-bg">
                <div className={`active-toggle ${active ? "active" : "inactive"}`} onClick={handleToggle}>
                    {active ? "ACTIVE" : "INACTIVE"}
                </div>
            </div>

        </>
    );
}

export default Active;