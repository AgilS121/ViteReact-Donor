import React from 'react'
import Layout from '../components/Layouts/Layout'
import darah from '../assets/img/darah.png'
import jantung from '../assets/img/jantung.png'
import bakteri from '../assets/img/bakteri.png'
import donor from '../assets/img/donor.png'
import cerita1 from '../assets/img/cerita1.png'
import garis from '../assets/img/line.png'
import CardStory from '../components/Fragments/CardStory'
import CustomButton from '../components/Elements/Button/CostumButton'
import { Link } from 'react-router-dom'

const storyList = [{
    id: 1,
    title: 'Cerita 1',
    image: cerita1,
    alt: 'cerita 1',
    desc: 'kepedulian terhadap kesehatan masyarakat adalah hal yang penting. Mahasiswa senior memberikan dorongan dan pengalaman mereka kepada yang lebih junior, menciptakan ikatan kuat di antara mereka dalam upaya menyelamatkan nyawa.'
},
{
    id: 2,
    title: 'Cerita 1',
    image: cerita1,
    alt: 'cerita 1',
    desc: 'kepedulian terhadap kesehatan masyarakat adalah hal yang penting. Mahasiswa senior memberikan dorongan dan pengalaman mereka kepada yang lebih junior, menciptakan ikatan kuat di antara mereka dalam upaya menyelamatkan nyawa.'
},
{

    id: 3,
    title: 'Cerita 1',
    image: cerita1,
    alt: 'cerita 1',
    desc: 'kepedulian terhadap kesehatan masyarakat adalah hal yang penting. Mahasiswa senior memberikan dorongan dan pengalaman mereka kepada yang lebih junior, menciptakan ikatan kuat di antara mereka dalam upaya menyelamatkan nyawa.'
},
]




const LandingPage = () => {
    return (
        <>
            <Layout>
                <div className="mt-20 bg-red-200 m-10 rounded-2xl">
                    <div className="container mx-auto grid grid-cols-12 gap-10 w-full py-20">
                        <div className="col-span-6 hidden md:flex flex-col justify-center items-center">
                            <video className="h-full w-full rounded-lg" controls>
                                <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-span-12 md:col-span-6 md:p-15 p-10 justify-center w-full h-full align-middle">
                            <p className="text-justify text-black text-lg font-bold mt-5">
                                “Setiap tetes darah yang kamu berikan adalah
                                tanda cinta dan kepedulianmu terhadap sesama.
                                Mari berbagi kebaikan dengan donor darah”
                            </p>
                            <div className="w-full md:w-72  mt-16">
                                <CustomButton variant="filled" title="Ayo Donor" type="md" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full hidden md:block" />
                <div className="container mx-auto grid grid-cols-12 gap-10 w-full py-20">
                    <div className="col-span-12">
                        <h1 className="text-center font-bold text-3xl">Apa saja manfaat Donor Darah?</h1>
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center text-center">
                        <div className="flex gap-4">
                            <div className="flex flex-col justify-end gap-3 max-w-[200px]">
                                <img src={darah} width={165} height={93} alt="cara-1" />
                                <h3 className="font-bold text-xl">Merangsang pertumbuhan
                                    sel darah baru.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center text-center">
                        <div className="flex gap-4">
                            <div className="flex flex-col justify-end gap-3 max-w-[200px]">
                                <img src={jantung} width={165} height={93} alt="cara-1" />
                                <h3 className="font-bold text-xl">Menurunkan resiko serangan
                                    jantung (88%).</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center text-center">
                        <div className="flex gap-4">
                            <div className="flex flex-col justify-end gap-3 max-w-[200px]">
                                <img src={bakteri} width={165} height={93} alt="cara-1" />
                                <h3 className="font-bold text-xl">Menurunkan resiko kanker
                                    (paru, liver, dll).</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3 flex justify-center text-center">
                        <div className="flex gap-4">
                            <div className="flex flex-col justify-end gap-3 max-w-[200px]">
                                <img src={donor} width={165} height={93} alt="cara-1" />
                                <h3 className="font-bold text-xl">Mendapatkan Pemeriksaan kesehatan gratis.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full hidden md:block" />
                <div className="mb-2">
                    <div className="container mx-auto grid grid-cols-12 gap-10 w-full py-20">
                        <div className="col-span-12">
                            <h1 className="text-center font-bold text-3xl">Cerita Baru</h1>
                        </div>
                        {storyList.map((story) => (
                            <div key={story.id} className="col-span-4 flex justify-center gap-6 ">
                                <CardStory>
                                    <CardStory.Header image={story.image} alt="gambar1" />
                                    <CardStory.Body title={story.title} gambar={garis} desc={story.desc} />
                                </CardStory>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center text-center align-middle ">
                        <div className='w-full max-w-sm'>
                            <Link to="/forumberbagi" >
                                <CustomButton variant="filled" title="Baca Cerita Lainnya" type="lg" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default LandingPage