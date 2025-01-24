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
    bio: "",
    public_repos: -1,
  });

  useEffect(() => {
    const fetchUsers = async ()  => {
      const result = await searchGithub();
      console.log(`Number of public repositiories = ${result.public_repos}`)
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
                    bio: userDetails.bio,
                    public_repos: userDetails.public_repos,

                });
            };
            fetchUserDetails();
        }
      }
  }, [users]); //this effect runs when the user state is updated

  const saveCandidate = () => {
        console.log('running saveCandidate');
        let parsedCandidateToSave: Candidate[] = [];
        const storedCandidates = localStorage.getItem('savedCandidates');
        if(typeof storedCandidates === 'string'){
            parsedCandidateToSave = JSON.parse(storedCandidates);
        }
        parsedCandidateToSave.push(gitHubUser);
        localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidateToSave));
  }

  return (
      <>
          <h1>CandidateSearch</h1>
          {gitHubUser && (
            <>
                <div className="card">
                    <div className="card-header">
                        <img src={gitHubUser.avatar_url || ''} alt="The GitHub user avatar" className="avatar" />
                        <h2>{gitHubUser.login}</h2>
                    </div>

                    <div className="card-body">
                        <p><strong>Developer Name:</strong> {gitHubUser.name || 'no name given'}</p>
                        <p><strong>Location:</strong> {gitHubUser.location || 'no location'}</p>
                        <p><strong>Email:</strong> {gitHubUser.email || 'no email'}</p>
                        <p><strong>Company:</strong> {gitHubUser.company || 'no company listed'}</p>
                        <p><strong>Number of public repositories:</strong> {gitHubUser.public_repos}</p>
                        <p><strong>Bio:</strong> {gitHubUser.bio || 'no bio'}</p>
                    </div>

                    <div className="card-footer">
                        <a href={gitHubUser.html_url || ''} target="_blank" rel="noopener noreferrer" className="profile-link">
                          View GitHub Profile
                        </a>
                    </div>

                </div>
                <button type='button' onClick={saveCandidate}>Add</button>
            </>
          )}
          
      </>
  );
};

export default CandidateSearch;
