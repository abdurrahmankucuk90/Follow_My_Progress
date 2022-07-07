import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import LoadingGif from './/..//img/loading.gif'

const InstructorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inst, setInst] = useState(null);
  const [error, setError] = useState(false);

  // const location = useLocation();
  // const inst = location.state;

  const getInstructor = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructor();
  }, [id]);

  if (error) {
    return <NotFound />;
  } 
  else if(!inst){
    return (
      <div className="text-center">
        <img src="https://sadullah-tanrikulu.github.io/loading/" alt="" />
      </div>
    )
  }
  else {
    return (
      <div className="container text-center">
        <h3>{inst.name}</h3>
        <img
          className="w-50"
          src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
          alt=""
        />
        <h4>{inst.email}</h4>
        <h4>{inst.phone}</h4>
        <div>
          <button
            onClick={() => navigate(`/`)}
            className="btn btn-success me-2"
          >
            Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default InstructorDetail;
