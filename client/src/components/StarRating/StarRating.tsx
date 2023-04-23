import styles from "./StarRating.module.scss";
import classNames from "classnames";
import Star from "../../assets/svgs/Star.svg";

interface Props {
  rating?: number;
  count?: number;
}

const StarRating = ({ rating = 0, count }: Props) => {
  const starCount = 5;
  const roundedRating = Math.round(rating);
  console.log(rating);
  return (
    <>
      <div className={styles.starRating}>
        {[...Array(starCount)].map((_, index) => {
          // if rating is higher than the current Star, fill it
          const filled = roundedRating >= index + 1;
          const decimal = rating < index + 1 && rating > index;

          const className = classNames(styles.star, {
            [styles.filled]: filled,
            [styles["half-filled"]]: decimal,
          });

          return (
            <div className={styles[`icon-container`]} key={index}>
              <img src={Star} alt="" className={className} />
              {decimal ? <div className={styles.overlay}></div> : null}
            </div>
          );
        })}
        <p className={styles.rating}>{rating} of 5</p>
      </div>
      <p className={styles.count}>{count} Reviews</p>
    </>
  );
};

export default StarRating;
