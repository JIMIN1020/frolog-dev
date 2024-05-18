import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface TextRendererProps {
  text: string;
}

const TextRenderer: React.FC<TextRendererProps> = ({ text }) => {
  return (
    <div>
      {text.split('\n').map((line) => (
        <React.Fragment key={uuidv4()}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TextRenderer;
