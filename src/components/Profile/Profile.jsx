import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.profileInfo}>
                <img
                    className={styles.profileAvatar}
                    src={image}
                    alt="User avatar"
                />
                <p className={styles.profileName}>{name}</p>
                <p className={styles.profileTag}>@{tag}</p>
                <p className={styles.profileLocation}>{location}</p>
            </div>

            <ul className={styles.profileStats}>
                <li className={styles.statItem}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li className={styles.statItem}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li className={styles.statItem}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

export default Profile;
