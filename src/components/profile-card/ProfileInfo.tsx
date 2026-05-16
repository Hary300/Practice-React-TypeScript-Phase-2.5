import { type User } from '../types/user-type';

type ProfileInfoProps = {
  user: User;
};

export default function ProfileInfo({ user }: ProfileInfoProps) {
  return (
    <div className='flex flex-col gap-2 '>
      <p>
        <strong>Name: </strong>
        {user.name}
      </p>

      <div className='flex gap-2 mb-8'>
        <p>
          <strong>Followers: </strong> {user.stats.followers}
        </p>
        <p>
          <strong>Following:</strong> {user.stats.following}
        </p>
        <p>
          <strong>Projects: </strong>
          {user.stats.projects}
        </p>
      </div>

      <p>
        <strong>Role: </strong> {user.role}
      </p>
      <p>
        <strong>Bio: </strong> {user.bio}
      </p>
      <p>
        <strong>Location: </strong> {user.location}
      </p>

      <p
        className={`font-bold border py-1 px-2 w-fit rounded-2xl ${user.isAvailableForHire ? 'text-green-400 border-green-500' : 'text-red-500 border-red-500'}`}
      >
        {user.isAvailableForHire
          ? 'Available for Hire'
          : 'Unavailable for Hire'}
      </p>
    </div>
  );
}
