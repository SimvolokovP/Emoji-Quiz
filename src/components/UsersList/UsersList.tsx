import { FC } from "react";
import { IUser } from "../../models/IUser";

interface UsersListProps {
  currentUsers: IUser[];
  usersWhoStarted: string[];
}

const UsersList: FC<UsersListProps> = ({ currentUsers, usersWhoStarted }) => {
  return (
    <div>
      <ul>
        {currentUsers.map((user, index) => (
          <li
            key={index}
            style={{
              color: usersWhoStarted.includes(user.username)
                ? "green"
                : "black",
            }}
          >
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
