import React from 'react'
import {
    CalendarIcon
  } from "@heroicons/react/24/outline"
import CardStory from '../components/Fragments/CardStory'
import Layout from '../components/Layouts/Layout'
import lokasi from '../assets/img/lokasi.svg'
import lokasi1 from '../assets/img/lokasi1.svg'
import lokasi2 from '../assets/img/lokasi2.svg'
import lokasi3 from '../assets/img/lokasi3.svg'
import lokasi4 from '../assets/img/lokasi4.svg'

const locations = [
    {
      image: lokasi1,
      bloodType: 'Golongan Darah A+',
      description: 'Jumlah kantong darah yang tersedia untuk golongan darah A+',
      schedule: '6 November 2023 09.00 - 16.00 WIB',
    },
    {
        image: lokasi2,
        bloodType: 'Golongan Darah A+',
        description: 'Jumlah kantong darah yang tersedia untuk golongan darah A+',
        schedule: '6 November 2023 09.00 - 16.00 WIB',
    },
    {
      image: lokasi3,
      bloodType: 'Golongan Darah A+',
      description: 'Jumlah kantong darah yang tersedia untuk golongan darah A+',
      schedule: '6 November 2023 09.00 - 16.00 WIB',
    },
    {
        image: lokasi4,
        bloodType: 'Golongan Darah A+',
        description: 'Jumlah kantong darah yang tersedia untuk golongan darah A+',
        schedule: '6 November 2023 09.00 - 16.00 WIB',
    },
  ];

const PageLocation = () => {
  return (
    <Layout>
      <div className="mt-20 bg-red-200 m-10 rounded-2xl p-10">
        <div className="container mx-auto grid grid-cols-12 gap-10 w-full py-10">
          <div className="col-span-4 hidden md:flex flex-col justify-center items-center">
            <img src={lokasi} alt="donor" />
          </div>
          <div className="col-span-12 md:col-span-8 md:p-15 p-10 justify-center w-full h-full align-middle">
            <h1 className="text-justify text-black text-3xl font-bold mt-5" >Jadwal dan Lokasi Donor Darah</h1>
            <p className="text-justify text-black text-lg mt-5">
            Selamat datang di halaman jadwal dan lokasi donor darah IBDP, di mana kesempatan untuk memberikan kehidupan ada di ujung jarimu. IBDP memahami bahwa waktu berharga, dan itulah mengapa IBDP menyediakan informasi lengkap tentang jadwal donor darah beserta dengan lokasinya agar Anda dapat berpartisipasi dengan mudah.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-10 w-max py-20">
        {locations.map((location, index) => (
          <div key={index} className="col-span-12 border border-solid border-gray-300 rounded-2xl p-10">
            <div className="flex gap-5">
              <div className="flex flex-col justify-start">
                <div className="h-32 w-48 rounded-lg border border-gray-300 border-solid flex flex-col justify-center items-center gap-2">
                  <img src={location.image} className="object-cover h-screen" alt={`lokasi${index + 1}`} />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl">{location.bloodType}</h3>
                <p className="text-lg font-normal">{location.description}</p>
                <p>
                  <CalendarIcon className="h-5 w-5 text-gray-500 inline-block mr-1" />
                  {location.schedule}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default PageLocation