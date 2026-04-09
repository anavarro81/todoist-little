import styles from "./PrioritySelector.module.css";
import { Icons } from "../Icons";

interface PrioritySelectoProps {
  priority: "p1" | "p2" | "p3" | "p4";
  changePriority: (priority: any) => void;
  
}

const PRIORITY_OPTIONS = [
  { value: "p1", label: "prioridad 1", fill: "#d1453b" },
  { value: "p2", label: "prioridad 2", fill: "#eb8909" },
  { value: "p3", label: "prioridad 3", fill: "#246fe0" },
  { value: "p4", label: "prioridad 4", fill: "none", stroke: "#666" },
] as const;

const PrioritySelector = (props: PrioritySelectoProps) => {
  return (
    <div className={styles.container}>
      <ul>
        {PRIORITY_OPTIONS.map((option) => (
          <li
            key={option.value}
            className={
              props.priority == option.value ? styles.darkBackground : ""
            }
            onClick={() => props.changePriority(option)}
          >
            <div>
              {<Icons name="PriorityFlag" fill={option.fill} stroke={"#666"} />}
              <span> {option.label}</span>
            </div>
            {props.priority == option.value && (
              <Icons name="Tick" fill="#d33322" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrioritySelector;
