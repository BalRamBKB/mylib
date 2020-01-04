import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {

iconss;

iconsData:string[] = ["floral-heart",
"rotated-floral-heart-bullet",
"reversed-rotated-floral-heart-bullet",
"rotated-heavy-black-heart-bullet",
"heavy-heart-exclamation-mark-ornament",
"white-heart-suit",
"black-heart-suit",
"heavy-black-heart",
"white-feathered-rightwards-arrow",
"georgian-letter-ghan",
"love-letter",
"love-hotel",
"beating-heart",
"broken-heart",
"two-hearts",
"sparkling-heart",
"growing-heart",
"heart-with-arrow",
"blue-heart",
"green-heart",
"yellow-heart",
"purple-heart",
"heart-with-ribbon",
"revolving-hearts",
"heart-decoration",
"couple-with-heart",

"leftwards-arrow",
"upwards-arrow",
"rightwards-arrow",
"downwards-arrow",
"left-right-arrow",
"up-down-arrow",
"north-west-arrow",
"north-east-arrow",
"south-east-arrow",
"south-west-arrow",
"black-up-pointing-triangle",
"black-down-pointing-triangle",
"black-left-pointing-triangle",
"black-right-pointing-triangle",
"heavy-wide-headed-rightwards-arrow",
"heavy-south-east-arrow",
"heavy-rightwards-arrow",
"heavy-north-east-arrow",
"drafting-point-rightwards-arrow",
"heavy-round-tipped-rightwards-arrow",
"triangle-headed-rightwards-arrow",
"heavy-triangle-headed-rightwards-arrow",
"dashed-triangle-headed-rightwards-arrow",
"heavy-dashed-triangle-headed-rightwards-arrow",
"black-rightwards-arrow",
"three-d-top-lighted-rightwards-arrowhead",
"three-d-bottom-lighted-rightwards-arrowhead",
"black-rightwards-arrowhead",
"heavy-black-curved-downwards-and-rightwards-arrow",
"heavy-black-curved-upwards-and-rightwards-arrow",
"rightwards-arrow-with-hook",
"leftwards-arrow-with-hook",
"leftwards-arrow-with-stroke",
"rightwards-arrow-with-stroke",
"leftwards-wave-arrow",
"rightwards-wave-arrow",
"leftwards-two-headed-arrow",
"upwards-two-headed-arrow",
"rightwards-two-headed-arrow",
"downwards-two-headed-arrow",
"leftwards-arrow-with-tail",
"rightwards-arrow-with-tail",
"leftwards-arrow-from-bar",
"rightwards-arrow-from-bar",
"upwards-arrow-from-bar",
"downwards-arrow-from-bar",
"up-down-arrow-with-base",
"leftwards-arrow-with-loop",
"rightwards-arrow-with-loop",
"left-right-wave-arrow",
"left-right-arrow-with-stroke",
"downwards-zigzag-arrow",
"upwards-arrow-with-tip-leftwards",
"upwards-arrow-with-tip-rightwards",
"downwards-arrow-with-tip-leftwards",
"rightwards-arrow-with-corner-downwards",
"downwards-arrow-with-tip-rightwards",
"downwards-arrow-with-corner-leftwards",
"anticlockwise-top-semicircle-arrow",
"clockwise-top-semicircle-arrow",
"north-west-arrow-to-long-bar",
"leftwards-arrow-to-bar-over-rightwards-arrow-to-bar",
"anticlockwise-open-circle-arrow",
"clockwise-open-circle-arrow",
"anticlockwise-gapped-circle-arrow",
"clockwise-gapped-circle-arrow",
"leftwards-harpoon-with-barb-upwards",
"leftwards-harpoon-with-barb-downwards",
"upwards-harpoon-with-barb-rightwards",
"upwards-harpoon-with-barb-leftwards",
"rightwards-harpoon-with-barb-upwards",
"rightwards-harpoon-with-barb-downwards",
"downwards-harpoon-with-barb-rightwards",
"downwards-harpoon-with-barb-leftwards",
"rightwards-arrow-over-leftwards-arrow",
"upwards-arrow-leftwards-of-downwards-arrow",
"leftwards-arrow-over-rightwards-arrow",
"leftwards-paired-arrows",
"leftwards-double-arrow",
"upwards-double-arrow",
"rightwards-double-arrow",
"downwards-double-arrow",
"left-right-double-arrow",
"rightwards-harpoon-over-leftwards-harpoon",
"leftwards-double-arrow-with-stroke",
"rightwards-double-arrow-with-stroke",
"up-down-double-arrow",
"north-west-double-arrow",
"north-east-double-arrow",
"south-east-double-arrow",
"south-west-double-arrow",
"south-west-double-arrow",
"up-down-white-arrow",
"leftwards-triple-arrow",
"rightwards-triple-arrow",
"leftwards-squiggle-arrow",
"rightwards-squiggle-arrow",
"upwards-arrow-with-double-stroke",
"downwards-arrow-with-double-stroke",
"downwards-arrow-with-double-stroke",
"downwards-arrow-with-double-stroke",
"leftwards-dashed-arrow",
"upwards-dashed-arrow",
"rightwards-dashed-arrow",
"downwards-dashed-arrow",
"leftwards-arrow-to-bar",
"rightwards-arrow-to-bar",
"leftwards-white-arrow",
"rightwards-white-arrow",
"downwards-white-arrow",
"upwards-white-arrow-from-bar",
"upwards-white-arrow",
"upwards-white-arrow-on-pedestal",
"upwards-white-arrow-on-pedestal-with-horizontal-bar",
"upwards-white-arrow-on-pedestal-with-vertical-bar",
"upwards-white-double-arrow",
"upwards-white-double-arrow-on-pedestal",
"rightwards-white-arrow-from-wall",
"north-west-arrow-to-corner",
"south-east-arrow-to-corner",
"right-arrow-with-small-circle",
"downwards-arrow-leftwards-of-upwards-arrow",
"three-rightwards-arrows",
"leftwards-arrow-with-vertical-stroke",
"rightwards-arrow-with-vertical-stroke",
"left-right-arrow-with-vertical-stroke",
"leftwards-arrow-with-double-vertical-stroke",
"leftwards-arrow-with-double-vertical-stroke",
"rightwards-arrow-with-double-vertical-stroke",
"left-right-arrow-with-double-vertical-stroke",
"leftwards-open-headed-arrow",
"rightwards-open-headed-arrow",
"left-right-open-headed-arrow",
"upwards-quadruple-arrow",
"downwards-quadruple-arrow",
"right-arrow-with-circled-plus",
"long-leftwards-arrow",
"long-rightwards-arrow",
"long-left-right-arrow",
"long-leftwards-double-arrow",
"long-rightwards-double-arrow",
"long-leftwards-double-arrow-from-bar",
"long-rightwards-double-arrow-from-bar",
"long-left-right-double-arrow",
"long-leftwards-arrow-from-bar",
"long-rightwards-arrow-from-bar",
"long-rightwards-squiggle-arrow",
"rightwards-two-headed-arrow-with-vertical-stroke",
"rightwards-two-headed-arrow-with-double-vertical-stroke",
"rightwards-two-headed-arrow-from-bar",
"leftwards-double-arrow-with-vertical-stroke",
"rightwards-double-arrow-with-vertical-stroke",
"left-right-double-arrow-with-vertical-stroke",
"leftwards-double-arrow-from-bar",
"rightwards-double-arrow-from-bar",
"downwards-arrow-with-horizontal-stroke",
"upwards-arrow-with-horizontal-stroke",
"upwards-triple-arrow",
"downwards-triple-arrow",
"leftwards-double-dash-arrow",
"rightwards-double-dash-arrow",
"leftwards-triple-dash-arrow",
"rightwards-triple-dash-arrow",
"rightwards-two-headed-triple-dash-arrow",
"rightwards-arrow-with-dotted-stem",
"upwards-arrow-to-bar",
"downwards-arrow-to-bar",
"rightwards-arrow-with-tail-with-vertical-stroke",
"rightwards-arrow-with-tail-with-double-vertical-stroke",
"rightwards-two-headed-arrow-with-tail",
"rightwards-two-headed-arrow-with-tail-with-vertical-stroke",
"rightwards-two-headed-arrow-with-tail-with-double-vertical-stroke",
"leftwards-arrow-tail",
"leftwards-arrow-tail",
"rightwards-arrow-tail",
"leftwards-double-arrow-tail",
"rightwards-double-arrow-tail",
"leftwards-arrow-to-black-diamond",
"rightwards-arrow-to-black-diamond",
"north-west-and-south-east-arrow",
"north-east-and-south-west-arrow",
"north-west-arrow-with-hook",
"north-east-arrow-with-hook",
"south-east-arrow-with-hook",
"south-west-arrow-with-hook",
"north-west-arrow-and-north-east-arrow",
"north-east-arrow-and-south-east-arrow",
"south-east-arrow-and-south-west-arrow",
"south-west-arrow-and-north-west-arrow",
"south-east-arrow-crossing-north-east-arrow",
"north-east-arrow-crossing-south-east-arrow",
"falling-diagonal-crossing-north-east-arrow",
"rising-diagonal-crossing-south-east-arrow",
"north-east-arrow-crossing-north-west-arrow",
"north-west-arrow-crossing-north-east-arrow",
"wave-arrow-pointing-directly-right",
"bottom-arc-anticlockwise-arrow",
"right-side-arc-clockwise-arrow",
"lower-right-semicircular-clockwise-arrow",
"lower-left-semicircular-anticlockwise-arrow",
"top-arc-anticlockwise-arrow",
"top-arc-clockwise-arrow-with-minus",
"top-arc-anticlockwise-arrow-with-plus",
"arrow-pointing-rightwards-then-curving-upwards",
"arrow-pointing-rightwards-then-curving-downwards",
"arrow-pointing-downwards-then-curving-leftwards",
"arrow-pointing-downwards-then-curving-rightwards",
"left-side-arc-anticlockwise-arrow",
"anticlockwise-closed-circle-arrow",
"clockwise-closed-circle-arrow",
"rightwards-arrow-above-short-leftwards-arrow",
"leftwards-arrow-above-short-rightwards-arrow",
"short-rightwards-arrow-above-leftwards-arrow",
"rightwards-arrow-with-plus-below",
"leftwards-arrow-with-plus-below",
"rightwards-arrow-through-x",
"left-right-arrow-through-small-circle",
"upwards-two-headed-arrow-from-small-circle",
"leftwards-harpoon-with-barb-up-to-bar",
"rightwards-harpoon-with-barb-up-to-bar",
"upwards-harpoon-with-barb-right-to-bar",
"downwards-harpoon-with-barb-right-to-bar",
"leftwards-harpoon-with-barb-down-to-bar",
"rightwards-harpoon-with-barb-down-to-bar",
"upwards-harpoon-with-barb-left-to-bar",
"downwards-harpoon-with-barb-left-to-bar",
"leftwards-harpoon-with-barb-up-from-bar",
"rightwards-harpoon-with-barb-up-from-bar",
"upwards-harpoon-with-barb-right-from-bar",
"downwards-harpoon-with-barb-right-from-bar",
"leftwards-harpoon-with-barb-down-from-bar",
"rightwards-harpoon-with-barb-down-from-bar",
"upwards-harpoon-with-barb-left-from-bar",
"downwards-harpoon-with-barb-left-from-bar",
"leftwards-harpoon-with-barb-up-above-leftwards-harpoon-with-barb-down",
"upwards-harpoon-with-barb-left-beside-upwards-harpoon-with-barb-right",
"rightwards-harpoon-with-barb-up-above-rightwards-harpoon-with-barb-down",
"downwards-harpoon-with-barb-left-beside-downwards-harpoon-with-barb-right",
"leftwards-harpoon-with-barb-up-above-rightwards-harpoon-with-barb-up",
"leftwards-harpoon-with-barb-down-above-rightwards-harpoon-with-barb-down",
"rightwards-harpoon-with-barb-up-above-leftwards-harpoon-with-barb-up",
"rightwards-harpoon-with-barb-down-above-leftwards-harpoon-with-barb-down",
"leftwards-harpoon-with-barb-up-above-long-dash",
"leftwards-harpoon-with-barb-down-below-long-dash",
"rightwards-harpoon-with-barb-up-above-long-dash",
"rightwards-harpoon-with-barb-down-below-long-dash",
"upwards-harpoon-with-barb-left-beside-downwards-harpoon-with-barb-right",
"downwards-harpoon-with-barb-left-beside-upwards-harpoon-with-barb-right",
"right-double-arrow-with-rounded-head",
"equals-sign-above-rightwards-arrow",
"tilde-operator-above-rightwards-arrow",
"leftwards-arrow-above-tilde-operator",
"rightwards-arrow-above-tilde-operator",
"rightwards-arrow-above-almost-equal-to",
"less-than-above-leftwards-arrow",
"leftwards-arrow-through-less-than",
"greater-than-above-rightwards-arrow",
"subset-above-rightwards-arrow",
"leftwards-arrow-through-subset",
"superset-above-leftwards-arrow",
"squat-black-rightwards-arrow",
"heavy-concave-pointed-black-rightwards-arrow",
"right-shaded-white-rightwards-arrow",
"left-shaded-white-rightwards-arrow",
"back-tilted-shadowed-white-rightwards-arrow",
"front-tilted-shadowed-white-rightwards-arrow",
"heavy-lower-right-shadowed-white-rightwards-arrow",
"heavy-upper-right-shadowed-white-rightwards-arrow",
"notched-lower-right-shadowed-white-rightwards-arrow",
"notched-upper-right-shadowed-white-rightwards-arrow",
"circled-heavy-white-rightwards-arrow",
"white-feathered-rightwards-arrow",
"black-feathered-south-east-arrow",
"black-feathered-rightwards-arrow",
"black-feathered-north-east-arrow",
"heavy-black-feathered-south-east-arrow",
"heavy-black-feathered-rightwards-arrow",
"heavy-black-feathered-north-east-arrow",
"teardrop-barbed-rightwards-arrow",
"heavy-teardrop-shanked-rightwards-arrow",
"wedge-tailed-rightwards-arrow",
"heavy-wedge-tailed-rightwards-arrow",
"open-outlined-rightwards-arrow",
"leftwards-black-arrow",
"upwards-black-arrow",
"downwards-black-arrow",
"return-symbol",
"rightwards-arrow-with-tip-downwards",
"rightwards-arrow-with-tip-upwards",
"leftwards-arrow-with-tip-downwards",
"leftwards-arrow-with-tip-upwards",
"thunderstorm",
"lightning",
"apl-functional-symbol-quad-less-than",
"apl-functional-symbol-quad-greater-than",
"apl-functional-symbol-quad-leftwards-arrow",
"apl-functional-symbol-quad-rightwards-arrow",
"apl-functional-symbol-quad-upwards-arrow",
"apl-functional-symbol-quad-downwards-arrow",
"apl-functional-symbol-quad-down-caret",
"apl-functional-symbol-quad-up-caret",
"apl-functional-symbol-quad-delta",
"apl-functional-symbol-quad-del",
"apl-functional-symbol-upwards-vane",
"apl-functional-symbol-downwards-vane",
"apl-functional-symbol-leftwards-vane",
"apl-functional-symbol-rightwards-vane",
"north-east-black-arrow",
"north-west-black-arrow",
"south-east-black-arrow",
"south-west-black-arrow",
"left-right-black-arrow",
"up-down-black-arrow",
"north-east-white-arrow",
"north-west-white-arrow",
"south-east-white-arrow",
"south-west-white-arrow",
"left-right-white-arrow",
"upwards-arrow",
"downwards-arrow",

"black-star",
"white-star",
"circled-white-star",
"open-centre-black-star",
"pinwheel-star",
"star-of-david",
"outlined-white-star",
"sextile",
"eight-pointed-pinwheel-star",
"balloon-spoked-asterisk",
"heavy-eight-teardrop-spoked-propeller-asterisk",
"sixteen-pointed-asterisk",
"twelve-pointed-black-star",
"heavy-eight-pointed-rectilinear-black-star",
"six-pointed-black-star",
"eight-pointed-rectilinear-black-star",
"eight-pointed-pinwheel-star",
"eight-pointed-black-star",
"eight-spoked-asterisk",
"open-centre-asterisk",
"heavy-asterisk",
"white-four-pointed-star",
"black-four-pointed-star",
"apl-functional-symbol-circle-star",
"circled-asterisk-operator",
"flower-punctuation-mark",
"six-pointed-star-with-middle-dot",
"shooting-star",
"glowing-star",
"small-asterisk",
"heavy-teardrop-spoked-pinwheel-asterisk",
"circled-open-centre-eight-pointed-star",
"open-centre-teardrop-spoked-asterisk",
"teardrop-spoked-asterisk",
"shadowed-white-star",
"apl-functional-symbol-star-diaeresis",
"outlined-black-star",
"star-equals",
"asterisk",
"arabic-five-pointed-star",

"fleur-de-lis",
"four-club-spoked-asterisk",
"heavy-four-balloon-spoked-asterisk",
"teardrop-spoked-asterisk",
"open-centre-teardrop-spoked-asterisk",
"heavy-teardrop-spoked-asterisk",
"six-petalled-black-and-white-florette",
"white-florette",
"black-florette",
"eight-petalled-outlined-black-florette",
"heavy-teardrop-spoked-pinwheel-asterisk",
"sparkle",
"heavy-sparkle",
"balloon-spoked-asterisk",
"eight-teardrop-spoked-propeller-asterisk",
"heavy-eight-teardrop-spoked-propeller-asterisk",
"flower",
"flower-punctuation-mark",
"cyrillic-letter-multiocular-o",
"vai-syllable-za",
"vai-syllable-zha",
"shamrock",
"tai-tham-sign-dokmai",
"four-leaf-clover",
"blossom",
"sunflower",
"hibiscus",
"rose",
"cherry-blossom",
"tulip",
"bouquet",

"white-smiling-face",
"white-frowning-face",
"black-smiling-face",
"grinning-face",
"grinning-face-with-smiling-eyes",
"face-with-tears-of-joy",
"smiling-face-with-open-mouth",
"smiling-face-with-open-mouth-and-smiling-eyes",
"smiling-face-with-open-mouth-and-cold-sweat",
"smiling-face-with-open-mouth-and-tightly-closed-eyes",
"smiling-face-with-halo",
"smiling-face-with-horns",
"winking-face",
"smiling-face-with-smiling-eyes",
"face-savouring-delicious-food",
"relieved-face",
"smiling-face-with-heart-shaped-eyes",
"smiling-face-with-sunglasses",
"smirking-face",
"neutral-face",
"expressionless-face",
"unamused-face",
"face-with-cold-sweat",
"pensive-face",
"confused-face",
"confounded-face",
"kissing-face",
"face-throwing-a-kiss",
"kissing-face-with-smiling-eyes",
"kissing-face-with-closed-eyes",
"face-with-stuck-out-tongue",
"face-with-stuck-out-tongue-and-winking-eye",
"face-with-stuck-out-tongue-and-tightly-closed-eyes",
"disappointed-face",
"worried-face",
"angry-face",
"pouting-face",
"crying-face",
"persevering-face",
"face-with-look-of-triumph",
"disappointed-but-relieved-face",
"frowning-face-with-open-mouth",
"anguished-face",
"fearful-face",
"weary-face",
"sleepy-face",
"tired-face",
"grimacing-face",
"loudly-crying-face",
"face-with-open-mouth",
"hushed-face",
"face-with-open-mouth-and-cold-sweat",
"face-screaming-in-fear",
"astonished-face",
"flushed-face",
"sleeping-face",
"dizzy-face",
"face-without-mouth",
"face-with-medical-mask",
"grinning-cat-face-with-smiling-eyes",
"cat-face-with-tears-of-joy",
"smiling-cat-face-with-open-mouth",
"smiling-cat-face-with-heart-shaped-eyes",
"cat-face-with-wry-smile",
"kissing-cat-face-with-closed-eyes",
"pouting-cat-face",
"crying-cat-face",
"weary-cat-face",
"face-with-no-good-gesture",
"face-with-ok-gesture",
"person-bowing-deeply",
"see-no-evil-monkey",
"hear-no-evil-monkey",
"speak-no-evil-monkey",
"happy-person-raising-one-hand",
"person-raising-both-hands-in-celebration",
"person-frowning",
"person-with-pouting-face",
"person-with-folded-hands",
"rocket",
"helicopter",
"steam-locomotive",
"railway-car",
"high-speed-train",
"high-speed-train-with-bullet-nose",
"train",
"metro",
"light-rail",
"station",
"tram",
"tram-car",
"bus",
"oncoming-bus",
"trolleybus",
"bus-stop",
"minibus",
"ambulance",
"fire-engine",
"police-car",
"oncoming-police-car",
"taxi",
"oncoming-taxi",
"automobile",
"oncoming-automobile",
"recreational-vehicle",
"delivery-truck",
"articulated-lorry",
"tractor",
"monorail",
"mountain-railway",
"suspension-railway",
"mountain-cableway",
"aerial-tramway",
"ship",
"rowboat",
"speedboat",
"horizontal-traffic-light",
"vertical-traffic-light",
"construction-sign",
"police-cars-revolving-light",
"triangular-flag-on-post",
"door",
"no-entry-sign",
"smoking-symbol",
"no-smoking-symbol",
"put-litter-in-its-place-symbol",
"do-not-litter-symbol",
"potable-water-symbol",
"non-potable-water-symbol",
"bicycle",
"no-bicycles",
"bicyclist",
"mountain-bicyclist",
"pedestrian",
"no-pedestrians",
"children-crossing",
"mens-symbol",
"womens-symbol",
"restroom",
"baby-symbol",
"toilet",
"water-closet",
"shower",
"bath",
"bathtub",
"passport-control",
"customs",
"baggage-claim",
"left-luggage",

]

@Output() iconWasSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.iconss = this.iconsData;
  }

  onIconSelected(iconList : string) {
    this.iconWasSelected.emit(iconList);
  }

}
