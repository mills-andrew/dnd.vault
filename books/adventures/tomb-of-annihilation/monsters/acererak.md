Acererak is an archlich who travels between worlds and is known to take sick pleasure in devouring the souls of adventurers, whom he lures into trap-ridden dungeons where they suffer horrible deaths. One such dungeon lies under the lost city of Omu. This dungeon is called the Tomb of the Nine Gods, for Acererak slew nine false gods and sealed them within it. More recently, he built a necromantic device called the Soulmonger, then hid it in the heart of the tomb.

**ACERERAK’S TRAITS**
_**Ideal.**_ “Why be a god when I can be a creator of gods?”
_**Bond.**_ “I build dungeons to trap and slay powerful adventurers. Their deaths and souls are my nourishment.”
_**Flaw.**_ “I underestimate the resolve of my enemies.”

``` statblock
monster: Acererak
columnWidth: 300
```



``` json
{
	name: "Acererak",
	size: "Medium",
	type: "undead",
	subtype: "",
	alignment: "neutral evil",
	ac: 21,
	hp: 285,
	hit_dice: "30d8 + 150",
	speed: "30 ft.",
	stats: [13, 16, 20, 27, 21, 20],
	saves: [
		{ constitution: 12 },
		{ intelligence: 15 },
		{ wisdom: 12 }		
	],
	// Arcana +22, History +22, Insight +12, Perception +12, Religion +15
	skillsaves: [{ arcana: 22 }, { history: 22 }, { insight: 12 }, { perception: 12}, {religion: 15}],
	damage_vulnerabilities: "",
	damage_resistances: "",
	damage_immunities: "lightning",
	condition_immunities: "",
	senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
	languages: "Common, Draconic",
	cr: "15",
	traits: [
		{
			name: "Amphibious",
			desc: "The dragon can breathe air and water.",
			attack_bonus: 0
		},
		{
			name: "Legendary Resistance (3/Day)",
			desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
			attack_bonus: 0
		}
	],
	actions: [
		{
			name: "Multiattack",
			desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
			attack_bonus: 0
		},
		{
			name: "Bite",
			desc: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage.",
			attack_bonus: 12,
			damage_dice: "2d10",
			damage_bonus: 7
		},
		{
			name: "Claw",
			desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
			attack_bonus: 12,
			damage_dice: "2d6",
			damage_bonus: 7
		},
		{
			name: "Tail",
			desc: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
			attack_bonus: 12,
			damage_dice: "2d8",
			damage_bonus: 7
		},
		{
			name: "Frightful Presence",
			desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
			attack_bonus: 0
		},
		{
			name: "Breath Weapons (Recharge 5-6)",
			desc: "The dragon uses one of the following breath weapons.\\nLightning Breath. The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.\\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.",
			attack_bonus: 0,
			damage_dice: "12d10"
		}
	],
	legendary_actions: [
		{
			name: "Detect",
			desc: "The dragon makes a Wisdom (Perception) check.",
			attack_bonus: 0
		},
		{
			name: "Tail Attack",
			desc: "The dragon makes a tail attack.",
			attack_bonus: 0
		},
		{
			name: "Wing Attack (Costs 2 Actions)",
			desc: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
			attack_bonus: 0
		}
	]
}
```