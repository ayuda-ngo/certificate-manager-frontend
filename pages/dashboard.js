import { signIn, signOut, useSession } from "next-auth/react";

import instance from "../lib/axiosInstance";

const Dashboard = ({ data }) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {JSON.stringify(session.user, null, 2)} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <div>
          <h1>Dashboard</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
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

export async function getServerSideProps(context) {
  const res = await instance.get(`/certificates`);
  const data = res.data;

  if (data.success) {
    return {
      props: {
        data,
      },
    };
  }

  return {
    props: {
      data: {
        success: false,
        message: data.message,
        data: null,
      },
    },
  };
}

export default Dashboard;
