import vedio১ from '../../assets/Quiz.mp4';

const HomeCard = () => {
    return (
        <div className="w-full lg:flex">
            <div className="w-1/2 flex-grow">
                <h1 className="p-10 text-lime-400">ঈদুল ফিতর মুসলমানদের কাছে একটি অত্যন্ত আনন্দের দিন। এটি ইসলাম ধর্মের সবচেয়ে বড় উৎসব। পবিত্র রমজান মাসের ৩০ দিন রোজা রাখার পর চাঁদ দেখে ঈদুল ফিতর উদযাপন করা হয়। এই বিশেষ দিনে সকল মুসলিম ভাই মিলে ঈদগাহ মাঠে জড়ো হয়ে ঈদের নামাজ আদায় করেন। নামাজের পর তারা একে অপরের সাথে ঈদের শুভেচ্ছা বিনিময় করেন এবং আলিঙ্গন করেন। ঈদুল ফিতর শুধু আনন্দের উৎসবই নয়, বরং এটি ভ্রাতৃত্ব, বন্ধুত্ব এবং সামাজিক সম্প্রীতিরও বার্তা বহন করে। এই দিনে ধনী-দরিদ্র সকলেই একসাথে ঈদের আনন্দ উপভোগ করেন।</h1>
                <h1></h1>
            </div>
          
            <div className="relative w-1/2 p-4">
                <div className="relative">
                    <video className="w-full" autoPlay muted loop>
                        {/* Provide the correct source and type */}
                        <source src={vedio১} type="video/mp4" />
                        {/* Provide an alternative message if the browser doesn't support video */}
                        Your browser does not support the video tag.
                    </video>

                </div>
            </div>

        </div>
    );
};

export default HomeCard;