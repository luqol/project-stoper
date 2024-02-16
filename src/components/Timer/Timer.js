import styles from './Timer.module.scss';

const Timer = ({ time }) => {
  const formatTime = time => {
    let [ms, ss, mm ,hh] = [
      Math.floor(time % 1000),
      Math.floor((time / 1000) % 60),
      Math.floor((time / (1000 * 60)) % 60),
      Math.floor((time / (1000 * 60 * 60)) % 24)
    ];
    
    hh = (hh < 10 ? '0' + hh : hh);
    mm = (mm < 10 ? '0' + mm : mm);
    ss = (ss < 10 ? '0' + ss : ss);
    ms = ms/10;
    return(
      hh + ':' + mm + ':' + ss + '.' + ms
    );
  };

  return(
    <div className={styles.timer} >
      {formatTime(time)}
    </div>
  );
};

export default Timer;