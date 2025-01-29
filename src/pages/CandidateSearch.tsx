import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from 'react-icons/io5';
import Candidate from '../interfaces/Candidate.interface';
import User from '../interfaces/User.interface'

const CandidateSearch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [gitHubUser, setGitHubUser] = useState<Candidate>({
    avatar_url: '',
    name: '',
    login: '', 
    location: '',
    email: '',
    company: '',
    html_url: '',
    bio: '',
    public_repos: -1,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  console.log('***isLoading = ' + isLoading);
  console.log('***refresh = ' + refresh);

  useEffect(() => {
    const fetchUsers = async ()  => {
      try{
        setErrorMessage('');
        const result = await searchGithub();
        //check if call was successful but didn't return anything (ie. 404 error)
        if(!result || result.length === 0){
          throw new Error('no users found');
        }
        setUsers(result);

      }catch(error){
          console.error(`failed to fetch users: ${error}`);
          setErrorMessage('Unable to fetch users. Please try again.');

      }finally{
        setIsLoading(false); //Mark loading as complete.
      }

    };
    fetchUsers();
  }, [refresh]); 

  useEffect(() => {
    if(isLoading) return; //Don't log an error while loading users
      if(users.length > 0){
          const login = users[0].login;
          if(login){
            const fetchUserDetails = async () => {
                try{          
                  const userDetails = await searchGithubUser(login);
                  if(Object.keys(userDetails).length === 0){
                    throw new Error('User details not found');
                  }
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
                }catch(error){
                  console.error(`Failed to fetch user details: ${error}`);
                  setErrorMessage('Unable to fetch user details. Please try again.');
                }
            };
              fetchUserDetails();
          }
        }else{
          console.error('Unable to find a user profile.');
          setErrorMessage('Unable to find a user profile. Please try again.');
          
        }
  }, [users, isLoading]); //this effect runs when the user state is updated

  const saveCandidate = () => {
        try{
            let parsedCandidateToSave: Candidate[] = [];
            const storedCandidates = localStorage.getItem('savedCandidates');

            if(typeof storedCandidates === 'string'){
                parsedCandidateToSave = JSON.parse(storedCandidates);
            }

            parsedCandidateToSave.push(gitHubUser);
            localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidateToSave));

            //move on to the next candidate.
            nextCandidate();

          }catch(error){
            console.error(`An error occured when accessing localStorage: ${error}`);
            setErrorMessage('An Error occured while accessing localStorage. Check the console for more details');
          }      
  }
  const nextCandidate = () => {
    setErrorMessage('');
    if(users.length > 1){
        //an API call returns 30 users. Run through these first before making a new API call.
        setUsers((prevUsers) => prevUsers.slice(1)); //Remove the current user and get the next one
        console.log(`REMAINING USERS = ${users.length}`);
      }else{
        //no more candidates re-run the API call
        setIsLoading(true);
        setRefresh((prev) => !prev);
      }
  }


  return (
    <>
      <h1>CandidateSearch</h1>
      {errorMessage ? (
        <div className='card'>
          <h2 className='error-message'>{errorMessage}</h2>
          <button type='button' onClick={nextCandidate}>Refresh</button>
        </div>
      ) : (
        gitHubUser && (
          <>
            <div className='card'>
              <div className='card-header'>
                <img src={gitHubUser.avatar_url || ''} alt='The GitHub user avatar' className='avatar' />
                <h2>{gitHubUser.login}</h2>
              </div>

              <div className='card-body'>
                <p><strong>Developer Name:</strong> {gitHubUser.name || 'no name given'}</p>
                <p><strong>Location:</strong> {gitHubUser.location || 'no location'}</p>
                <p><strong>Email:</strong> {gitHubUser.email || 'no email'}</p>
                <p><strong>Company:</strong> {gitHubUser.company || 'no company listed'}</p>
                <p><strong>Number of public repositories:</strong> {gitHubUser.public_repos}</p>
                <p><strong>Bio:</strong> {gitHubUser.bio || 'no bio'}</p>
              </div>

              <div className='card-footer'>
                <a href={gitHubUser.html_url || ''} target='_blank' rel='noopener noreferrer' className='profile-link'>
                  View GitHub Profile
                </a>
              </div>
            </div>
            <div className='button-container'>
              <IoCloseCircleSharp className='reject-button' onClick={nextCandidate} />
              <IoCheckmarkCircleSharp className='save-button' onClick={saveCandidate} />
            </div>
          </>
        )
      )}
    </>
  );
};

export default CandidateSearch;
