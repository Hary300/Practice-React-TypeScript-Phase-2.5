import ProfileCard from './components/profile-card/ProfileCard';
import dataUsers from './data/users';

function App() {
  return (
    <div className='max-w-200 m-auto p-4 flex flex-col gap-5 pt-4 md:pt-20'>
      <h1 className='text-center'>Profile Card</h1>
      <div className='grid md:grid-cols-2 gap-2 md:gap-5'>
        {dataUsers.map((dataUser) => (
          <ProfileCard key={dataUser.id} user={dataUser} />
        ))}
      </div>
    </div>
  );
}

export default App;
