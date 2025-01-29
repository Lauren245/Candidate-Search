import { useState } from 'react';
import Candidate from '../interfaces/Candidate.interface';
import { IoCloseCircleSharp } from 'react-icons/io5';

const SavedCandidates = () => {

  const candidateArr: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]')
  const [candidates, setCandidates] = useState<Candidate[]>(candidateArr);

  const deleteCandidate = (candidate: Candidate) => {
    try{
        const storedCandidates = localStorage.getItem('savedCandidates');
        const candidates: Candidate[] = storedCandidates ? JSON.parse(storedCandidates) : [];
        const index = candidates.findIndex(i => i.login === candidate.login);

        if(index != -1){
          console.log(`found a match for ${candidate.login}: ${candidates[index].login} at index ${index}`);
          candidates.splice(index, 1); //remove candidate from the array.

          //save the updated array to local storage
          localStorage.setItem('savedCandidates', JSON.stringify(candidates));
          setCandidates(candidates);

        }else{
          throw new Error(`unable to find a match for ${candidate.login}`);
        }
    }catch(error){
        if(error instanceof Error){
          console.error(`deleteCandidate encoutered an error ${error.message}`);
        }else{
          console.error(`deleteCandidate encountered an error ${error}`);
      }
    }
  }

  return (
    <div className ='table-container'>
      <h1>Potential Candidates</h1>
      {candidates.length > 0 ?(
        <table>
          <thead>
            <tr>
              {/* I opted to harcode these instead of getting them from the array because the key names are not very nice looking. */}
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => {
              console.log(`candidates.length = ${candidates.length}`);
              return (
                <tr key={candidate.login}>
                  <td><img src={candidate.avatar_url || ''} alt="The GitHub user avatar" className="avatar-scaled" /></td>
                  <td>{candidate.name || 'no name given'}
                    <br />
                    <a href={candidate.html_url || ''} target="_blank" rel="noopener noreferrer" className="profile-link">
                        {candidate.login}
                    </a>
                  </td>
                  <td>{candidate.location || 'no location'}</td>
                  <td>{candidate.email || 'no email'}</td>
                  <td>{candidate.company || 'no company listed'}</td>
                  <td>{candidate.bio || 'no bio'}</td>
                  <td><IoCloseCircleSharp className="reject-button-small" onClick={() => {deleteCandidate(candidate)}} /></td>
                </tr>
              )
            }
          )}
          </tbody>
        </table>
        ) : (
          <>
            <h2>No candidates exist</h2>
            <p>Visit the candidate search page to add new candidates.</p>
          </>
        )} 
    </div>
  );
};

export default SavedCandidates;
