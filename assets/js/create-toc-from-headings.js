// Creates a table of contents on the left side, based on the headings on the page

// Widen the whole page
$('section#main-container').addClass('content-wide');

// Find section #main-column and give it the class usa-width-two-thirds
$('section#main-column').addClass('usa-width-two-thirds');

// Create aside as first child of section#main-container
$('section#main-container').prepend($('<aside class="usa-width-one-third sticky sticky-subnav"></aside>'));
$('aside').append($('<nav class="nav-accordion nav-subnav usa-accordion" role="navigation" id="toc"></nav>'));
$('nav#toc').append($('<button class="usa-accordion-button nav-accordion-button nav-accordion-button-desktop" aria-expanded="false">Contents:</button><button class="usa-accordion-button usa-accordion-button-chevron nav-accordion-button nav-accordion-button-mobile" aria-expanded="false" aria-controls="contents">Contents:</button><ul id="contents" class="usa-sidenav-list usa-accordion" aria-hidden="true"></ul>'));

// Select all H1 and H2 headings on the page + add them to the table of contents
$('h1, h2').addClass('include-in-toc');
var headings = $('.include-in-toc').not('.section-heading');
headings.each(function (index) {
  var item = headings[index];
  var item_id = item.id;
  var item_name = item.innerText;
  $('ul#contents').append('<li><a class="subnav-anchor" href="#' + item_id + '">' + item_name + '</a></li>');
});
