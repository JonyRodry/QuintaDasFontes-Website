import InicialText from "../../components/homepage_content/inicial-text/inicial-text.component";
import PhotosGrid from "../../components/homepage_content/photos_grid/photos_grid.component";
import VideoHome from "../../components/homepage_content/video/video.component";
import MapsForm from "../../components/contactos/boxSendEmailMaps.component"

import "./home.styles.css";
import LastEvents from "../../components/homepage_content/last_events/last_events.component";

function Home() {
  
  return (
    <div>
      <VideoHome/>
      <div className="space-between-divs"/>
      <InicialText/>
      <div className="space-between-divs"/>
      <PhotosGrid/>
      <div className="space-between-divs"/>
      <LastEvents/>
      <div className="space-between-divs"/>
      <MapsForm/>
      <div className="space-between-divs"/>
      <div className="comments-booking">
        <iframe title="frameReviewsBooking" src='https://widget-382bbc706463432a8b0eeeae3d741c10.elfsig.ht' width='60%' height='600' frameborder='0'></iframe>
      </div>
      <div className="space-between-divs"/>
    </div>
  );
}

export default Home;
