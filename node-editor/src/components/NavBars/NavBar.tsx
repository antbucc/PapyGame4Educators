import { UserProfile } from '@auth0/nextjs-auth0/client';
import { Button, HStack, Image } from '@chakra-ui/react';
import Link from 'next/link';
import brandLogo from '../../public/papygame-horizontal-white.png';
import Nav from '../Layout/NavBar';

type NavBarProps = {
  user: UserProfile | undefined;
};

export default function Navbar({ user }: NavBarProps) {
  return (
    <Nav bg="#273c66">
      <HStack>
        <Image
          src={brandLogo.src}
          width={['180px']}
          className="mr-3"
          alt="PapyGame Logo"
        />
      </HStack>
      {!user ? (
        <div className="rounded-lg bg-cyan-400 pr-2 pl-2 pt-1 pb-1">
          <Link
            href={process.env.TEST_MODE === 'true' ? {} : '/api/auth/login'}
            className="text-white"
            style={{ textDecoration: 'none' }}
          >
            Sign in
          </Link>
        </div>
      ) : (
        <HStack>
          <div>{user.name}</div>
          <Link
            href={process.env.TEST_MODE === 'true' ? {} : '/api/auth/logout'}
            style={{ textDecoration: 'none' }}
          >
            <Button colorScheme="red" size={['sm', 'md']}>
              Log out
            </Button>
          </Link>
        </HStack>
      )}
    </Nav>
  );
}
