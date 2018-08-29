---
layout: primary
title: Policies by date of adoption
breadcrumb: collection
---

{% include base.html %}

These are all the open data policies we have on this site, listed from oldest to newest:
<br>
{% assign docs_by_year = site.policies | group_by: "year" %}
{% for year in docs_by_year %}
  <h2>{{ year.name }} ({{ year.items | size }} policies)</h2>
  {% assign year_docs = year.items | sort: "date" %}
  <ul>
  {% for doc in year_docs %}
    <li><a href="{{ doc.url | prepend: site.baseurl }}">{% include docname.html doc_page=doc %}</a></li>
  {% endfor %}
  </ul>
{% endfor %}

<!-- Create table of contents -->
<script src="{{ site.baseurl }}/assets/js/create-toc-from-headings.js"></script>
