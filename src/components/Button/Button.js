import styles from './Button.module.scss';

const Button = props => {
  return(
    <button className={styles.btn} onClick={e => props.action(e)}>{props.children}</button>
  );
};

export default Button;