import React from 'react'
import CardForum from '../components/Fragments/CardForum'
import Layout from '../components/Layouts/Layout'
import user from '../assets/img/user.png'
import forum1 from '../assets/img/forum1.png'
import CustomPagination from '../components/Fragments/CustomPagination'
const Forums = [{
  id:1,
  image: forum1,
  category: 'Donor Darah',
  images: user,
  title: 'Cerita Para Pendonor Darah Perdana',
  desc:'Sikap peduli terhadap sesama diterapkan dalam bentuk nyata di kalangan pegawai Badan Narkotika Nasional...',
  tanggal: '13 Okt 2023',
},{
  id:2,
  image: forum1,
  category: 'Donor Darah',
  images: user,
  title: 'Cerita Para Pendonor Darah Perdana',
  desc:'Sikap peduli terhadap sesama diterapkan dalam bentuk nyata di kalangan pegawai Badan Narkotika Nasional...',
  tanggal: '13 Okt 2023',
},{
  id:3,
  image: forum1,
  category: 'Donor Darah',
  images: user,
  title: 'Cerita Para Pendonor Darah Perdana',
  desc:'Sikap peduli terhadap sesama diterapkan dalam bentuk nyata di kalangan pegawai Badan Narkotika Nasional...',
  tanggal: '13 Okt 2023',
},{
  id:4,
  image: forum1,
  category: 'Donor Darah',
  images: user,
  title: 'Cerita Para Pendonor Darah Perdana',
  desc:'Sikap peduli terhadap sesama diterapkan dalam bentuk nyata di kalangan pegawai Badan Narkotika Nasional...',
  tanggal: '13 Okt 2023',
}
,{
  id:5,
  image: forum1,
  category: 'Donor Darah',
  images: user,
  title: 'Cerita Para Pendonor Darah Perdana',
  desc:'Sikap peduli terhadap sesama diterapkan dalam bentuk nyata di kalangan pegawai Badan Narkotika Nasional...',
  tanggal: '13 Okt 2023',
}
,{
  id:6,
  image: forum1,
  category: 'Donor Darah',
  images: user,
  title: 'Cerita Para Pendonor Darah Perdana',
  desc:'Sikap peduli terhadap sesama diterapkan dalam bentuk nyata di kalangan pegawai Badan Narkotika Nasional...',
  tanggal: '13 Okt 2023',
}
,{
  id:7,
  image: forum1,
  category: 'Donor Darah',
  images: user,
  title: 'Cerita Para Pendonor Darah Perdana',
  desc:'Sikap peduli terhadap sesama diterapkan dalam bentuk nyata di kalangan pegawai Badan Narkotika Nasional...',
  tanggal: '13 Okt 2023',
}
]
const ForumPage = () => {
  return (
    <>
      <Layout>
      <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 flex justify-center mt-20">
            <h1 className="text-center font-bold text-3xl max-w-[500px]">
              Cerita terbaru
            </h1>
          </div>
          <div className="col-span-12 flex justify-center">
            <p className="text-center font-medium text-xl max-w-[500px]">
              Baca pengalaman cerita para relawan
            </p>
          </div>
            {Forums.map((forums) => (
              <div key={forums.id} className="col-span-12 md:col-span-4 ">
                <div className="flex gap-10 justify-center">
              <CardForum>
                <CardForum.Header image={forums.image} alt="forum1" />
                <CardForum.Body images={forums.images} category={forums.category} title={forums.title} desc={forums.desc} />
                <CardForum.Footer tanggal={forums.tanggal}/>
              </CardForum>
              </div>
              </div>
            ))}
            
            </ div>
            <div className='flex justify-center text-center m-10'>
            <CustomPagination/>
            </div>
      </Layout>
    </>
  )
}

export default ForumPage