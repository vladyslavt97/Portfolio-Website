import YouTube, { YouTubeProps } from 'react-youtube';

type Props = {}

export default function DroneVideos({}: Props) {
    const opts: YouTubeProps['opts'] = {
        height: '150',
        width: '300',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    const videos = ["lG-A-RCj7Yw", "acDfNaPJsqQ",  "NrKJctIlMzQ",  "czJQWZ2sAps", "vU2FuQGVuRs", "b0g387reMOM", "_ZJrzzf4loE", "gmh6rXdEkqg", "hJU8RS2mKC4", "rBNabM-yGAY", "8Ng_maGBAng", "iWYv1Z6o02A"]


  return (
    <div className='flex flex-row flex-wrap gap-3 justify-center items-center w-full mt-2 mb-20'>
        {videos.map((e:any, i:any) =>(
            <div key={i}>
              <YouTube opts={opts} videoId={e} />
            </div>
        ))}

    </div>
  )
}