import Candidate from '../interfaces/Candidate.interface';
import { FaSquareXmark } from 'react-icons/fa6';

const SavedCandidates = () => {

  const candidateArr: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]')

  const deleteCandidate = (login: string | null) => {
    console.log(`LOGIN = ${login}`);
    console.log(`typeof login = ${typeof login}`);
    if(typeof login === 'string'){
        console.log("inside string if statement check")
    }
  }
  return (
    <>
      <h1>Potential Candidates</h1>
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
          {candidateArr.map((candidate) => (
            <tr key={candidate.login}>
              <td><img src={candidate.avatar_url || ''} alt="The GitHub user avatar" className="avatar-scaled" /></td>
              <td>{candidate.name || 'no name given'}<br />{candidate.login}</td>
              <td>{candidate.location || 'no location'}</td>
              <td>{candidate.email || 'no email'}</td>
              <td>{candidate.company || 'no company listed'}</td>
              <td>{candidate.bio || 'no bio'}</td>
              <td><button type='button'><FaSquareXmark/></button></td>
            </tr>
            ))}
        </tbody>
      </table>

    </>
  );
};

export default SavedCandidates;
