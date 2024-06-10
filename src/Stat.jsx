import React from 'react';
import PropTypes from 'prop-types';
import './Stat.css';

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            <ul className="stat-list">
                {stats.map(stat => (
                    <li
                        key={stat.id}
                        className="stat-item"
                        style={{ backgroundColor: generateRandomColor() }}
                    >
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
};

export default Statistics;