import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        elements: {
          cardBox: `lg:w-[500px]`,
        },
      }}
    />
  );
}
