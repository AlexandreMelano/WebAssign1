exports.homePage = (req, res, next) => {
  res.render('index', {
    title: 'Assigment 1',
    message: ' welcome to my portfolio',
  });
};

exports.aboutMe = (req, res, next) => {

  // display the about me page 
  res.render('aboutMe', {
    title: 'About Me',
    message: ' welcome to my portfolio \n I am 23 years old, I am currently enrolled in Computer Programming Analyst program at Georgian College. My hopes are to work for a bank like RBC / BMO or GOV Canada on mainframe services.',
  });
};

exports.project = (req, res, next) => {

  // display the project page
  res.render('project', {
    title: 'Projects',
    message: " welcome to my projects page. Below I've included links to my github, and a link to a live azure site,"
    
  });
};

exports.services = (req, res, next) => {

  // display the services page
  res.render('services', {
    title: 'Services',
    message: ' welcome to my services page, How can we help?',
  });
};
/* Aquired contact form from https://www.w3schools.com/howto/howto_css_contact_form.asp */
exports.contactMe = (req, res, next) => {

  // display the contact me page
  res.render('contactMe', {
    title: 'Contact Us',
    message: ' welcome to my portfolio',
  });
};

exports.assign = (req, res, next) => {

  // display the assign page
  res.render('assign', {
    title: 'Assignment 1',
    message: "COMP2068 - Advanced Web Programming",

    
  });
};
