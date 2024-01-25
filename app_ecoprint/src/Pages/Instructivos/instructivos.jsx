// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./instructivos.css"

export default function Instructivos() {
  const [videos, setVideos] = useState([]);
  const channelId = 'UC84G_hynMxVG3KPvbZ_3WZQ'; //el channelId del canal

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCPg8SqONawsvNS96JcmxoEyuxt3Wvdj54&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
        );
        console.log('Respuesta de la API:', response);

        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [channelId]); // Agrega channelId como dependencia para que se ejecute la solicitud cuando cambie

  return (
    <div className='container text-center'>
      <h2>Instructivos</h2>
      <ul id='lista-videos' className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        {videos.map((video) => (
          <li key={video?.id?.videoId} className='list-unstyled'>
            <h4>{video?.snippet?.title || 'Título no disponible'}</h4>
            <iframe
              className='container col'
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video?.id?.videoId}`}
              title={video?.snippet?.title || 'Video sin título'}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
}








  


