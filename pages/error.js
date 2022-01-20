import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <pre>{JSON.stringify(router.query, null, 2)}</pre>
    </>
  );
};

export default ErrorPage;
