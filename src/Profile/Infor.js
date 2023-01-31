import {PropTypes} from "prop-types";
export function Infor({ bio, profession, children, HandleName, age }) {
    return (
        <>
            <ul>
                <li>The bio: {bio}</li>
                <li>The profession: {profession}</li>
                <li> Age: {age}</li>
            </ul>
            {children}
            <button onClick={HandleName} >Click on me to see the alert</button>
        </>
    )
}
Infor.propTypes = {
    bio: PropTypes.string.isRequired,
    HandleName: PropTypes.func,
    Age: PropTypes.number
};
// Infor.defaultProps = {
//     profession: "doctor"
// };

