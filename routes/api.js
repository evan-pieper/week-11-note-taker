const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
  .then((data) => 
    activeNotes.append(data)  
  )
  .catch((error) => {
    console.error('Error:', error);
  });