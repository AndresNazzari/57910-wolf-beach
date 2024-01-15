import Navbar from "../Navbar/Navbar";

const Dashboard = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>{children} </div>
        </div>
    );
};

export default Dashboard;
