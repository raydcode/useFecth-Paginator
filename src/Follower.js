import React from 'react';

const Follower = ({ avatar_url, login }) => {
  return (
    <article className="card">
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
    </article>
  );
};

export default Follower;
