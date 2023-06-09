import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useEffect} from "react";
//import { userRows } from "../../dummyData";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getUsers, updateUsers} from "../../redux/apiCalls";

export default function UserList() {
  
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  // Fetch users from the API when the component mounts

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

    // Handle user deletion

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  // Define the columns for the data grid

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      width: 200,
      renderCell: params => {
        return params.row.createdAt.split("T")[0]
      }
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
                      {/* Link to edit user */}

            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
                        {/* Delete user */}

            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
            {/* Display the user list */}

      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}

      />
    </div>
  );
}
