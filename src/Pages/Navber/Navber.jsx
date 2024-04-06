import logo from '../../assets/ঈদ মোবারক.png';


const Navber = () => {
    return (
        <div>
            <div className="navbar bg-green-600 p-4">
                <div className="flex-1 ml-10">
                    <img className='w-36 rounded-xl h-12 animate-pulse' src={logo} alt="" />
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="খুজুন" className="input input-bordered w-24 md:w-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;