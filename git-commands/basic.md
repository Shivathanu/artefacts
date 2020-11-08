
# Change the author of previous commits
git filter-branch -f --env-filter "GIT_AUTHOR_NAME='Shivathanu'; GIT_AUTHOR_EMAIL='gcshivathanu@gmail.com'; GIT
_COMMITTER_NAME='Shivathanu'; GIT_COMMITTER_EMAIL='gcshivathanu@gmail.com';" HEAD;