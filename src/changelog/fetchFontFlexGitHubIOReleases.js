// GitHub organization and repository information
const org = 'FontFlex';
const repo = 'FontFlexGitHubIO';

const releasesButton = document.getElementById('FontFlexReleases');
const websiteReleasesButton = document.getElementById('FontFlexWebsiteReleases');
const releasesContainer = document.getElementById('releases');
const gitHubReleasesContainer = document.getElementById('GitHubReleases');

// Fetch FontFlex GitHub.io releases from API
function fetchFontFlexGitHubIOReleases() {
  releasesButton.disabled = true;
  websiteReleasesButton.disabled = false;

  releasesContainer.style.display = 'none';
  gitHubReleasesContainer.style.display = 'block';

  gitHubReleasesContainer.innerHTML = ''; // Clear the container

  // Fetch releases from GitHub API
  fetch(`https://api.github.com/repos/${org}/${repo}/releases`)
    .then(response => response.json())
    .then(releases => {
      // Iterate over each release and generate HTML
      releases.forEach((release, index) => {
        const releaseDiv = document.createElement('div');
        releaseDiv.className = 'release';

        const releaseHeader = document.createElement('h1');
        releaseHeader.textContent = release.name;

        const releaseType = document.createElement('span');
        releaseType.className = index === 0 ? 'release-type latest' : 'release-type pre-release';
        releaseType.textContent = index === 0 ? 'Latest Release' : 'Pre-release';

        releaseHeader.appendChild(releaseType);

        const releaseInfo = document.createElement('p');

        const authorLink = document.createElement('a');
        authorLink.href = release.author.html_url;
        authorLink.textContent = release.author.login;

        const releaseDate = document.createElement('span');
        releaseDate.textContent = ` on ${new Date(release.published_at).toDateString()}`;

        releaseInfo.appendChild(document.createTextNode(''));
        releaseInfo.appendChild(authorLink);
        releaseInfo.appendChild(document.createTextNode(' released this  '));
        releaseInfo.appendChild(releaseDate);

        const releaseDescription = document.createElement('p');
        releaseDescription.textContent = release.body;

        releaseDiv.appendChild(releaseHeader);
        releaseDiv.appendChild(releaseInfo);
        releaseDiv.appendChild(releaseDescription);

        gitHubReleasesContainer.appendChild(releaseDiv);
      });
    })
    .catch(error => {
      console.log('Error fetching FontFlex GitHub.io releases:', error);
    });
}

// Add event listener to FontFlex releases button
releasesButton.addEventListener('click', () => {
  releasesButton.disabled = true;
  websiteReleasesButton.disabled = false;

  releasesContainer.style.display = 'block';
  gitHubReleasesContainer.style.display = 'none';
});
