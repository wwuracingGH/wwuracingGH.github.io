# Contributing

## Code of Conduct

By participating and contributing to the WWU Racing Website, you agree to uphold this [Code of Conduct](https://github.com/auth0/open-source-template/blob/master/CODE-OF-CONDUCT.md).

## Getting Started

Contributions are made to this repo via Issues and Pull Requests (PRs). A few general guidelines that cover both:

- Search for existing Issues and PRs before creating your own.
- We work hard to make sure issues are handled in a timely manner but, depending on the impact, it could take a while to investigate the root cause. A friendly ping in the comment thread to the submitter or a contributor can help draw attention if your issue is blocking.
- If you've never contributed before, see the [first timer's guide on Auth0’s blog](https://auth0.com/blog/a-first-timers-guide-to-an-open-source-project/) for resources and tips on how to get started.

## Issues

Issues should be used to report problems with the library, request a new feature, or to discuss potential changes before a PR is created. When you create a new Issue, a template will be loaded that will guide you through collecting and providing the information we need to investigate.

If you find an Issue that addresses the problem you're having, please add your own reproduction information to the existing issue rather than creating a new one. Adding a [reaction](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/) can also help be indicating to our maintainers that a particular problem is affecting more than just the reporter.

## Pull Requests

PRs to our libraries are always welcome and can be a quick way to get your fix or improvement slated for the next release. In general, PRs should:
- Only fix/add the functionality in question OR address wide-spread whitespace/style issues, not both.
- Add unit or integration tests for fixed or changed functionality (if a test suite already exists).
- Address a single concern in the least number of changed lines as possible.
- Include documentation as comments in your code: For code commenting, include a comment for…
At the beginning of each method, state:
- What it does; why it works
Each new line: 
- What it does; why it works
In embedded code, specify
- Pinout setup - why each settable pin is setup as this type
- Clock setup - why the particular clock was chosen, why the frequency was set the way it was
For changes that address core functionality or would require breaking changes (e.g. a major release), it's best to open an Issue to discuss your proposal first. This is not required but can save time creating and reviewing changes.

Read this: ["fork-and-pull" Git workflow](https://github.com/susam/gitpr) for more detail

1. Fork the repository to your own Github account
2. Clone the project to your machine
3. Create a branch locally with a succinct but descriptive name
4. Commit changes to the branch
5. Following any formatting and testing guidelines specific to this repo
6. Push changes to your fork
7. Open a PR in our repository and, in the comment, put a paragraph summarizing:
   1. what you did
   2. how it works
   3. why you did it

Thanks to [Auth0](https://github.com/auth0/open-source-template/blob/master/GENERAL-CONTRIBUTING.md) for these guidelines.


# Setup Instructions

### Install Ruby+Devkit 3.1.X (x64) and select MYSYS2 option when prompted

https://rubyinstaller.org/downloads/

### Install [Jekyll](https://jekyllrb.com/docs/installation/)

`-> gem install jekyll bundler`

### Install tzinfo

`-> gem install tzinfo-data`

### Install Git

https://git-scm.com/

### Open Git Bash, then change the active directory to desired local folder using

`-> cd /c/<desired folder>`

### Clone our Repository

`-> git clone https://github.com/wwuracingGH/wwuracingGH.github.io.git`

### Delete old Files

`-> rm Gemfile.lock`

`-> bundle clean --force`

### Setup Bundle

`-> bundle install`

### Start the server

`-> bundle exec jekyll serve`

### Open in your local browser

http://127.0.0.1:4000/

# Contributing

When contributing please follow the guidelines so we can keep everything professional and consistent

- Please keep the title short and sweet, in a couple of words state what you did, ie: "Added x to y", "Updated x page", etc
- Give a summary of what you did. This doesn't have to be super long, maybe a paragraph
- Make a list of the things you did
- Say why you did things so we don't have to reach out and ask