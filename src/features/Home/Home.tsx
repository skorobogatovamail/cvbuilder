import { Link } from 'react-router-dom';
import { ArrowRight, Book, Eye, PenBox } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heading}>Создайте свое резюме с помощью ИИ</h1>
        <p className={styles.subheading}>
          Упростите процесс создания резюме, используя лучшие функции на основе искусственного
          интеллекта
        </p>
        <Link to="/dashboard" className={styles.linkNoUnderline}>
          <button className={styles.button}>
            Начать <ArrowRight className={styles.arrow} />
          </button>
        </Link>
      </section>
      <section className={styles.features}>
        <div className={styles.feature}>
          <PenBox className={styles.icon} />
          <h3>Простое редактирование</h3>
          <p>Интуитивно понятный интерфейс для быстрого создания и редактирования резюме</p>
        </div>

        <div className={styles.feature}>
          <Eye className={styles.icon} />
          <h3>Предпросмотр в реальном времени</h3>
          <p>Мгновенный предпросмотр изменений для идеального результата</p>
        </div>

        <div className={styles.feature}>
          <Book className={styles.icon} />
          <h3>Множество шаблонов</h3>
          <p>Выбирайте из различных профессиональных шаблонов для вашего резюме</p>
        </div>
      </section>
    </div>
  );
};
export default Home;
