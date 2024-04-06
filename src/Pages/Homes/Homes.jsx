import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import vedio১ from '../../assets/Sh/Quiz.mp4';

import vedio from '../../assets/Quiz.mp4';
import vedio2 from '../../assets/Quiz (2).mp4';

const Homes = () => {
  return (
    <Carousel>
    
      <div className="relative">
        <div className="relative">
          <video className="w-full" autoPlay muted loop>
            {/* Provide the correct source and type */}
            <source src={vedio১} type="video/mp4" />
            {/* Provide an alternative message if the browser doesn't support video */}
            Your browser does not support the video tag.
          </video>

        </div>
      </div>


      <div className="relative">
        <div className="relative">
          <video className="w-full" autoPlay muted loop>
            {/* Provide the correct source and type */}
            <source src={vedio2} type="video/mp4" />
            {/* Provide an alternative message if the browser doesn't support video */}
            Your browser does not support the video tag.
          </video>

        </div>
      </div>

      <div className="relative">
        <div className="relative">
          <video className="w-full" autoPlay muted loop>
            {/* Provide the correct source and type */}
            <source src={vedio} type="video/mp4" />
            {/* Provide an alternative message if the browser doesn't support video */}
            Your browser does not support the video tag.
          </video>

        </div>
      </div>
    </Carousel>
  );
};

export default Homes;
