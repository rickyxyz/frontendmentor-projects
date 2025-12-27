import type { ReactNode } from "react";

interface CardProps {
  imgSrc: string;
  children: ReactNode;
}

export const Card = ({ imgSrc, children }: CardProps) => {
  return (
    <article
      className="card"
      style={{
        background: `linear-gradient(90deg,rgba(0,0,0,0.7) 0%, rgba(0, 0, 0, 0) 100%) center/cover, url(${imgSrc}) center/contain no-repeat`,
      }}
    >
      <div className="card__content">{children}</div>
    </article>
  );
};

export default Card;
