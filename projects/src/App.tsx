import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    setTimeout(function () {
      window.location.href =
        "http://nyit-user-page.s3-website-us-west-1.amazonaws.com/#/";
    }, 3000);
  }, []);

  return (
    <div>
      <h2>Server 1</h2>
    </div>
  );
}

export default App;
