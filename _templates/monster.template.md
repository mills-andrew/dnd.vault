---
  name: {{name}}
  size: {{size}}
  type: {{type}}
  subtype: {{subtype}}
  alignment: {{alignment}}
  ac: {{ac}}
  hp: {{hp}}
  hit_dice: {{hit_dice}}
  speed: {{speed}}
  stats: {{#each stats}}
  - {{this}}{{/each}}
  saves: {{#each saves}}
  - {{#each this}}{{@key}}: {{this}}{{/each}}{{/each}}
  skillsaves: {{#each skillsaves}}
  - {{#each this}}{{@key}}: {{this}}{{/each}}{{/each}}
  damage_vulnerabilities: {{damage_vulnerabilities}}
  damage_resistances: {{damage_resistances}}
  damage_immunities: {{damage_immunities}}
  condition_immunities: {{condition_immunities}}
  senses: {{senses}}
  languages: {{languages}}
  cr: {{cr}}
  traits: {{#each traits}}
  - name: {{name}}
    desc: "{{desc}}"
    attack_bonus: {{attack_bonus}}{{/each}}
  actions:{{#each actions}}
  - name: {{name}}
    desc: "{{desc}}"
    attack_bonus: {{attack_bonus}}{{/each}}
  legendary_actions:{{#each legendary_actions}}
  - name: {{name}}
    desc: "{{desc}}"
    attack_bonus: {{attack_bonus}}{{/each}}
---

```statblock
  forceColumns: true
  image: [[Wikilink To Image]]
  name: {{name}}
  size: {{size}}
  type: {{type}}
  subtype: {{subtype}}
  alignment: {{alignment}}
  ac: {{ac}}
  hp: {{hp}}
  hit_dice: {{hit_dice}}
  speed: {{speed}}
  stats: {{#each stats}}
  - {{this}}{{/each}}
  saves: {{#each saves}}
  - {{#each this}}{{@key}}: {{this}}{{/each}}{{/each}}
  skillsaves: {{#each skillsaves}}
  - {{#each this}}{{@key}}: {{this}}{{/each}}{{/each}}
  damage_vulnerabilities: {{damage_vulnerabilities}}
  damage_resistances: {{damage_resistances}}
  damage_immunities: {{damage_immunities}}
  condition_immunities: {{condition_immunities}}
  senses: {{senses}}
  languages: {{languages}}
  cr: {{cr}}
  traits: {{#each traits}}
  - name: {{name}}
    desc: "{{desc}}"
    attack_bonus: {{attack_bonus}}{{/each}}
  actions:{{#each actions}}
  - name: {{name}}
    desc: "{{desc}}"
    attack_bonus: {{attack_bonus}}{{/each}}
  legendary_actions:{{#each legendary_actions}}
  - name: {{name}}
    desc: "{{desc}}"
    attack_bonus: {{attack_bonus}}{{/each}}
```