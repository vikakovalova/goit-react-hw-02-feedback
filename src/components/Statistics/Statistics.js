import shortid from "shortid";

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <ul>
      <li key={shortid.generate()}>
        Good: <span>{good}</span>
      </li>
      <li key={shortid.generate()}>
        Neutral: <span>{neutral}</span>
      </li>
      <li key={shortid.generate()}>
        Bad: <span>{bad}</span>
      </li>
      <li key={shortid.generate()}>
        Total: <span>{total}</span>
      </li>
      <li key={shortid.generate()}>
        Positive feedback: <span>{positivePercentage}</span>%
      </li>
    </ul>
  );
};

export default Statistics;
