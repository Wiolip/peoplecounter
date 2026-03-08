type Props = {
  title: string;
  count: number;
  max: number;
  increment: () => void;
  decrement: () => void;
};

export const PeopleCounter = ({
  title,
  count,
  max,
  increment,
  decrement,
}: Props) => {
  return (
    <div>
      <p>
        {title}: {count} / {max}{" "}{"-----------"}{" "}{" "}
        <button type="button" onClick={increment} disabled={count >= max}>
          +
        </button>{" "}
        {count}{" "}
        <button type="button" onClick={decrement} disabled={count <= 0}>
          -
        </button>
      </p>
    </div>
  );
};
