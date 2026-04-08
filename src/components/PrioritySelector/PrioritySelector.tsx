import styles from "./PrioritySelector.module.css";
import { Icons } from "../Icons";

interface PrioritySelectoProps {
  priority: "p1" | "p2" | "p3" | "p4";
}

const PrioritySelector = (props: PrioritySelectoProps) => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <div>
            {<Icons name="PriorityFlag" fill="#d1453b" />}
            <span> Prioridad 1 </span>
          </div>
          {props.priority == "p1" && <span> X </span>}
        </li>
        <li>
          <div>
            {<Icons name="PriorityFlag" fill="#eb8909" />}
            <span> Prioridad 2 </span>
          </div>
          {props.priority == "p2" && <span> X </span>}
        </li>
        <li>
          <div>
            {<Icons name="PriorityFlag" fill="#246fe0" />}
            <span> Prioridad 3 </span>
          </div>
          {props.priority == "p3" && <span> X </span>}
        </li>
        <li>
          <div>
            {<Icons name="PriorityFlag" fill="none" stroke="#666" />}
            <span> Prioridad 4 </span>
          </div>
          {props.priority == "p4" && <Icons name="Tick" fill="#d33322" />}
        </li>
      </ul>
    </div>
  );
};

export default PrioritySelector;

// #d33322
// font-size:
// 13px
