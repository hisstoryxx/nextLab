
import styles from './pubitem.module.css'
const Pubitem = ({content}) => {

    
    return (

        <li style = {{padding: 10 }}>
            <a className={styles.conl}>{content} </a>
            </li>
    )
}

export default Pubitem;