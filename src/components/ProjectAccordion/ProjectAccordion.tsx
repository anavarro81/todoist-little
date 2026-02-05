
import styles from "./ProjectAccordion.module.css"
import Icons from "../Icons"


const ProjectAccordion = () => {
  return (
    <button className={styles.projectAccordion} >
      <span>Mis Proyectos</span>
      {Icons.add}
      
    </button>

  )
}

export default ProjectAccordion