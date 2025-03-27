This exercise helps us to understand the difference between route creation and structure followed in the NextJs.
for example:
Step1:
we have created three separate folders for login, register and forgot password inside the app folder.
Functionally it was good but structurally this can't be kept like this.

Step2: 
We create an auth folder and move all the three files inside. But if you notice all the routes are broken in the browser( 404 error).
Because NextJs now considers Auth Folder as an route and the URL will be like this "localhost:3000/auth/register".

Step3: 
To eliminate this way of routing we can just add parenthesis to auth folder naming.
so now it will skip the auth folder as route while at the same time rendering the files 
for example now you can see it in "localhost:3000/register"

Now this will given an organised look to the folder.