import classNames from "classnames";
import styles from "./Icon.module.scss";

interface IconProps {
  icon: string;
  href?: string;
  description?: string;
  type: "button" | "link";
  loading?: "lazy" | "eager";
  ariaLabel: string;
  forceShowDescription?: boolean;
}

const Icon = (props: IconProps) => {
  const descriptionClass = classNames(styles.description, {
    [styles.show]: props.forceShowDescription,
  });
  if (props.type === "link") {
    return (
      <a
        href={props.href ? props.href : "/"}
        aria-label={props.ariaLabel}
        className={styles["color-container"]}
      >
        {props.description ? (
          <span className={descriptionClass}>{props.description}</span>
        ) : null}
        <img
          src={props.icon}
          alt=""
          width={30}
          height={30}
          decoding="async"
          loading={props.loading ? props.loading : "lazy"}
        />
      </a>
    );
  } else {
    return (
      <button
        aria-label={props.ariaLabel}
        className={styles["color-container"]}
      >
        {props.description ? (
          <span className={descriptionClass}>{props.description}</span>
        ) : null}
        <img
          src={props.icon}
          alt=""
          width={30}
          height={30}
          decoding="async"
          loading={props.loading ? props.loading : "lazy"}
        />
      </button>
    );
  }
};

export default Icon;
