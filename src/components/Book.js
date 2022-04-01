import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

import circleProgressBar from '../scripts/progressBar';

import styles from '../styles/book.module.css';

export default function Book({
  title, author, category, id,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    circleProgressBar({ id });
  }, []);
  return (
    <div className={styles.book}>
      <div>
        <p className={styles.category}>{category}</p>
        <h2>{title}</h2>
        <h3 className={styles.author}>{author}</h3>
        <button className={styles.removeBook} type="button" onClick={(e) => { e.preventDefault(); dispatch(removeBook({ id })); }}> remove </button>
      </div>
      <div className={styles.rightInfo}>
        <div className={styles.completion}>
          <div className={styles.Circle}>
            <div className={styles.Circle__progress} id={`circular-progress-${id}`} />
          </div>
          <div className={styles.completionNumber}>
            <p className={styles.Book_numberCompleted}>
              <span id={`progress-value-${id}`}>65</span>
              %
            </p>
            <p className={styles.Book_completedText}>Completed</p>
          </div>
        </div>
        <div className={styles.rightInfoTxt}>
          <p className={styles.chapter}>CURRENT CHAPTER</p>
          <h3 className={styles.currentChapter}>Introduction</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
