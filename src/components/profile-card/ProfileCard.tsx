import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import { type User } from '../types/user-type';

type ProfileCardProps = {
  user: User;
};

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className=' flex flex-col items-center rounded-2xl p-4 md:p-10 shadow-[0_0_5px_rgba(0,0,0,0.5)] gap-10'>
      <ProfileImage name={user.name} imageUrl={user.imageUrl} />
      <ProfileInfo user={user} />
    </div>
  );
}
