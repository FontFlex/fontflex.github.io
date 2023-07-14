    // GitHub organization and repository information
    const org = 'FontFlex';
    const repo = 'FontFlex';

    // Fetch releases from GitHub API
    fetch(`https://api.github.com/repos/${org}/${repo}/releases`)
      .then(response => response.json())
      .then(releases => {
        const releasesContainer = document.getElementById('releases');

        // Iterate over each release and generate HTML
        releases.forEach(release => {
          const releaseDiv = document.createElement('div');
          releaseDiv.className = 'release';

          const releaseTitle = document.createElement('h2');
          releaseTitle.textContent = release.name;

          const releaseDescription = document.createElement('p');
          releaseDescription.textContent = release.body;

          releaseDiv.appendChild(releaseTitle);
          releaseDiv.appendChild(releaseDescription);

          releasesContainer.appendChild(releaseDiv);
        });
      })
      .catch(error => {
        console.log('Error fetching releases:', error);
      });