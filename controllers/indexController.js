exports.homePage = (req, res, next) => {
  res.render('index', {
    title: 'Assigment 1',
    message: ' welcome to my portfolio',
  });
};

exports.aboutMe = (req, res, next) => {

  // display it on a page along with the number
  res.render('aboutMe', {
    title: 'About Me',
    message: ' welcome to my portfolio',
  });
};

exports.project = (req, res, next) => {

  // display it on a page along with the number
  res.render('project', {
    title: 'Projects',
    message: ' welcome to my portfolio',
  });
};

exports.services = (req, res, next) => {

  // display it on a page along with the number
  res.render('services', {
    title: 'Welcome to the Services page, how can we help?',
    message: ' welcome to my portfolio',
  });
};

exports.contactMe = (req, res, next) => {

  // display it on a page along with the number
  res.render('contactMe', {
    title: 'Contact Us',
    message: ' welcome to my portfolio',
  });
};
