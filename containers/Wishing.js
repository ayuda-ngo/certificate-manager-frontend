const Wishing = ({ username }) => {
  const greeting = () => {
    let currentHours = new Date().getHours();
    if (currentHours < 12) {
      return "Good Morning";
    } else if (currentHours < 18) {
      return "Good Afternoon";
    } else return "Good Evening";
  };

  return (
    <h1 className="font-semibold text-xl pb-8">
      {greeting()}, {username} 👋
    </h1>
  );
};

export default Wishing;
