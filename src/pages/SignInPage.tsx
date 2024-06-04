import { SignIn } from '@clerk/clerk-react';
import Main from '../components/Main';

export default function SignInPage() {
  return (
    <Main className="flex flex-col items-center justify-center">
      <SignIn />
    </Main>
  );
}
