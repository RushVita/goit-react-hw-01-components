import PropTypes from 'prop-types';
import css from './module.css/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, name, avatar }) => {
        return (
          <li className={css.item} key={id}>
            <span
              style={{
                backgroundColor: isOnline && 'rgb(0, 255, 42)',
              }}
              className={css.online}
            ></span>
            <img
              className={css.status}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
