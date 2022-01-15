import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LogIn = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredEmail, enteredPassword);

    const res = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (res.error) {
      console.log(res.error);
    } else {
      router.replace("/dashboard");
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" id="email" required ref={emailInputRef} />
        <br />
        <label>Password:</label>
        <input type="password" id="password" required ref={passwordInputRef} />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const csrfToken = await getCsrfToken(context);
//   return {
//     props: { csrfToken },
//   };
// }

export default LogIn;
