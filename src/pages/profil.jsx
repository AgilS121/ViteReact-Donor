import React from 'react'
import Layout from '../components/Layouts/Layout'
import profile from '../assets/img/profile.png'
import line from '../assets/img/line.png'
import CustomButton from '../components/Elements/Button/CostumButton'
import { Typography } from '@material-tailwind/react'
import ig from '../assets/img/ig.png'
import wa from '../assets/img/wa.png'
import yt from '../assets/img/yt.png'

const ProfilPage = () => {
    return (
        <Layout>
            <div className="mt-20 m-10 rounded-2xl p-10">
                <div className="container mx-auto grid grid-cols-12 gap-10 w-full py-10">
                    <div className="col-span-4 hidden md:flex flex-col justify-center items-center">
                        <img src={profile} alt="donor" />
                    </div>
                    <div className="col-span-12 md:col-span-8 md:p-15 p-10 justify-center w-full h-full align-middle">
                        <p className="text-justify text-black text-2xl mt-20 ">
                            “Setiap tetes darah yang kamu berikan adalah tanda cinta dan kepedulianmu terhadap sesama.Mari berbagi kebaikan dengan donor darah dan berbagi pengalaman mu”
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-12 gap-10 w-max py-20">
                <div className="col-span-12 border border-solid border-gray-300 rounded-2xl p-10">
                    <div className="flex gap-20">
                        <div className="flex flex-col justify-start">
                            <div className="h-62 w-62 rounded-lg flex flex-col justify-center items-center gap-2">
                                <h3 className="font-bold text-xl ">Akun</h3>
                                <img src={line} alt="" width={200} />
                                <h3 className="font-bold text-xl">Ganti Sandi</h3>
                                <img src={line} alt="" width={200} />
                                <h3 className="font-bold text-xl">Keluar</h3>
                                <img src={line} alt="" width={200} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-1">
                            <div className='grid grid-cols-12 justify-center mx-auto mt-2'>
                                <img className='col-span-1 mt-1' src={profile} width={80} height={100} alt="cara-1" />
                                <p className="text-lg font-normal col-span-10 ml-3">
                                    Aisyah<br />
                                    +628xxxxxxxx<br />
                                    Example@gmail.com
                                </p>
                                <CustomButton></CustomButton>
                            </div>
                            <div className='grid grid-cols-12 mt-2'>
                                <p className="text-lg font-normal col-span-3 ml-3">
                                Tanggal Lahir
                                </p>
                                <p className='text-lg font-normal col-span-9 ml-3 text-end'>
                                17 Agustus 1987
                                </p>
                                
                            </div>
                            <img src={line} alt="" className='col-span-12 text-xs'/>
                            <div className='grid grid-cols-12 mt-2'>
                                <p className="text-lg font-normal col-span-3 ml-3">
                                    Aisyah
                                </p>
                                <p className='text-lg font-normal col-span-9 ml-3 text-end'>
                                    Aisyah
                                </p>
                            </div>
                            <img src={line} alt="" className='col-span-12'/>
                            <div className='grid grid-cols-12 mt-2'>
                                <p className="text-lg font-normal col-span-3 ml-3">
                                    Aisyah
                                </p>
                                <p className='text-lg font-normal col-span-9 ml-3 text-end'>
                                    Aisyah
                                </p>
                            </div>
                            <img src={line} alt="" className='col-span-12'/>
                            <div className='grid grid-cols-12 mt-2'>
                                <p className="text-lg font-normal col-span-3 ml-3">
                                    Aisyah
                                </p>
                                <p className='text-lg font-normal col-span-9 ml-3 text-end'>
                                    Aisyah
                                </p>
                            </div>
                            <img src={line} alt="" className='col-span-12'/>
                            <div className='grid grid-cols-12 mt-2'>
                                <p className="text-lg font-normal col-span-3 ml-3">
                                    Aisyah
                                </p>
                                <p className='text-lg font-normal col-span-9 ml-3 text-end'>
                                    Aisyah
                                </p>
                            </div>
                            <img src={line} alt="" className='col-span-12'/>
                            <div className='grid grid-cols-12 mt-2'>
                                <p className="text-lg font-normal col-span-3 ml-3">
                                    Aisyah
                                </p>
                                <p className='text-lg font-normal col-span-9 ml-3 text-end'>
                                    Aisyah
                                </p>
                            </div>
                            <img src={line} alt="" className='col-span-12'/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProfilPage