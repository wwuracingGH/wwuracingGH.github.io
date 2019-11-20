# Setup Instructions

## Install Ruby

https://rubyinstaller.org/downloads/

## Install [Jekyll](https://jekyllrb.com/docs/installation/)

`-> gem install jekyll bundler`

## Install tzinfo

`-> gem install tzinfo-data`

## Install Git

https://git-scm.com/

## Clone our Repository
`-> git clone https://github.com/rhedgehog/WWURacing-web.git`

## Delete old Files

`-> rm Gemfile.lock`

`-> bundle clean --force`

## Setup Bundle

`-> bundle install`

## Start the server

`-> jekyll serve`

## Open in your local browser

http://127.0.0.1:4000/

# Release Schedule

Website releases happen every Wednesday, if there are new changes to publish. For each release, `development` is merged into `master`. If new changes are not merged into `development` before the release, they must wait until the following week. We recommend submitting pull requests intended for a specific release on Monday at the latest, to allow for a day for code review.
