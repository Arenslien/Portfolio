// TestPage
import React from 'react';
import { Link } from 'react-router-dom';

function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
      <Link to="/">To HomePage</Link>
    </div>
  );
}

export default TestPage;