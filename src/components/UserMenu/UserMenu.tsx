import Avatar from "../Avatar/Avatar";
import styles from "./UserMenu.module.css";
import Icons from "../Icons";
import { NewIcon } from "../NewIcon";

interface UserMenuProps {
  name: string;
}

const UserMenu = ({ name }: UserMenuProps) => {
  return (
    <div className={styles.userMenu}>
      <Avatar name={name} />
      <span className={styles.avatarName}> {name}</span>
      <NewIcon name="Chevron" />
    </div>
  );
};

export default UserMenu;
