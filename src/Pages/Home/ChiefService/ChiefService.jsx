import image from '../../../assets/home/chef-service.jpg'

const ChiefService = () => {
    return (
        <div style={{backgroundImage:`url(${image})`}} className={`flex justify-center items-center my-7 bg-fixed`}>
            <div className='w-[80%] my-24 bg-white text-center px-12 py-12 '>
                <h2 className='text-3xl '>Bistro Boss</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ratione veniam fugit, est quos nisi id atque, incidunt, illum dolorem corrupti a tenetur sint placeat ipsum ipsa nemo dolor praesentium numquam deserunt corporis commodi at ut. Et alias, voluptates nemo, iure voluptatibus corrupti, consequuntur odio ratione quos dignissimos quam vero?</p>
            </div>
            
        </div>
    );
};

export default ChiefService;