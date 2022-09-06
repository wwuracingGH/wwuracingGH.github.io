# Setup Instructions

### Install Ruby

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
