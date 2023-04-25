import styles from "./CloseArea.module.scss";

interface CloseAreaProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CloseArea = ({ setIsOpen }: CloseAreaProps) => {
  const handleClick = () => {
    setIsOpen && setIsOpen(false);
  };

  return (
    <div className={styles.area}>
      <button className={styles.close} onClick={handleClick}>
        X
      </button>
    </div>
  );
};

export default CloseArea;
