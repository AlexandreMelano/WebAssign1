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
    message: ' welcome to my portfolio',
    
  });
};

exports.services = (req, res, next) => {

  // display the services page
  res.render('services', {
    title: 'Welcome to the Services page, how can we help?',
    message: ' welcome to my portfolio',
  });
};

exports.contactMe = (req, res, next) => {

  // display the contact me page
  res.render('contactMe', {
    title: 'Contact Us',
    message: ' welcome to my portfolio',
  });
};

exports.assign = (req, res, next) => {

  // display the contact me page
  res.render('assign', {
    title: 'Assignment 1',
    message: "COMP2068 - Advanced Web Programming",

    /*Assignment 1
    Express Portfolio Site
    
    Part 1 Due Fri. Jun. 8 @ midnight - Do #1      /4 marks for Functionality only
    Part 2 Due Fri. Jun. 15 @ midnight
    Value 25%
    Express Portfolio Site							Maximum Mark: 40
    Overview: Create your Personal Portfolio Website using ExpressJS and implementing the EJS templating engine. Your site must be hosted live on a cloud service such as Microsoft Azure, Heroku, or Digital Ocean.
    
    Sample Portfolio:
    •	http://richfreeman.herokuapp.com
    
    
    Instructions:
    This Express site must include the pages from your Personal Portfolio 5 pages – your Home page, an About Me page, a Projects page, a Services page, and a Contact Me page.
    
    1.	Your Portfolio site will use ExpressJS and NodeJS and your web pages have been split to use different View templates and partials by implementing the EJS templating engine and Express Routes (4 Marks: GUI, 4 Marks: Functionality):
    Your site should include at least 2 View templates – one for your Home Page and one for your Contact Me page. (You may include additional templates as needed to accommodate other site pages).  An Express Route must exist for each page of your site.  (You will need to use the app.get(path, callback(req, res, next)) method structure with a res.render(view, locals) method call to render each view) 
    (4 Marks: Functionality, 4 Marks: GUI).
    2.	Your site will use the new structure created by the Express Generator. Your site files will be migrated to work within the public, routes, views and controllers folders (20 Marks: Site Structure):
    a.	Generate your site structure with the Express Generator. Note: You must use the -e option to ensure that you implement the EJS templating engine for Express (3 Marks: Site Structure).
    b.	Your JavaScript, CSS and Multimedia Asset Files should be moved to separate folders within the public folder. Use a CSS framework such as getmdl.io, Materializecss.com, or other but NOT Bootstrap.  Note: the public folder is part of the path and does not have to be referenced (3 Marks: Site Structure).
    c.	You will define routes for all of your site pages in the index.js file in your routes folder (1 Mark: Site Structure).
    d.	You will defer all logic to the appropriate controller functions contained in the controllers folder (1 Mark: Site Structure)
    e.	Your views folder will contain your EJS page templates. You will create a separate folder named partials for all of your partial EJS files. You will need several partials including header.ejs, content.ejs, footer.ejs and others. (6 Marks: Site Structure).
    f.	All Your Code (HTML, CSS, JavaScript, jQuery, etc.) is error free (1 Mark: Site Structure).
    g.	Your site uses appropriate JavaScript libraries that function through the use of links to a various CDNs (Content Delivery Networks) (1 Mark: Site Structure).
    h.	The latest version of your site will be hosted live and error free on a Cloud Hosting Service (4 Marks: Site Structure).
    3.	Include Internal Documentation for your site (4 Marks: Internal Documentation):
    a.	Ensure you include a comment header for your HTML, CSS and JavaScript files that indicate: the File name, Author's name, web site name, and file description (1 Marks: Internal Documentation).
    b.	Ensure you include a section headers for all of your HTML structure, CSS style sections, and any JavaScript functions (1 Marks: Internal Documentation)
    c.	Ensure all your code uses contextual variable names that help make the files human-readable (1 Marks: Internal Documentation).
    d.	Ensure you include inline comments that describe your GUI Design and Functionality. Note: Please avoid “over-commenting”  (1 Marks: Internal Documentation)
    4.	Share your files on GitHub to demonstrate Version Control Best Practices and push your site to a cloud host (4 Marks: Version Control, 4 Marks: Cloud Hosting).
    a.	Your repository must include your code and be well structured (2 Marks: Version Control).
    b.	Your repository must include commits that demonstrate the project being updated at different stages of development – each time a major change is implemented (2 Marks: Version Control).
    c.	You must deploy your site to your Cloud Server using git (4 Marks: Cloud Hosting).
    Optional Site Features (i.e. Potential Bonus Marks).
    A.	Use Vue.js frontend framework to improve interactivity and the MVC model (4 Bonus Marks)
    B.	Create a working contact form on the Contact Me page using node.js and appropriate node packages (4 Bonus Marks).
    C.	Attach a full domain name to your site (e.g. http://www.richfreeman.ca).  You get 1 free domain name for 1 year with your GitHub Student Pack account. (2 Bonus Marks).
    
    SUBMITTING YOUR WORK
    Your submission should include:
    1.	A zip archive of your website’s Project files and a link to GitHub (preferable).
    2.	A link to your live portfolio site hosted with a Cloud provider
    
    Feature	Description	Marks
    GUI / Interface Design	Display elements meet requirements.  Appropriate spacing, graphics, colour, and typography used.	4
    Functionality	Site deliverables are me and site functions are met.  No errors, including submission of user inputs.	4
    Site Structure	Well organized site files.  Separate HTML and CSS.  Appropriate links to external documents and code.  Code is error free.  JavaScript libraries use a CDN.  4 marks for initial deployment to Cloud Host by October 7	20
    Internal Documentation	File header present, including site & student name & description.  Functions and classes include headers describing functionality & scope.  Inline comments and descriptive variable names included.	4
    Version Control	GitHub commit history demonstrating regular updates.  2 marks for minimum 3 commits by Feb 7	4
    Cloud Deployment	Deploy site to Cloud Service.  2 marks for initial deployment by Feb 7	4
    Total		40
    
    
    This assignment is weighted 25% of your total mark for this course.
    
    Late submissions:
    •	10% deducted for each day late.
    
    External code (e.g. from the internet or other sources) can be used for student submissions within the following parameters:
    1.	The code source (i.e. where you got the code and who wrote it) must be cited in your internal documentation.
    2.	It encompasses a maximum of 10% of your code (any more will be considered cheating).
    3.	You must understand any code you use and include documentation (comments) around the code that explains its function.
    4.	You must get written approval from me via email.
    ', 
    */
    
  });
};
