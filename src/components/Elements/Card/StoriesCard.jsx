import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faComment, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const StoriesCard = ({ kategori, title, story}) => {
    return (
        <div className="max-w-xs overflow-hidden shadow-lg mx-auto my-4 p-4" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.4)' }}>
            {/* eslint-disable-next-line react/prop-types */}
            <Link to={`/forumberbagi/${story.id}`} story={story}>
            {/* eslint-disable-next-line react/prop-types */}
                <img className="object-cover" src={story.image} alt={story.kategori} />
            </Link>
            <div className="px-6 py-4 rounded-b-lg">
                <div className="text-black bg-red-400 font-semibold rounded-lg text-sm mb-2 text-center">{kategori}</div>
                <p className="text-black font-bold text-lg text-center">{title}</p>
            </div>
            <div className="flex space-x-4 pt-3 pb-3">
                {/* eslint-disable-next-line react/prop-types */}
                <img className="object-cover w-10 h-10" src={story.imgUser} alt="User Image" />
                {/* eslint-disable-next-line react/prop-types */}
                <p className="font-semibold text-md ">{story.nameUser} </p>
            </div>
            <p
            className="text-gray-950  text-base mb-4 text-justify"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {/* eslint-disable-next-line react/prop-types */}
            {story.description}
          </p>
            <div className="flex justify-between space-x-4 pt-4 pb-4">
                        <div className="flex items-start px-4">
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className=" ml-1 font-bold"><FontAwesomeIcon icon={faClock} /> {story.date}</span>
                        </div>

                        <div className="items-end space-x-4 px-4">
                        <FontAwesomeIcon icon={faComment} />
                        <FontAwesomeIcon icon={faArrowAltCircleUp} />
                        </div>
                </div>
        </div>
    );
};

export default StoriesCard;
