import styles from "./SideBar.module.css";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import NewTaskButton from "../NewTaskButton/NewTaskButton"
interface SideBarProps {
  name: string;
}

const SideBar = ({ name }: SideBarProps) => {
  return (
    <div className={styles.sideBar}>      
      
      <SideBarHeader name={name} />

      <NewTaskButton />


    </div>
  );
};

export default SideBar;
