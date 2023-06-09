import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import "./user.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers } from "../../redux/apiCalls";
import Spinner from "../../components/Spinner/Spinner";

export default function User() {
  const location = useLocation();
  const dispatch = useDispatch();
  const userId = location.pathname.split("/")[2];
  let history = useHistory();
 
  
  const user = useSelector((state) =>
    state.users.users.find((user) => user._id === userId)
  );

  const [inputs, setInputs] = useState();

    // Handle input change

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // Handle update button click

  const handleClick =  (e)  => {
    e.preventDefault();
    const user2 = {...user , ...inputs};
        // Call API to update user

    updateUsers(user._id, inputs, dispatch);
        // Navigate to the users page

    history.push("/users")
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
      </div>
      <div className="userContainer">
          {/* User information */}
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
             {/* Account details */}
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">
                {user.createdAt.split("T")[0]}
              </span>
            </div>
               {/* Contact details */}
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
           {/* User update form */}

          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">

              <div className="userUpdateItem">
                   {/* Name input */}
                <label>name*</label>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={handleChange}
                />
              </div>

              {/* Last name input */}
              <div className="userUpdateItem">
              <label>lastname*</label>
              <input
                  type="text"
                  placeholder="lastname"
                  name="lastname"
                  onChange={handleChange}
              />
            </div>
            {/* Password input */}
              <div className="userUpdateItem">
                <label>Password*</label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
                {/* Admin select */}
              <div className="userUpdateItem">
                <label>Admin ?*</label>
              <select name="isAdmin" style={{width:100}}  onChange={handleChange}>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select></div>
            </div>
            <div className="userUpdateRight">
              {/* User avatar */}
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                  alt=""
                />
              </div>
                {/* Update button */}
              <button className="userUpdateButton" onClick={handleClick}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
