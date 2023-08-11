import { useEffect, useState } from 'react';

export default function Quote() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchQuote = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
          method: 'GET',
          withCredentials: true,
          headers: {
            'X-Api-Key': 'JPH0dr8vp5cPyFyCj/jr7g==7Z5eQyE7zjkxZ4gW',
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setData(json[0]);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchQuote();
  }, [setData, setLoading, setError]);

  if (error) return <div className="error-message">An issue occurred. Please try again.</div>;
  if (loading) return <div className="loading-message">Loading quote, please wait...</div>;

  return (
    <div className="quote-container">
      <p className="quote">{data.quote}</p>
      <h2 className="author">{data.author}</h2>
    </div>
  );
}
