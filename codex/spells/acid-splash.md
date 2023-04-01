---
  name: Acid Splash
  alias: acid-splash
  source: PHB
  page: 211
  srd: true
  basicRules: true
  level: 0
  school: C
  time: 
  - number: 1
    unity: action
  range:
    type: point
    distance: 
      type: feet
      amount: 60
  components:
    v: true
    s: true
    m: 
  duration: 
  - type: instant 
    duration:
      type: 
      amount: 
  entries: 
  - You hurl a bubble of acid. Choose one creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take {@damage 1d6} acid damage.
  - This spell&#x27;s damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6}).
  scalingLevelDice:
    label: acid damage
    scaling:
      1: 1d6
      5: 2d6
      11: 3d6
      17: 4d6
  damageInflict: 
  - acid
  savingThrow: 
  - dexterity
  miscTags: 
  - SCL
  - SGT
  areaTags: 
  - ST
  - MT
  classes: 
    fromClassList: 
    - name: Sorcerer
      source: PHB
    - name: Wizard
      source: PHB
    - name: Artificer (Revisited)
      source: UAArtificerRevisited
    - name: Artificer
      source: TCE
    fromSubclass: 
    fromClassListVariant: 
    - name: Druid
      source: PHB
      definedInSource: UAClassFeatureVariants
  races: 
  backgrounds: 
  - name: Simic Scientist
    source: GGR
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