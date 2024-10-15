'use client'
import React, { useState } from 'react'

const PostPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Send the name to the API
   await fetch('/api/infoupdate', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });
    // Handle the response as needed
  };

  return (
      <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
    </div>
  )
}

export default PostPage
