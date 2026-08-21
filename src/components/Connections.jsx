import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router-dom";



const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
        console.log("API Response:", res.data);
      dispatch(addConnections(res.data.data));
    } catch (err) {
      // Handle Error Case
      console.error(err);
    }
  };

  useEffect(() => {
  if (!connections ||connections.length === 0) {
    fetchConnections();
  }
}, []);

  if (!connections) return <h1>Loading...</h1>;

  if (connections.length === 0) {
    // return <h1 className="text-center text-2xl font-bold text-black "> No Connections Found</h1>
     return (
        <div className="flex flex-col items-center justify-center gap-4 min-h-[50vh]">
            <h1 className="text-center text-3xl font-bold text-black">
                No Connections Found
            </h1>
            <Link 
                to="/feed" 
                className="px-16 py-5 bg-[#ff2a85] text-white text-xl font-semibold rounded-xl hover:bg-[#e01f72] shadow-[0_4px_20px_rgba(255,42,133,0.4)] transition-all duration-200 inline-block text-center"
            >
                Find connections
            </Link>
        </div>
    );
  };

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-white text-3xl">Connections</h1>

      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          connection;

        return (
          <div
            key={_id}
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <Link to={"/chat/" + _id}>
              <button className="btn btn-primary">Chat</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Connections;