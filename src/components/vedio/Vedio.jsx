import moment from 'moment/moment';
const Vedio = () => {
    return (
        <section className='home'>
            <div className="over-lay"></div>
            <video 
                src="src/assets/184734-873923034.mp4" 
                autoPlay 
                muted 
                loop 
            ></video>
            <div className="flex flex-col justify-center items-center gap-2 py-2 z-10 absolute top-0 left-0 w-full h-full">
                <div className='pathfinder'>
                    <h1 className='text-7xl font-bold text-cyan-500'>PATHFINDER</h1>
                </div>
                <h1 className='text-white'>Embark on the ultimate adventure and create memories that last a lifetime!</h1>
                <p className='font-semibold text-white'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
        </section>
    );
};

export default Vedio;
