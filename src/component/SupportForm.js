import React, { useState } from 'react';

const SupportForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Type your query here..."
      />
      <button id='submit-btn' type="submit">Submit</button>
    </form>
  );
};

export default SupportForm;