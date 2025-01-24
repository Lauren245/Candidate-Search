// TODO: Create an interface for the Candidate objects returned by the API
//info to include: candidate's name, username, location, avatar, email, html_url, and company
//!!! I may want to make some of these optional
export default interface Candidate {
    readonly avatar_url: string | null;
    readonly name: string | null;
    readonly login: string | null; /*login is what username is called in the data that the github API returns */
    readonly location: string | null;
    readonly email: string | null;
    readonly company: string | null;
    readonly html_url: string | null; /*This is their GitHub URL so this would only be null if the API call failed */
    readonly bio: string | null;
    readonly public_repos: number | null;
}