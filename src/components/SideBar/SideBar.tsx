import styles from "./SideBar.module.css";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
interface SideBarProps {
  name: string;
}

const SideBar = ({ name }: SideBarProps) => {
  return (
    <div className={styles.sideBar}>      
      <SideBarHeader name={name} />
    </div>
  );
};

export default SideBar;
