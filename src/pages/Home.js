import React from "react";
import LoadingIndicator from '../components/LoadingIndicator'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
