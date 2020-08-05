# docs.scandipwa.com

This repo contains the source code and documentation powering [docs.scandipwa.com](https://docs.scandipwa.com/).

## Getting started

### Prerequisites

1. Git
1. Node: any 12.x version starting with v12.0.0 or greater
1. Yarn: See [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/)
1. A fork of the repo (for any contributions)
1. A clone of the [docs.scandipwa.com.org repo](https://github.com/scandipwa/scandipwa.github.io) on your local machine

### Installation

1. go into the project root
1. `yarn` to install the website's npm dependencies

### Running locally

1. `yarn dev` to start the hot-reloading development server (powered by [Gatsby](https://www.gatsbyjs.org))
1. `open http://localhost:8000` to open the site in your favorite browser

### Deploy to GitHub pages

1. Create the branch called `gh-pages` in GitHub repository
1. Go to settings and change the repository name like `username.github.io`
1. In GitHub pages section change the branch to gh-pages
1. Run the command `yarn deploy`
1. Open the published website at `username.github.io` in browser
