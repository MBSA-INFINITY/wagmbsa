// pages/index.js

import React from 'react';

const apiUrl = 'https://tetragram.codered.cloud/api/v2/pages/';

function Home({ data }) {
  return (
    <div className="App">
      <p className="mbsa">{JSON.stringify(data)}</p>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
