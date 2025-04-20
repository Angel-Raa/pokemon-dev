import styles from "./Loader.module.css";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export const Loader = ({ size = "md", color = "#3B82F6" }: LoaderProps) => {
  const sizeMap = {
    sm: "1.5rem",
    md: "2.5rem",
    lg: "4rem"
  };

  return (
    <div className={styles.loaderContainer}>
      <div
        className={styles.spinner}
        style={{
          width: sizeMap[size],
          height: sizeMap[size],
          borderColor: `${color} transparent transparent transparent`
        }}
      />
      <p className={styles.text} style={{ color }}>Cargando...</p>
    </div>
  );
};