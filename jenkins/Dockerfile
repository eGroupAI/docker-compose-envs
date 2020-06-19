FROM jenkins/jenkins:lts
# if we want to install via apt
USER root
# update
RUN apt-get update && apt-get -y upgrade
# fixed bug https://stackoverflow.com/questions/49703784/jenkins-build-failing-to-install-pngquant/50502035#50502035
RUN apt-get install -y gcc make libpng-dev
# install aws cli
RUN apt-get install -y awscli
RUN aws --version
# install imagemagick to compress images
RUN apt-get install -y imagemagick
RUN convert --version
# install yarn to build frontend
# to fixed https bug https://askubuntu.com/questions/104160/method-driver-usr-lib-apt-methods-https-could-not-be-found-update-error
RUN apt-get install apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update
# install nodejs first to fixed this issue https://github.com/yarnpkg/yarn/issues/6914
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
# install yarn
RUN apt-get install -y yarn
RUN yarn --version
# to fixed puppeteer error while loading shared libraries please read following article
# https://github.com/GoogleChrome/puppeteer/issues/3443#issuecomment-433096772
RUN apt-get install -y gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
# drop back to the regular jenkins user - good practice
USER jenkins