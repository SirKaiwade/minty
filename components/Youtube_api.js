import React from 'react'

function Youtube_api() {
    const API_KEY = "AIzaSyAGE0c7fk6B2rNPm0p5HANgw0h21xOeOzk";
    const channel_ID = "UCP7_6y4fFFj2wVWzaN8MurQ";
    const maxResults = 6;

    // Fetch Data
    const err = "Video not found";
    const fetchVideo = async (channel_ID) => {
        const res = await this.API_KEY.videos.list({
         part: 'snippet,contentDetails',
         id: id
        }).catch((err) => {
         console.log('[error] Something bad happened.')
         console.log('[error-info]', err)
         throw {code: -1, msg: 'Something bad happened.'}
        })
      
        if (res.data.items.length == 0) {
         throw {code: 2, msg: 'Song cannot be accessed.'}
        }
      
        var title = res.data.items[0].snippet.title
        var url = 'https://youtu.be/' + id
        var duration = res.data.items[0].contentDetails.duration
        var song_data = {
         id: id,
         title: title,
         url: url,
         duration: duration
        }
        
        console.log(song_data)
      
        return song_data

       }

  return (
    <div>Youtube_api</div>
  )
}

export default Youtube_api