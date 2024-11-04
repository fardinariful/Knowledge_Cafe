import profile from '../../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center container mx-auto mt-10 border-b-2'>
              <h3 className='text-4xl font-bold'>Knowledge cafe</h3>
               <img className='w-10' src={profile} alt="" />
        </div>
    );
};

export default Header;