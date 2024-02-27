import Image from 'next/image';

export default function LoginLogo({ signIn }: { signIn: boolean }) {
  return (
    <div className="flex flex-col mx-auto justify-center items-center">
      <h2 className="flex font-medium text-center">
        <Image src="/GD_Title.svg" alt="Gamedoora" width={359} height={128} />
      </h2>
      <p className="mt-6 mx-32 text-2xl" style={{color: '#7D7A77'}}>
        {signIn
          ? 'Login'
          : 'Sign Up'}
      </p>
    </div>
  );
}
