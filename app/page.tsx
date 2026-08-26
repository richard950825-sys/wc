'use client';

import { useState } from 'react';

const directionNames = [
  '向下',
  '向左下',
  '向左',
  '向左上',
  '向上',
  '向右上',
  '向右',
  '向右下',
];

export default function Home() {
  const [distance, setDistance] = useState('251');
  const [direction, setDirection] = useState(0);

  return (
    <main className="screen">
      <section className="sign" aria-label="公共厕所指示牌">
        {/* Keep the user's source pixels untouched and the URL relative for GitHub Pages. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="sign-base.png" alt="公共厕所指示牌" draggable="false" />

        <label className="distance">
          <span className="sr-only">距离，单位米</span>
          <input
            aria-label="距离，单位米"
            inputMode="numeric"
            pattern="[0-9]*"
            value={distance}
            onChange={(event) => {
              const nextValue = event.target.value.replace(/\D/g, '').slice(0, 4);
              setDistance(nextValue);
            }}
            onFocus={(event) => event.target.select()}
            style={{ width: `${Math.max(distance.length, 1) * 0.66 + 0.2}em` }}
          />
          <span aria-hidden="true">m</span>
        </label>

        <button
          className="direction"
          type="button"
          aria-label={`箭头${directionNames[direction]}，点击更改方向`}
          onClick={() => setDirection((current) => (current + 1) % 8)}
        >
          <span
            className="arrow-shape"
            style={{ transform: `rotate(${direction * 45}deg)` }}
          />
        </button>
      </section>
    </main>
  );
}
