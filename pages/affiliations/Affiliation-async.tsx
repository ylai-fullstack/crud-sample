import React, { useState, useEffect } from "react";
import UserTable from "@/components/AffiliationPage/UserTable";
import AddAffiliation from "@/components/AffiliationPage/AddAffiliation";
import EditAffiliation from "@/components/AffiliationPage/EditAffiliation";
import userList from "./data";

import { useAsyncRequest } from "../affiliations/useAsyncRequest";

const Affiliation = () => {
  const [data, loading] = useAsyncRequest(3);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (data) {
      const formattedUsers = data.map((obj) => {
        return {
          name: obj.name,
          initial: obj.initial,
          area_required: obj.area_required,
          internationals: obj.internationals,
        };
      });
      setUsers(formattedUsers);
    }
  }, [data]);

  const addUser = (user) => {
    user.id = users.length;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditAffiliation
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddAffiliation addUser={addUser} />
            </div>
          )}
        </div>
        {loading || !users ? (
          <p>Loading...</p>
        ) : (
          <div className="seven columns">
            <h2>View users</h2>

            <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Affiliation;
