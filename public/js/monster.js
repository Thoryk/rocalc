myInnerHtml("PRT","",0,0);

NameCalc = ["Base Stats",
"Auto Adjust Base Level",
"LV",
"JobLV",
"Class",
"STR",
"AGI",
"VIT",
"DEX",
"INT",
"LUK",
"Remaining Status Points",
"Extended Info",
"Max HP",
"Max SP",
"DEF",
"MDEF",
"HIT",
"FLEE",
"Perfect Dodge",
"Critical",
"MATK",
"ASPD",
"HP Regen",
"SP Regen",
"Speed Potion: ",
"Weapon Type: ",
"Weapon &amp; Armor / Cards",
"Weapon: ",
"Attribute: ",
"Weapon: ",
0,
"Passive / Duration Skills",
"Supportive / Party Skills",
"Show ",
"Attack Skills: ",
"Monster: ",
"HP",
"BaseExp",
"ATK",
"~",
"JobExp",
"DEF",
"Race",
"MDEF",
"Element",
"Perfect Hit",
"Size",
"95% Dodge",
"Monster State",
"Show",
"Combat Results",
"Hit Ratio",
"Dodge Ratio",
"Minimum Damage",
"Average Damage",
"Maximum Damage",
"Damage Per Second",
"Minimum Number of Hits",
"Average Number of Hits",
"Maximum Number of Hits",
"Average Battle Duration",
"Base Exp Per Hit",
"Job Exp Per Hit",
"Average Damage Recieved",
"Average Damage Recieved (w/dodge)",
"%",
"%",
0,
0,
0,
0,
0,
0,
0,
0,
"Minimum Delay Between Active Skills",
"Adopted",
0,
"Item Data",
"Show",
"<Font size=2><B>Anything below this line will only be saved via URL</B></Font>",
"Monster Buffs",
"Show",
];
for(i=1;i<=84;i++){
	if(NameCalc[i-1] != 0)
		myInnerHtml("nm0"+i,NameCalc[i-1],0);
}
myInnerHtml("nm100","<B>NOTHING below this line will be saved!</B>",0);


MonsterOBJ = convertToMonsterOBJ(monsterDb)
EnemyNum = MonsterOBJ.length -1;
MonsterABC = createMonsterSortingArray(monsterDb)

var tiiki = createFlatRegionNameArray(regionDb)

if(Taijin==0){
	for(var i=0;i < tiiki.length;i++)
		document.calcForm.ENEMY_SORT2.options[i] = new Option(tiiki[i],i);
}

MonMap = createMonMapArray(monsterDb, regionDb)
