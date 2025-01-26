import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {

  const candidateArr: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]')
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
              <td>Button goes here</td>
            </tr>
            ))}
        </tbody>
      </table>

    </>
  );
};

export default SavedCandidates;
