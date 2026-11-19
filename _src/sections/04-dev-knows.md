---
title: What A Developer from Each Decade Knows
order: 4
---
<input type="range" id="timeline" name="Year" min="1980" max="2020" value="1980" step="10">
<p id="decade">1980</p>
<button id="tableToggle">View as Table</button>
<table id="decadeTable" class="hidden">
<thead>
<tr><th>Decade</th><th>Skills</th></tr>
</thead>
<tbody>
{%- for d in decades %}
<tr><td>{{ d.year }}</td><td>{{ d.text }}</td></tr>
{%- endfor %}
</tbody>
</table>

<script id="decade-data" type="application/json">{{ decades | json }}</script>
<script src="/js/timeline.js" defer></script>

<p id="skills">{{ decades[0].text }}</p>

Section that includes timeline of "average" knowledgebase of a young adult
- Aggregate of comp-sci syllabi, high school comp-sci coursework, what would be required to know to operate a personal computer