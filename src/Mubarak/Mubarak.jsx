import moduleName from '../assets/heading-img.png';


const Mubarak = () => {
    return (
        <div>
            <div className="mt-10">
                <div className='flex flex-col items-center space-y-4 mb-8 pt-8 justify-center'>
                    <img src={moduleName} alt="" />
                    <h3 className='text-xs'>আসতেছে............</h3>
                    <h1 className='text-4xl font-semibold animate-pulse text-orange-400'>ঈদ মোবারক</h1>
                    <h1 className='text-2xl font-semibold text-amber-300'>-----নতুন রুপে-----</h1>
                </div>
            </div>

            <div className='lg:flex justify-center grid-cols-3 gap-4 mb-6'>

                <div
                    className="relative h-[14rem] w-full max-w-[18rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div
                        className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url(https://i.ibb.co/hdzr9Q4/522068-8140419-updates.jpg)] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                       ইপতার
                        </h2>
                    </div>
                </div>
                <div
               className="relative h-[14rem] w-full max-w-[18rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div
                        className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url(https://i.ibb.co/3M8tmtC/Shopping-mall-Prague.webp)] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                           শপিং মল
                        </h2>
                    </div>
                </div>
                <div
                className="relative h-[14rem] w-full max-w-[18rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div
                        className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url(https://i.ibb.co/JcvzTg8/images.jpg)] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                          যানবাহন
                        </h2>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Mubarak;