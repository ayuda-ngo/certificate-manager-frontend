import Link from "next/link";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  let { code, message } = router.query;

  code = code || "404";

  message = message.split(":");
  const title = message[0] || "Page not found";
  const reason = message[1] || "Please check the url.";

  return (
    <body className="w-screen h-screen font-sans antialiased text-gray-600 min-h-full flex flex-col">
      <div className="bg-white min-h-full flex justify-center items-center w-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
              {code}
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-1 text-base text-gray-800">{reason}</p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link href="/">
                  <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Go back home
                  </a>
                </Link>
                <Link href="mailto:ngoayuda@gmail.com">
                  <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-200 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </body>
  );
};

export default ErrorPage;
