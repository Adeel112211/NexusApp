import styles from './CategoryCard.module.css';

interface CategoryCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function CategoryCard({ title, subtitle, icon }: CategoryCardProps) {
  return (
    <div className={`hover-scale ${styles.categoryCard}`}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>{icon}</div>
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
      <div className={styles.bgIcon}>{icon}</div>
    </div>
  );
}
