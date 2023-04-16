import styles from "./Icon.module.scss";

interface IconProps {
  icon: string;
  href?: string;
  description?: string;
  type: "button" | "link";
  loading?: "lazy" | "eager";
  ariaLabel: string;
}

const Icon = (props: IconProps) => {
  if (props.type === "link") {
    return (
      <a
        href={props.href ? props.href : "/"}
        aria-label={props.ariaLabel}
        className={styles["color-container"]}
      >
        {props.description ? (
          <span className={styles.description}>{props.description}</span>
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
          <span className={styles.description}>{props.description}</span>
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
