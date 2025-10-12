// components/StarRating.jsx
"use client";
import { useState, useEffect } from 'react';

export default function StarRatingComponent({ 
  name,
  control,
  setValue,
  watch,
  readonly = false,
  size = 24 
}) {
  const [hoverRating, setHoverRating] = useState(0);
  const currentRating = watch(name) || 0;

  const handleClick = (newRating) => {
    if (!readonly && setValue) {
      setValue(name, newRating, { shouldValidate: true });
    }
  };

  const handleMouseEnter = (newRating) => {
    if (!readonly) {
      setHoverRating(newRating);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hoverRating || currentRating);
        
        return (
          <button
            key={star}
            type="button"
            style={{
              background: 'none',
              border: 'none',
              cursor: readonly ? 'default' : 'pointer',
              transform: readonly ? 'scale(1)' : 'scale(1)',
              transition: 'transform 0.2s ease',
              padding: '2px'
            }}
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            disabled={readonly}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill={isFilled ? "#fbbf24" : "none"}
              stroke="#fbbf24"
              strokeWidth="2"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}