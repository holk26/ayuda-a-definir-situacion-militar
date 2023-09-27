

const AggregatedAnswers = ({answersG}) => {
    
    return (
      <ul>
        {answersG.map((answer, index) => (
          <li className="text-3xl font-bold mb-4 text-black" key={index}>{answer}</li>
        ))}
      </ul>
    );
  };

export default AggregatedAnswers;