import "./SnakeBackground.css";

export default function SnakeBackground() {
  return (
    <div className="snake-background" aria-hidden="true">

      <img
        src={`${import.meta.env.BASE_URL}images/cobra1.png`}
        alt=""
        className="snake snake-1"
      />

      <img
        src={`${import.meta.env.BASE_URL}images/cobra2.png`}
        alt=""
        className="snake snake-2"
      />

      <img
        src={`${import.meta.env.BASE_URL}images/cobra3.png`}
        alt=""
        className="snake snake-3"
      />

      <img
        src={`${import.meta.env.BASE_URL}images/cobra4.png`}
        alt=""
        className="snake snake-4"
      />

      <img
        src={`${import.meta.env.BASE_URL}images/cobra2.png`}
        alt=""
        className="snake snake-5"
      />

      <img
        src={`${import.meta.env.BASE_URL}images/cobra4.png`}
        alt=""
        className="snake snake-6"
      />

    </div>
  );
}
