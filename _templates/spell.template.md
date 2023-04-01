---
  name: {{name}}
  alias: {{alias name}}
  source: {{source}}
  page: {{page}}
  srd: {{srd}}
  basicRules: {{basicRules}}
  level: {{level}}
  school: {{school}}
  time: {{#each time}}
  - number: {{number}}
    unity: {{unit}}{{/each}}
  range:
    type: {{range.type}}
    distance: 
      type: {{range.distance.type}}
      amount: {{range.distance.amount}}
  components:
    v: {{components.v}}
    s: {{components.s}}
    m: {{components.m}}
  duration: {{#each duration}}
  - type: {{type}} 
    duration:
      type: {{duration.type}}
      amount: {{duration.amount}}{{/each}}
  entries: {{#each entries}}
  - {{this}}{{/each}}
  scalingLevelDice:
    label: {{scalingLevelDice.label}}
    scaling:
    {{#each scalingLevelDice.scaling}}
      {{@key}}: {{this}}
    {{/each}}
  damageInflict: {{#each damageInflict}}
  - {{this}}{{/each}}
  savingThrow: {{#each savingThrow}}
  - {{this}}{{/each}}
  miscTags: {{#each miscTags}}
  - {{this}}{{/each}}
  areaTags: {{#each areaTags}}
  - {{this}}{{/each}}
  classes: 
    fromClassList: {{#each classes.fromClassList}}
    - name: {{name}}
      source: {{source}}{{/each}}
    fromSubclass: {{#each classes.fromSubclass}}
    - name: {{name}}
      source: {{source}}{{/each}}
    fromClassListVariant: {{#each classes.fromClassListVariant}}
    - name: {{name}}
      source: {{source}}
      definedInSource: {{definedInSource}}{{/each}}
  races: {{#each races}}
  - name: {{name}}
    source: {{source}}
    baseName: {{baseName}}
    baseSource: {{baseSource}}{{/each}}
  backgrounds: {{#each backgrounds}}
  - name: {{name}}
    source: {{source}}{{/each}}
---

> [!infobox|right]
> # `=this.file.name`
> ###### Stats
> Type | Stat | 
> ---- | ---- |
> Level | `=this.level` |
> Casting Time | `=this.time.number` `=this.time.unity` |
> Range | `=this.range.distance.amount` `=this.range.distance.type` (`=this.range.type`)|
> Area | `=this.area` |
> Components | `=this.components` |
> Duration | `=this.Duration` |
> School | `=this.school` | 
> Attack/Save | `=this.attackSave` | 
> Damage/Effect | `=this.damageEffect` | 
> Classes | `=this.classes` |

# `=this.file.name`

``` dataview
LIST WITHOUT ID entries
WHERE file = this.file
```