This page is a markdown file, so it should be pretty easy to edit. Some notes:

To add one of the “resource cards,” use a code snippet like this:

```
{% include card_small.html
 tagline="[title]"
 link="[url]"
%}
```

and replace `[title]` and `[url]` with what you want. For example:

```
{% include card_small.html
 tagline="Common Municipal Governance Structures"
 link="https://docs.google.com/document/d/1xKvUNM4aIeDmzvY8aODjkrsS0HTRo9VaacGQtlsJBTA/edit"
%}
```

To create a large “call to action” button, use a code snippet like this:

`<a class="usa-button" href="{{ site.baseurl }}/[path]">[link_text]</a>`

but (1) replace `[path]` with the part of the URL that comes after `https://opendatapolicyhub.sunlightfoundation.com/`, and (2) replace `[link_text]` with the link text. For example:

`<a class="usa-button" href="{{ site.baseurl }}/why-open-data">Read more about open data</a>`
