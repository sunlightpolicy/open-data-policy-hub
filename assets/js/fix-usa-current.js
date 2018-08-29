// Workaround to fix the issue of usa-current not being applied correctly
var navs = $('nav').not('#toc, .footer-mobile, .footer-desktop');
console.log(navs);
var links = $('ul li a', navs);
console.log(links);
links.removeClass('usa-current');
var where = window.location.pathname.split('/')[1];
console.log(where);
var where_slash = '/' + where + '/';
var url_matches = links.filter( function (i) {
  return this.pathname === where_slash;
} );
console.log(url_matches);
url_matches.addClass('usa-current');
