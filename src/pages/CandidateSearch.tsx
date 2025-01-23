import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import User from '../interfaces/User.interface'

const CandidateSearch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [gitHubUser, setGitHubUser] = useState<Candidate>({
    avatar_url: "",
    name: "",
    login: "", 
    location: "",
    email: "",
    company: "",
    html_url: "",
  });

  useEffect(() => {
    const fetchUsers = async ()  => {
      const result = await searchGithub();
      setUsers(result);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if(users.length > 0){
          const login = users[0].login;
        if(login){
            const fetchUserDetails = async () => {
                const userDetails = await searchGithubUser(login);
                setGitHubUser({
                    avatar_url: userDetails.avatar_url,
                    name: userDetails.name,
                    login: userDetails.login, 
                    location: userDetails.location,
                    email: userDetails.email,
                    company: userDetails.company,
                    html_url: userDetails.html_url,
                });
            };
            fetchUserDetails();
        }
      }
  }, [users]); //this effect runs when the user state is updated

  return (
      <>
          <h1>CandidateSearch</h1>
          {gitHubUser && (
              <div>
                    <p><img src={gitHubUser.avatar_url || ''} alt='The GitHub user avatar image'></img></p>
                    <h2>Developer Name: {gitHubUser.name || 'no name given'}</h2>
                    <h2>Location: {gitHubUser.location || 'no location'}</h2>
                    <h2>Email: {gitHubUser.email || 'no email'}</h2>
                    <h2>{gitHubUser.company}</h2>
                    <p><a href={gitHubUser.html_url || ''} target='_blank'>GitHub Profile</a></p>
              </div>
          )}
      </>
  );
};

export default CandidateSearch;
