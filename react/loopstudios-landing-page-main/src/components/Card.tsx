import type { ReactNode } from "react";

interface CardProps {
  imgSrc: string;
  children: ReactNode;
}

export const Card = ({ imgSrc, children }: CardProps) => {
  return (
    <article
      className="card"
      style={{ "--src": `url('${imgSrc}')` } as React.CSSProperties}
    >
      <div className="card__content">{children}</div>
    </article>
  );
};

export default Card;
