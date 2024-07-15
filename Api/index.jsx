
export const apiVideos = 'https://my-json-server.typicode.com/niedjaraujos/aluraflix-api/videos'


 export const novoVideo = async (newVideo) => {
    const response = await fetch(`https://my-json-server.typicode.com/niedjaraujos/aluraflix-api/videos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newVideo) 
    });
    return response.json(); 
  };


 export const editarCard = async (editVideo) => {
    const response = await fetch(`${apiVideos}/videos/${editVideo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editVideo)
    });
    return response.json();
  };
  
 export const deleteCard = async (id) => {
    const response = await fetch(`${apiVideos}/videos/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  };
  