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