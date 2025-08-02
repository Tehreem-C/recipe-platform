// src/components/StarRating.js
import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // For solid and outline stars
import '../styles/StarRating.css'; // New CSS file for styling

const StarRating = ({ initialRating = 0, onRatingChange, readOnly = false }) => {
    const [hoverRating, setHoverRating] = useState(0);
    const [currentRating, setCurrentRating] = useState(initialRating);

    useEffect(() => {
        // Update currentRating if initialRating prop changes (e.g., when average rating is fetched or user's past rating loads)
        setCurrentRating(initialRating);
    }, [initialRating]);

    const handleStarClick = (index) => {
        if (readOnly) return; // Do nothing if readOnly
        setCurrentRating(index);
        if (onRatingChange) {
            onRatingChange(index); // Call parent handler with the new rating
        }
    };

    const handleStarHover = (index) => {
        if (readOnly) return;
        setHoverRating(index);
    };

    const handleStarLeave = () => {
        if (readOnly) return;
        setHoverRating(0); // Reset hover state
    };

    // Determine which rating to display: hover state if hovering, otherwise current rating
    const displayRating = hoverRating || currentRating;

    return (
        <div className="star-rating" onMouseLeave={handleStarLeave}>
            {[1, 2, 3, 4, 5].map((starValue) => (
                <span
                    key={starValue}
                    className={`star ${displayRating >= starValue ? 'filled' : ''} ${readOnly ? 'read-only' : ''}`}
                    onClick={() => handleStarClick(starValue)}
                    onMouseEnter={() => handleStarHover(starValue)}
                >
                    {displayRating >= starValue ? <FaStar /> : <FaRegStar />}
                </span>
            ))}
        </div>
    );
};

export default StarRating;