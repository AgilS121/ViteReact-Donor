import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons'
import Layout from '../components/Layouts/Layout'
import { useParams } from 'react-router-dom'
import storiesData from './StoriesData'

// eslint-disable-next-line react/prop-types
const DetailCerita = () => {

    const { id } = useParams();
    const selectedStory = storiesData.find((story) => story.id.toString() === id);
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

    return (
        <Layout>
        <div className="flex justify-center items-center p-8 m-8 rounded-lg ">
        {/* eslint-disable-next-line react/prop-types */}
        <img src={selectedStory.image} alt={selectedStory.kategori}
          className="object-cover object-top w-full h-80 rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start px-11 mx-11">
          <div className="text-justify  items-start rounded-lg">
            {/* eslint-disable-next-line react/prop-types */}
            <p className="px-6 rounded-lg" style={{ backgroundColor: '#FF8888' }}>{selectedStory.kategori}</p>
          </div>
          {/* eslint-disable-next-line react/prop-types */}
          <h2 className="text-xl font-bold pt-6 pb-6">{selectedStory.title}</h2>
          <div className="flex justify-between space-x-4 pt-4 pb-4">
                <div className="items-end space-x-4">
                  {/* eslint-disable-next-line react/prop-types */}
                  <span className=" ml-1"><FontAwesomeIcon icon={faUser} /> {selectedStory.nameUser}</span>
                </div>

                <div className="flex items-end px-4">
                  <span className=" ml-1"><FontAwesomeIcon icon={faClock} /> {formattedDate}</span>
                </div>

          </div>
        </div>
        <div className='flex flex-col justify-center px-11 mx-11'>
          <hr className="border border-black mt-4 mb-4" />

          {/* eslint-disable-next-line react/prop-types */}
          <p className="text-justify">{selectedStory.description}</p>
        </div>
        </Layout>
    )
}

export default DetailCerita