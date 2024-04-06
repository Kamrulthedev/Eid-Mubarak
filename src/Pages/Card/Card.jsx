import img1 from '../../assets/Untitled design.png';
import img2 from '../../assets/Untitled design (1).png';
import img3 from '../../assets/Untitled design (2).png';
import img4 from '../../assets/Add a subheading.png';


const Card = () => {
    return (
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mb-10 gap-2'>

            <div className="  w-48 h-80 lg:ml-48  -mt-10">
                <img className='rounded-b-full border-2' src={img1} alt="" />
            </div>

            <div className=" w-48 h-80  lg:ml-24 rounded-b-full -mt-10">
                <img className='rounded-b-full border-2'  src={img2} alt="" />
            </div>

            <div className=" w-48 h-80 lg:-mr-24 rounded-b-full -mt-10">
                <img className='rounded-b-full border-2' src={img3} alt="" />
            </div>

            <div className=" w-48 h-80 lg:-ml-24 rounded-b-full -mt-10 items-center">
                <img className='rounded-b-full border-2' src={img4} alt="" />
            </div>


        </div>
    );
};

export default Card;