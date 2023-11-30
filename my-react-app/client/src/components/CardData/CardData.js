import ImgModel1 from "../../containers/Icons/dbd.jpg";
import ImgModel2 from "../../containers/Icons/Metro.jpg";
import ImgModel3 from "../../containers/Icons/Stalker.jpg";
import ImgModel4 from "../../containers/Icons/Unholy.jpg";
import ImgModel5 from "../../containers/Icons/Witcher.jpg";
import ImgModel6 from "../../containers/Icons/Shadowgun_Legends.jpg";

const dataCard = [
  {
    id: 1,
    title: "Dead by Daylight",
    type: "Mobile/Computer Game",
    text:
      "A 4 vs 1 multiplayer horror game where one player takes on the role of the brutal Killer " +
      "while the other four players are Survivors trying to escape the killer. " +
      "The goal of the fugitives is to escape and escape from the killing area without " +
      "falling into the hands of the killer, and doing so is much more difficult than it might seem.",
    image: ImgModel1,
    price: 50,
  },
  {
    id: 2,
    title: "Metro 2033",
    type: "Video Game",
    text:
      "A video game that combines the genres of survival horror and first-person shooter. " +
      "The player acts as a young man, Artyom, who lives in a post-apocalyptic world. " +
      "He fights with various enemies - bandits, mutants or representatives of hostile groups.",
    image: ImgModel2,
    price: 95,
  },
  {
    id: 3,
    title: "S.T.A.L.K.E.R. 2",
    type: "Video Game",
    text:
      "A role-playing video game in the genre of a post-apocalyptic first-person shooter with elements of survival horror " +
      "and immersive sim, developed and published by the Ukrainian company GSC Game World. " + 
      "The main character is Stalker, a scavenger who travels the Zone in search of artifacts and other valuable items. ",
    image: ImgModel3,
    price: 77,
  },

  {
    id: 4,
    title: "Unholy",
    type: "Video Game",
    text:
      "A first-person psychological horror where players must open the door between ordinary reality and a dark, godless world " +
      "to discover a secret and save the heroine's child. Explore both worlds in search of clues, solve puzzles and choose " +
      "to hide from brutal enemies or fight them and confront the nightmarish power.",
    image: ImgModel4,
    price: 80,
  },

  {
    id: 5,
    title: "The Witcher: Old World",
    type: "Board Game",
    text:
      "In a dangerous, unpredictable world, the habit of not being surprised by anything and drawing your sword in time is a very useful skill. " +
      "Try to keep your mind cool when someone's hungry eyes are watching you from the darkness, it's good if it's a bear, " +
      "but it's quite possible that it's some endriaga, or even a completely otherworldly undead.",
    image: ImgModel5,
    price: 36,
  },

  {
    id: 6,
    title: "Shadowgun Legends",
    type: "Mobile Game",
    text:
      "The action of the game takes place in 2350, intergalactic corporations exist not under the control of governments. " +
      "Bounty hunters and mercenaries work for both corporations and planetary governments, working for a higher fee. " +
      "The best mercenaries are known under the pseudonym Shadowgun.",
    image: ImgModel6,
    price: 10,
  },
];

export default dataCard;
