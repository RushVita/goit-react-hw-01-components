import PropTypes from 'prop-types';
import css from './module.css/Statics.module.css';

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(item => {
          return (
            <li
              style={{
                backgroundColor: generateColor(),
              }}
              className={css.item}
              key={item.id}
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
