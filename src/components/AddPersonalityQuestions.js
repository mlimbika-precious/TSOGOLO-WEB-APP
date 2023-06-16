import React, { useState } from 'react';

const AddPersonalityQuestions = () => {
  const [question, setQuestion] = useState('');
  const [agree, setAgree] = useState(false);
  const [denial, setDenial] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="agree">Agree:</label>
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="denial">Denial:</label>
        <input
          type="checkbox"
          id="denial"
          checked={denial}
          onChange={(e) => setDenial(e.target.checked)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPersonalityQuestions;
