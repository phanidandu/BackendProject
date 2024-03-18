const path = require('path');

exports.postsuccess = (req, res, next) => {
  console.log("Form successfully submitted")
  res.send('<form action="/"><h1>Form successfully submitted!</h1> <button type="submit">RETURN TO HOME PAGE</button></form>')
};

exports.getcontact = (req, res, next) =>{
  res.render('contactus', {
    pageTitle: 'Contact Us',
    path: '/contactus',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}



