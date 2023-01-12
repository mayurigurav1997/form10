import { useSelector, useDispatch } from "react-redux";


function Admindetails(props) {
    // const dispatch = useDispatch();
    // const admin = useSelector((state) => state.admin);
    const { agentData } = props;

    return (
        <div className="Global">
            <div className="agent-details">
                <p>FIRST NAME</p>
                <span>{agentData.firstName}</span>
            </div>
            <div className="agent-details">
                <p>MIDDLE NAME</p>
                <span>{agentData.middleName}</span>
            </div>
            <div className="agent-details">
                <p>LAST NAME</p>
                <span>{agentData.lastName}</span>
            </div>
            <div className="agent-details">
                <p>SUFFIX</p>
                <span>{agentData.suffix}</span>
            </div>
            <div className="agent-details">
                <p>EMAIL</p>
                <span>{agentData.email}</span>
            </div>
            {/* <button>Edit</button> */}
        </div>

    );
}

export default Admindetails;
