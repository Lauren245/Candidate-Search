//import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {

  const candidate: string[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]')
  return (
    <>
      <h1>Potential Candidates</h1>
      {/* <table>
        <tr>
            <th>{}</th>
        </tr>
      </table> */}
      <p>{candidate}</p>
    </>
  );
};

export default SavedCandidates;
