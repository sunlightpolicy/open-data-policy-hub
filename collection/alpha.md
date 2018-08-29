---
layout: primary
title: Policies by place name
breadcrumb: collection
---

These are all the open data policies we have on this site:

<ul>
{% assign docs = site.policies | sort: "place" %}
{% for doc in docs %}
  <li>
    <a href="{{ doc.url | prepend: site.baseurl }}">{% include docname.html doc_page=doc %}</a>
  </li>
{% endfor %}
</ul>
