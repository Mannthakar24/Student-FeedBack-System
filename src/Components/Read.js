import axios from "axios"
import { Link } from "react-router-dom";
import DeleteIcon from "../Imgs/trash.png"
import Eye from "../Imgs/eye.png"
import { useNavigate } from 'react-router-dom';



const Read = (props) => {

    const history = useNavigate();
    function handleDelete(id)
 {

        axios.delete(`https://6405517eeed195a99f8006e0.mockapi.io/Country/${id}`).then(() => {
        history.push('/');
        })
}

    function handleUpdate(id, name, reviews) {

        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("reviews", reviews);

    }


    return (
        <>

            <div class="card">
                <div class="content">

                    <div class="infos">
                        <a href="#">
                            <span class="title">
                                {props.name}
                            <Link to ="/readfullreview">
                                <img src={Eye} className="Eye" onClick={()=>{ handleUpdate(props.ids, props.name, props.reviews) }}/>
                                </Link>
                            </span>
                        </a>

                        <p class="description" >
                            {props.reviews}
                        </p>
                    </div>

                    <span>
                        <Link to="/update">
                            <button className="action" onClick={() => { handleUpdate(props.ids, props.name, props.reviews) }}>
                                Update
                            </button>
                        </Link>

                        <button className="action1" onClick={() => {

                            var res = window.confirm("are you sure");
                            { if (res == 1) handleDelete(props.ids) }
                        }}>
                            <img src={DeleteIcon} className="DeleteIcon" />
                        </button>
                    </span>

                </div>
            </div>


        </>
    )
}

export default Read