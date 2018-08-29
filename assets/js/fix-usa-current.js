// Workaround to fix the issue of usa-current not being applied correctly
var navs = $('nav').not('#toc, .footer-mobile, .footer-desktop');
var links = $('ul li a', navs);
links.removeClass('usa-current');
var where = window.location.pathname.split('/')[1];
var where_slash = '/' + where + '/';
var url_matches = links.filter( function (i) {
  return this.pathname === where_slash;
} );
url_matches.addClass('usa-current');
