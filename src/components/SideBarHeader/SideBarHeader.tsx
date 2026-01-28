import UserMenu from "../UserMenu/UserMenu";
import CollapseButton from "../CollapseButton/CollapseButton";
import styles from "./SideBarHeader.module.css";

interface SideBarHeaderProps {
  name: string;
}
const SideBarHeader = ({ name }: SideBarHeaderProps) => {
  return (
    <header className={styles.sidebarHeader}>
      <UserMenu name={name} />
      <CollapseButton />
    </header>
  );
};

export default SideBarHeader;
