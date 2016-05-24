require User = require ('./app/model/user.js');

var goodwid = new User({
  name: 'David',
  username: 'goodwid',
  password: 'password'
});

goodwid.save(err => {
  if (err) throw err;
  console.log(`user '${this.username}' saved.`);
});
