import Avatar from "../Avatar/Avatar";
import styles from "./UserMenu.module.css";
import Icons from "../Icons";

interface UserMenuProps {
  name: string;
}

const UserMenu = ({ name }: UserMenuProps) => {
  return (
    <div className={styles.userMenu}>
      <Avatar name={name} />
      <span className={styles.avatarName}> {name}</span>
      {Icons.chevron}
    </div>
  );
};

export default UserMenu;
