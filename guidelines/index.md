---
layout: primary
title: "Open Data Policy Guidelines"
lead: "The Sunlight Foundation created this living set of open data guidelines to address: what data should be public, how to make data public, and how to implement policy."
---

The provisions are not ranked in order of priority and do not address every question one should consider when preparing a policy, but are a guide to answer the question of what an open data policy can and should do in striving to create a government data ecosystem where open data is the default.

Setting the default to open means that the government and parties acting on its behalf will make public information available proactively and that they’ll put that information within reach of the public (online), without barriers for its reuse and consumption. Setting the default to open is about living up to the potential of our information, about looking at comprehensive information management and making determinations that fall in the public interest.

<div class="funfact-blockquote">
Click on a guideline below to read more and see examples of matching language from our Open Data Policy Collection!
</div>

{% assign guidelines_by_section = site.guidelines | group_by: "section" %}
{% assign sections = site.data.guideline-sections %}
{% for section in sections %}
  <h2>{{ section[1] }}</h2>
  {% assign section_guidelines = site.guidelines | where: "section", section[0] %}
  {% assign start_num = section_guidelines | map: "number" | first %}
  <ol start="{{ start_num }}">
  {% for guideline in section_guidelines %}
    <li><a href="{{ site.baseurl }}{{ guideline.url }}">{{ guideline.name }}</a></li>
  {% endfor %}
  </ol>
{% endfor %}
