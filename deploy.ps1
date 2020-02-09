npm run build
cd build
git init
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:zsimple-arch/zimple-arch.github.io.git
git push -u origin master --force