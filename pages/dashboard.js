import { signIn, signOut, useSession } from "next-auth/react";

import instance from "../lib/axiosInstance";

const Dashboard = ({ certificates, error }) => {
  const { data: session } = useSession();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (session) {
    return (
      <>
        Signed in as {JSON.stringify(session.user, null, 2)} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <div>
          <h1>Dashboard</h1>
          <pre>{JSON.stringify(certificates, null, 2)}</pre>
        </div>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

Dashboard.authenticationEnabled = true;

export async function getServerSideProps() {
  const res = await instance.get(`/certificates`);
  const data = res.data;

  if (data.success) {
    return {
      props: {
        certificates: data.data,
      },
    };
  }

  return {
    props: {
      error: {
        message: data.message,
      },
    },
  };
}

export default Dashboard;
