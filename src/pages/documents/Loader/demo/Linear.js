import React, { useEffect } from 'react';
import { Loader } from '@/components';

const { Linear } = Loader;

const Demo = () => {
  const [completed, setCompleted] = React.useState(0);

  useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="flex flex-col w-full"
      style={{
        height: '100px',
      }}
    >
      <div className="flex" style={{ marginBottom: '10px' }}>
        <Linear primary />
      </div>
      <div className="flex" style={{ marginBottom: '10px' }}>
        <Linear value={completed} secondary />
      </div>
      <div className="flex" style={{ marginBottom: '10px' }}>
        <Linear value={completed} style={{ color: 'black', backgroundColor: '#7a7a82' }} />
      </div>
    </div>
  );
};

export default Demo;
