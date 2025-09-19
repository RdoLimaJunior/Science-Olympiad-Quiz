import type { Question } from '../types';

export const allQuizzes: Record<string, Question[]> = {
  "2024": [
    {
      id: 1,
      text: "A group chose a plant called Matteuccia struthiopteris (Ostrich Fern). What should the group expect regarding its reproductive and structural characteristics as they observe the plant grow?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.07.22.png",
      options: [
        { id: 'A', text: "The plant will exhibit flowering and seed production, with colourful petals." },
        { id: 'B', text: "The plant will show growth of compound leaves and reproduce via spores." },
        { id: 'C', text: "The plant will develop thick, woody stems and large fruit bodies as its primary means of reproduction." },
        { id: 'D', text: "The plant will display long tube-like structures for trapping insects, relying on them for nutrition and reproduction." }
      ],
      correctAnswerId: 'B',
      explanation: "Matteuccia struthiopteris, or Ostrich Fern, is a type of fern. Ferns reproduce through spores, not flowers and seeds. They grow compound leaves. Therefore, option B is the correct choice."
    },
    {
      id: 2,
      text: "Fertilisation is an important process in sexual reproduction. Choose the correct group of animals undergoing internal and external fertilisation processes based on the table.",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.23.08.png",
      options: [
        { id: 'A', text: "Internal: Only Fishes / External: Only Mammals" },
        { id: 'B', text: "Internal: Both Fishes and Amphibians / External: Reptiles, Birds and Mammals" },
        { id: 'C', text: "Internal: Reptiles, Birds and Mammals / External: Both Fishes and Amphibians" },
        { id: 'D', text: "Internal: Only Mammals / External: Only Amphibians" }
      ],
      correctAnswerId: 'C',
      explanation: "External fertilization occurs in animals like Fishes and Amphibians. Internal fertilization occurs in Reptiles, Birds, and Mammals. This makes option C the correct choice."
    },
    {
      id: 3,
      text: "A student placed three aluminium objects (P: foil, Q: empty can, R: solid block) in a beaker of water. Which option correctly describes their behavior after 2 minutes?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.24.00.png",
      options: [
        { id: 'A', text: "All three objects will sink to the bottom." },
        { id: 'B', text: "The foil (P) and the block (R) will sink, while the can (Q) floats." },
        { id: 'C', text: "The block (R) will sink, while the foil (P) and the can (Q) float." },
        { id: 'D', text: "All three objects will float on the surface." }
      ],
      correctAnswerId: 'C',
      explanation: "The solid aluminium block (R) is denser than water and will sink. The hollow can (Q) and the lightweight foil (P) have a lower overall density than water (due to trapped air and shape), causing them to float."
    },
    {
      id: 4,
      text: "Consider the different groups of animals below. Which of the following correctly identifies animals based on their ability to internally regulate their body temperature? (Keys: ✓ - Yes; × – No)",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.26.25-1024x369.png",
      options: [
        { id: 'A', text: "Group W" },
        { id: 'B', text: "Group Y" },
        { id: 'C', text: "Group X" },
        { id: 'D', text: "Group Z" }
      ],
      correctAnswerId: 'D',
      explanation: "Warm-blooded animals (endotherms) like mammals and birds can regulate their temperature. Cold-blooded animals (ectotherms) like fish, amphibians, and reptiles cannot. Group Z contains a shark (fish) and a turtle (reptile), both of which are cold-blooded and rely on external heat."
    },
    {
      id: 5,
      text: "Which configuration correctly displays the internal arrangement of magnets when the mag-switch is turned on to attract the steel rod?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.29.16.png",
      options: [
        { id: 'A', text: "Configuration A" },
        { id: 'B', text: "Configuration B" },
        { id: 'C', text: "Configuration C" },
        { id: 'D', text: "Configuration D" }
      ],
      correctAnswerId: 'C',
      explanation: "When the switch is on, the magnets align so their fields combine to create a strong external magnetic field. Option C shows the correct arrangement where opposite poles (N and S) are near each other, creating the desired field to attract the steel rod."
    },
    {
      id: 6,
      text: "Which property is being tested in the experimental setup where a beaker of water is placed on 'Material X' supported by a stand?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.31.29.png",
      options: [
        { id: 'A', text: "Flexibility" },
        { id: 'B', text: "Strength" },
        { id: 'C', text: "Waterproof ability" },
        { id: 'D', text: "Transparency" }
      ],
      correctAnswerId: 'B',
      explanation: "The setup is designed to test the strength of Material X by observing how much mass (the beaker filled with water) it can support without failing. Its ability to hold weight is directly related to its strength."
    },
    {
      id: 7,
      text: "A Bristlecone Pine tree can live for almost 5,000 years and withstand harsh conditions. Which explanation describes its unique survival characteristics?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.33.36.png",
      options: [
        { id: 'A', text: "It transforms into a non-living being by losing all its leaves." },
        { id: 'B', text: "It has a unique form of photosynthesis that does not require water." },
        { id: 'C', text: "It adapts itself as a non-living being, no longer requiring nutrients." },
        { id: 'D', text: "It has developed a thick, non-living bark layer that insulates it and minimises water loss." }
      ],
      correctAnswerId: 'D',
      explanation: "The Bristlecone Pine has evolved unique survival adaptations. Its thick, non-living bark layer insulates its living tissues, protecting them from temperature fluctuations and reducing water loss, which is crucial during periods of drought."
    },
    {
      id: 8,
      text: "Which statement is correct for the characteristics of insects?",
      options: [
        { id: 'A', text: "Insects possess an exoskeleton made of chitin, which provides body support and protection." },
        { id: 'B', text: "Insects have an internal skeleton that supports their body structure." },
        { id: 'C', text: "Insects use chromophores in their skin to change color." },
        { id: 'D', text: "Insects breathe through lungs, similar to vertebrates." }
      ],
      correctAnswerId: 'A',
      explanation: "Statement 1 is correct: Insects have an exoskeleton made of chitin. Statement 2 is incorrect; they have an external skeleton. Statement 3 is incorrect; they don't use chromophores for color change. Statement 4 is incorrect; they use a system of tracheae, not lungs."
    },
    {
      id: 9,
      text: "Which of the following correctly represents the aim of the experiment where a student wraps a varying number of copper coils around an iron nail and measures the time it takes to pick up 10 paper clips?",
      options: [
        { id: 'A', text: "To investigate the relationship between the number of coils in an electromagnet and its magnetic strength." },
        { id: 'B', text: "To see how long an electromagnet can hold paper clips." },
        { id: 'C', text: "To test the relationship between battery size and magnetic strength." },
        { id: 'D', text: "To measure how distance affects the speed of attraction." }
      ],
      correctAnswerId: 'A',
      explanation: "The experiment's aim is to investigate how the number of coils (the independent variable) affects its magnetic strength, measured by how quickly it can pick up a set number of paper clips (the dependent variable)."
    },
    {
      id: 10,
      text: "Ginger and Turmeric are plants that store bioactive compounds (Gingerol and Curcumin) in their underground structures. What are these storage organs called?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.38.54.png",
      options: [
        { id: 'A', text: "Bulb" },
        { id: 'B', text: "Tuber" },
        { id: 'C', text: "Rhizome" },
        { id: 'D', text: "Underground root" }
      ],
      correctAnswerId: 'C',
      explanation: "The rhizome is the underground stem that serves as the storage organ for both ginger and turmeric, where their respective bioactive compounds are concentrated. Bulbs are for plants like onions, and tubers for plants like potatoes."
    },
    {
      id: 11,
      text: "Which statement best explains the observed growth behaviour of yeast cells in solutions P (no glucose/protein) and Q (with glucose/protein) based on the provided graphs?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.42.38.png",
      options: [
          { id: 'A', text: "The growth was better in solution Q due to the presence of minerals and vitamins." },
          { id: 'B', text: "Yeast in solution P had poor growth due to inhibitory ingredients." },
          { id: 'C', text: "The growth was better in solution Q due to the absence of energy-providing ingredients." },
          { id: 'D', text: "Yeast in solution P had poor growth due to the absence of essential energy-providing ingredients." }
      ],
      correctAnswerId: 'D',
      explanation: "Yeast growth in Solution P was poor because it lacked energy-providing ingredients like glucose and proteins. Solution Q contained these necessary nutrients, which allowed the yeast cells to thrive, as shown in the graph."
    },
    {
      id: 12,
      text: "Based on the text about cheese making, choose the correct role of Lactobacillus bacteria.",
      options: [
          { id: 'A', text: "It determines the sugar content in cheese." },
          { id: 'B', text: "The number of bacteria is key for cheese packaging." },
          { id: 'C', text: "It reduces fermentation time by curdling milk." },
          { id: 'D', text: "It influences fermentation time by producing acids and gases that add to the cheese's characteristics." }
      ],
      correctAnswerId: 'D',
      explanation: "The selected Lactobacillus species plays a crucial role in influencing fermentation time by producing byproducts like lactic acid and carbon dioxide. These byproducts contribute to the final flavor, texture, and ripeness of the cheese."
    },
    {
      id: 13,
      text: "A sugar company's performance changed significantly after year 5. Based on the graph and information about sugarcane, what is the most relevant change the company implemented?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.48.07.png",
      options: [
          { id: 'A', text: "The company used preserved roots, flowers, and seeds to start a farm." },
          { id: 'B', text: "The company sowed germinating seeds." },
          { id: 'C', text: "The company planted sugarcane stem cuttings to establish its own farm." },
          { id: 'D', text: "The company shifted to using leaves instead of stems." }
      ],
      correctAnswerId: 'C',
      explanation: "The sharp increase in performance from the 6th year is best explained by the adoption of the stem-cutting method. This is a common and efficient practice for sugarcane cultivation, allowing the company to establish its own reliable source."
    },
    {
      id: 14,
      text: "In the experiment with soaked black lentils in a sealed flask with potassium hydroxide, what process created the vacuum?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.51.11.png",
      options: [
          { id: 'A', text: "The lentils underwent germination and respiration, releasing carbon dioxide which was absorbed by the potassium hydroxide." },
          { id: 'B', text: "The vacuum was created by gaseous exchange on the lentil's outer surface." },
          { id: 'C', text: "The lentils absorbed carbon dioxide for photosynthesis." },
          { id: 'D', text: "The lentils absorbed carbon dioxide and released oxygen." }
      ],
      correctAnswerId: 'A',
      explanation: "During germination, lentils respire, breaking down stored food and releasing carbon dioxide. The potassium hydroxide in the test tube absorbs this CO2, reducing the gas volume and pressure inside the flask, creating a vacuum."
    },
    {
      id: 15,
      text: "Based on the student's observations with an iron ball, a magnet, and different plates, which statement is true?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.55.29.png",
      options: [
          { id: 'A', text: "The iron ball was always attracted, except with a copper plate where it was repelled." },
          { id: 'B', text: "The iron ball was repelled with a glass plate and attracted to all others." },
          { id: 'C', text: "The iron ball showed no interaction with the magnet when a steel plate was used." },
          { id: 'D', text: "The iron ball was attracted with a nickel plate but repelled with a steel plate." }
      ],
      correctAnswerId: 'C',
      explanation: "Steel and Nickel are magnetic materials that block or redirect the magnetic field, leading to no interaction between the iron ball and the magnet. Glass and Copper are non-magnetic, so they allow the magnetic force to pass through, attracting the ball."
    },
    {
      id: 16,
      text: "Homing pigeons have a remarkable ability to navigate. Based on the information provided, choose the correct statement.",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.00.05.png",
      options: [
          { id: 'A', text: "The bird shows adaptive navigating instincts by responding to environmental stimuli like the Earth's magnetic field." },
          { id: 'B', text: "The bird demonstrates seasonal migration using the magnetic field." },
          { id: 'C', text: "The bird undergoes remarkable growth during its long journeys." },
          { id: 'D', text: "The bird's navigation is a safeguarding characteristic, highlighting a protective role of its instincts for survival." }
      ],
      correctAnswerId: 'D',
      explanation: "The magnetite beak and specialized eye cells help the bird navigate, ensuring it doesn't get lost during long flights. This adaptation is crucial for the bird's survival, highlighting the protective characteristics of its unique navigating abilities."
    },
    {
      id: 17,
      text: "How does the seed-breaking behaviour of ants differ between dicot (peas, coriander) and monocot (rice, corn) seeds to prevent germination?",
      options: [
          { id: 'A', text: "Ants break both dicot and monocot seeds into four halves to prevent germination." },
          { id: 'B', text: "Ants break dicot seeds into four halves, but monocot seeds into two halves." },
          { id: 'C', text: "Ants break dicot seeds into four parts, but break monocot seeds into two halves." },
          { id: 'D', text: "Ants break dicot seeds but leave monocot seeds intact." }
      ],
      correctAnswerId: 'A',
      explanation: "Ants break both dicot and monocot seeds into four halves. This is because both types of seeds can still sprout even when halved, so the ants take further steps to ensure they don't germinate."
    },
    {
      id: 18,
      text: "Gynandromorphy in butterflies is a condition with both male and female characteristics. At which stage of the butterfly's life cycle are these characteristics most likely to become recognizable?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.05.08.png",
      options: [
          { id: 'A', text: "Adult stage" },
          { id: 'B', text: "Larva stage" },
          { id: 'C', text: "Pupa stage" },
          { id: 'D', text: "Egg stage" }
      ],
      correctAnswerId: 'C',
      explanation: "Gynandromorphy is most likely to become visible during the pupa stage. This is when the butterfly undergoes metamorphosis and develops its distinguishable adult morphological characteristics, revealing the dual-gender traits."
    },
    {
      id: 19,
      text: "A student tested four thermos flasks. Which conclusion will correctly help the student select a bottle for keeping her coffee hot?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.07.56.png",
      options: [
          { id: 'A', text: "Ceramic and Styrofoam bottles are suitable as they are excellent conductors of heat." },
          { id: 'B', text: "The Iron bottle cannot be used due to its poor conduction of heat." },
          { id: 'C', text: "A double-walled Glass bottle would be better if converted to a triple-walled bottle." },
          { id: 'D', text: "Ceramic and Styrofoam bottles are most suitable due to their excellent heat insulation properties." }
      ],
      correctAnswerId: 'D',
      explanation: "Ceramic and Styrofoam are the most suitable because they are excellent heat insulators (poor conductors of heat), as demonstrated by the smallest drop in coffee temperature over 6 hours. Iron is a good conductor and cooled down quickly."
    },
    {
      id: 20,
      text: "Two plates, Material X and Material Y, were subjected to a finger-touch test and an ice-cube test. Which statement could be inferred correctly? (Note: X feels warmer, melts ice slower. Y feels cooler, melts ice quicker).",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.10.13.png",
      options: [
          { id: 'A', text: "Material X is iron (high conductivity) and Material Y is ceramic (low resistivity)." },
          { id: 'B', text: "Material Y is aluminium (high conductivity) and Material X is iron (high resistivity)." },
          { id: 'C', text: "Material X is plastic (high resistivity) and Material Y is aluminium (high conductivity)." },
          { id: 'D', text: "Material Y is ceramic (low resistivity) and Material X is plastic (high conductivity)." }
      ],
      correctAnswerId: 'C',
      explanation: "Material Y feels cool and melts ice quickly because it is a good thermal conductor (like aluminum), rapidly drawing heat from the finger and transferring it to the ice. Material X feels warmer and melts ice slowly because it is a poor conductor/good insulator (like plastic)."
    },
    {
      id: 21,
      text: "Scientists want to create an artificial chicken with Tibetan chicken characteristics (adapted to cold, low-pressure). Which method is most appropriate?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.12.30.png",
      options: [
          { id: 'A', text: "Rearing normal mother hens in a cold, low-pressure lab environment." },
          { id: 'B', text: "Developing normally laid eggs in a partially closed, cold glass container." },
          { id: 'C', text: "Maturing normal embryos in a partially closed container in a cold, low-pressure lab environment." },
          { id: 'D', text: "Exposing ready-to-hatch eggs to a cold, low-pressure environment." }
      ],
      correctAnswerId: 'C',
      explanation: "Maturing the embryos in a simulated harsh environment is the most appropriate method. This allows the embryos to develop and adapt during their growth phase, potentially acquiring the desired traits like enhanced oxygen intake."
    },
    {
      id: 22,
      text: "What was the aim of the experiment testing the water-holding capacity of sheets X, Y, and Z, based on the graph?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.17.03.png",
      options: [
          { id: 'A', text: "To prove that sheet Z is the most suitable waterproof material due to its longer water-holding capacity." },
          { id: 'B', text: "To show that X and Y are excellent waterproof materials due to their lesser water-holding capacities." },
          { id: 'C', text: "To prove that X and Z are the least efficient materials for holding water." },
          { id: 'D', text: "To demonstrate that sheet Y is the most efficient waterproof material." }
      ],
      correctAnswerId: 'A',
      explanation: "The aim is to find the best waterproof material. The longer a material can hold water on its surface without letting it pass through, the more waterproof it is. Sheet Z held water for the maximum duration, proving it has the best waterproof properties."
    },
    {
      id: 23,
      text: "Which reason correctly explains the difference between the Indian Pipe plant and a Cactus plant?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.23.19.png",
      options: [
          { id: 'A', text: "The absence of green parts in the Indian Pipe indicates a need for a fungal association for nutrients, while the Cactus's photosynthetic ability shows its independence." },
          { id: 'B', text: "The Indian Pipe's ghostly appearance allows it to get nutrients in unfavourable conditions." },
          { id: 'C', text: "The Indian Pipe's white colour is linked to its fungal dependence, while the Cactus's suitability for dry conditions is due to its photosynthetic ability." },
          { id: 'D', text: "The Indian Pipe's unique colouration indicates a mutual relationship with fungi." }
      ],
      correctAnswerId: 'A',
      explanation: "The Indian Pipe plant is white because it lacks chlorophyll and cannot photosynthesize, making it reliant on a fungal association for nutrients. In contrast, the green Cactus plant can photosynthesize, making it independent and self-sufficient for energy."
    },
    {
      id: 24,
      text: "An experiment observed the effect of Aspergillus fungus on bacteria. The table relates the size of the 'destruction zone' to bacterial counts. Which conclusion is NOT justified?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.26.06.png",
      options: [
          { id: 'A', text: "The larger the destruction zone, the higher the growth of bacteria." },
          { id: 'B', text: "The larger the destruction zone, the lower the bacterial cell count." },
          { id: 'C', text: "The fungus was effective against bacteria around the mycelium." },
          { id: 'D', text: "Different zone sizes were produced due to effectiveness against a few bacterial cells." }
      ],
      correctAnswerId: 'A',
      explanation: "Statement A is incorrect because it contradicts the observed effect. A larger destruction zone indicates more effective inhibition of bacterial cells by the fungus, leading to a reduction in the bacterial cell count, not higher growth."
    },
    {
      id: 25,
      text: "A patient had Epiglottitis, a bacterial infection. Four conclusions were drawn. Identify the correct set of statements. (2 & 4 are correct)",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.29.54.png",
      options: [
          { id: 'A', text: "Statement 1 only" },
          { id: 'B', text: "Statements 1 and 2 only" },
          { id: 'C', text: "Statements 3 and 4 only" },
          { id: 'D', text: "Statements 2 and 4 only" }
      ],
      correctAnswerId: 'D',
      explanation: "Statement 2 is correct because Haemophilus influenzae infects the epiglottis, which is in the respiratory system. Statement 4 is correct because antibiotics work to kill the bacteria in the respiratory system. Statements 1 and 3 are incorrect as the epiglottis is not part of the digestive system."
    }
  ],
  "2023": [
    {
      id: 1,
      text: "Which of these organisms has been classified wrongly?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.47.55.png",
      options: [
        { id: 'A', text: "Subset 1: Earthworm, Starfish / Subset 2: Moss, Mushroom" },
        { id: 'B', text: "Subset 1: Spider, Crab / Subset 2: Fern, Algae" },
        { id: 'C', text: "Subset 1: Salamander, Snail / Subset 2: Banana, Conifer" },
        { id: 'D', text: "Subset 1: Jellyfish, Coral / Subset 2: Seaweed, Liverwort" }
      ],
      correctAnswerId: 'C',
      explanation: "The organisms in subset 1 are invertebrates and non-flowering plants in subset 2. Salamanders are vertebrates and a banana is easily recognized a fruit so it should be classified as a flowering plant."
    },
    {
      id: 2,
      text: "Which of the following is an example of a system?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.49.40.png",
      options: [
        { id: 'A', text: "Key" },
        { id: 'B', text: "Cup" },
        { id: 'C', text: "Mechanical pencil" },
        { id: 'D', text: "Sticky note" }
      ],
      correctAnswerId: 'C',
      explanation: "A mechanical pencil is a system because it consists of multiple interconnected components (lead, barrel, mechanism) working together to achieve a common goal (writing). The other items are single objects, not systems."
    },
    {
      id: 3,
      text: "If these paperclips are magnetised, which of the following diagrams correctly shows the poles of the paperclips in relation to the bar magnet?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.50.50.png",
      options: [
        { id: 'A', text: "Diagram A" },
        { id: 'B', text: "Diagram B" },
        { id: 'C', text: "Diagram C" },
        { id: 'D', text: "Diagram D" }
      ],
      correctAnswerId: 'B',
      explanation: "When a paperclip is magnetized by induction, the end closer to a magnet's pole acquires the opposite polarity. The South pole of the magnet will induce a North pole on the part of the paperclip touching it, and vice versa."
    },
    {
      id: 4,
      text: "Which of the following statements about bacteria is true?",
      options: [
        { id: 'A', text: "Most bacteria are smaller than yeast." },
        { id: 'B', text: "Bacteria are only found in soil and are transmitted to humans through contact with contaminated surfaces." },
        { id: 'C', text: "Like all living organisms, all bacteria require food, water, and oxygen to survive." },
        { id: 'D', text: "Fungi and bacteria are different in terms of how they obtain food. Most fungi are decomposers, but most bacteria produce their own food." }
      ],
      correctAnswerId: 'A',
      explanation: "Statement A is true; bacteria are unicellular microorganisms that are generally smaller than yeast cells. The other statements are incorrect: bacteria are found everywhere, not all require oxygen (some are anaerobic), and most bacteria are heterotrophs (they don't produce their own food)."
    },
    {
      id: 5,
      text: "Which of the following are dicots?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.53.35.png",
      options: [
        { id: 'A', text: "2 only" },
        { id: 'B', text: "4 only" },
        { id: 'C', text: "2 and 4 only" },
        { id: 'D', text: "1, 2, 3 and 4" }
      ],
      correctAnswerId: 'B',
      explanation: "Kidney bean (4) is a dicot because it has two cotyledons (seed leaves). Rice (1), wheat (2), and corn (3) are all monocots, having only one cotyledon."
    },
    {
      id: 6,
      text: "The graph shows the avg. amount of undigested food leaving different parts of the digestive system. Which row correctly identifies the parts?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.56.18.png",
      options: [
        { id: 'A', text: "Row A" },
        { id: 'B', text: "Row B" },
        { id: 'C', text: "Row C" },
        { id: 'D', text: "Row D" }
      ],
      correctAnswerId: 'A',
      explanation: "Digestion starts in the mouth (N/O), continues significantly in the stomach (L), and most digestion occurs in the small intestine (M/K). The amount of undigested food is highest at the start (mouth) and lowest after the small intestine. No digestion occurs in the gullet or large intestine. Row A correctly matches this pattern."
    },
    {
      id: 7,
      text: "Based on the flower experiment, which human system can be likened to the plant system responsible for the colour transformation?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.59.27.png",
      options: [
        { id: 'A', text: "Nervous System" },
        { id: 'B', text: "Circulatory System" },
        { id: 'C', text: "Skeletal System" },
        { id: 'D', text: "Respiratory System" }
      ],
      correctAnswerId: 'B',
      explanation: "The flower petals changed colour because the plant's transport system (xylem) transported the coloured water up to them. This is analogous to the human circulatory system, which transports blood, nutrients, and other substances throughout the body."
    },
    {
      id: 8,
      text: "Which of the following apparatus would be more appropriate to accurately measure the volume of hydrogen gas produced?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.04.03.png",
      options: [
        { id: 'A', text: "Beaker" },
        { id: 'B', text: "Conical Flask" },
        { id: 'C', text: "Standard Flask" },
        { id: 'D', text: "10 mL Syringe" }
      ],
      correctAnswerId: 'D',
      explanation: "A syringe is the most appropriate apparatus for accurately measuring the volume of gas collected from a chemical reaction. Beakers and flasks are designed for holding liquids, not for precise volume measurement of gases."
    },
    {
      id: 9,
      text: "A student measures the length of a building's shadow from 9 AM to 5 PM. Which graph correctly represents the readings?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.05.33.png",
      options: [
        { id: 'A', text: "Graph A" },
        { id: 'B', text: "Graph B" },
        { id: 'C', text: "Graph C" },
        { id: 'D', text: "Graph D" }
      ],
      correctAnswerId: 'C',
      explanation: "The shadow is longest in the morning (when the sun is low), shortest at noon (when the sun is highest), and gets longer again in the afternoon. This creates a V-shaped curve, as shown in Graph C."
    },
    {
      id: 10,
      text: "The iron rings used to reinforce wooden barrels are too tight. Which method would you suggest to make them fit?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.07.44.png",
      options: [
        { id: 'A', text: "Soaking the barrel in water for several hours" },
        { id: 'B', text: "Heating the iron ring in a blacksmith's forge." },
        { id: 'C', text: "Cooling the iron ring in a bucket of ice." },
        { id: 'D', text: "Heating the barrel for several hours" }
      ],
      correctAnswerId: 'B',
      explanation: "Heating a metal object causes it to expand (thermal expansion). By heating the iron ring, it will expand, making it large enough to fit over the barrel. As it cools, it will contract and tighten, securing the barrel staves."
    },
    {
      id: 11,
      text: "Based on the classification of vertebrates, which of the following groups are not classified together correctly?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.09.40.png",
      options: [
        { id: 'A', text: "Group A: Platypus, Dolphin" },
        { id: 'B', text: "Group B: Bat, Eagle" },
        { id: 'C', text: "Group C: Tortoise, Snake" },
        { id: 'D', text: "Group D: Shark, Salmon" }
      ],
      correctAnswerId: 'B',
      explanation: "Group B is incorrect because it mixes two different vertebrate classes. A bat is a mammal, while an eagle is a bird. The other groups correctly classify animals within the same class (A: Mammals, C: Reptiles, D: Fish)."
    },
    {
      id: 12,
      text: "Students tested four rulers by adding water to a bag tied to each ruler until it snapped. What property of the materials were they testing?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.12.35.png",
      options: [
        { id: 'A', text: "Transparency of each ruler used in the experiment" },
        { id: 'B', text: "Flexibility of each ruler before it snapped" },
        { id: 'C', text: "Strength of each ruler" },
        { id: 'D', text: "Waterproofing ability of each ruler" }
      ],
      correctAnswerId: 'C',
      explanation: "The experiment measures the amount of load (weight of the water) each ruler can withstand before breaking. This is a direct test of the material's strength."
    },
    {
      id: 13,
      text: "Based on Minji’s observations, which of the following correctly shows the positions of immiscible liquids K, L and M when they are arranged in the same cup?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.15.01.png",
      options: [
        { id: 'A', text: "Diagram A" },
        { id: 'B', text: "Diagram B" },
        { id: 'C', text: "Diagram C" },
        { id: 'D', text: "Diagram D" }
      ],
      correctAnswerId: 'B',
      explanation: "The ice cube sank in liquid L but floated in K and M, so L is the least dense liquid. Object X sank in K but floated in M, so M is denser than K. Therefore, the order of density from least to most is L < K < M. When layered, the least dense (L) will be at the top, and the most dense (M) at the bottom."
    },
    {
      id: 14,
      text: "The flowchart illustrates how animals are categorized. Which of the options is not a correct fit for the flowchart?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.16.24-1024x919.png",
      options: [
        { id: 'A', text: "X = Bat" },
        { id: 'B', text: "Y = Guppy" },
        { id: 'C', text: "Z = Turtle" },
        { id: 'D', text: "W = Penguin" }
      ],
      correctAnswerId: 'C',
      explanation: "Following the flowchart: Z lays eggs and has feathers, so it's a bird (like a Penguin). W lays eggs, has no feathers, and no gills, so it's a reptile (like a Turtle). Option C incorrectly identifies Z as a Turtle."
    },
    {
      id: 15,
      text: "A teacher burns a sodium compound in a dark room illuminated by a yellow sodium lamp. What colour would the flame most likely appear?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.19.21.png",
      options: [
        { id: 'A', text: "Yellow" },
        { id: 'B', text: "Yellowish orange" },
        { id: 'C', text: "Bright or white" },
        { id: 'D', text: "Dark or black" }
      ],
      correctAnswerId: 'D',
      explanation: "This is a phenomenon known as a 'black flame'. The sodium in the flame absorbs the specific yellow wavelength of light emitted by the sodium lamp. Since that light doesn't reach the observer's eye from the flame, the flame appears dark or black against the bright background."
    },
    {
      id: 16,
      text: "What characteristic(s) of living organisms is/are demonstrated by the Venus flytrap trapping an insect?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.22.11.png",
      options: [
        { id: 'A', text: "(1) and (3) only" },
        { id: 'B', text: "(2) and (3) only" },
        { id: 'C', text: "(2) and (4) only" },
        { id: 'D', text: "(1), (2), (3) and (4)" }
      ],
      correctAnswerId: 'C',
      explanation: "The leaves snapping shut demonstrates that living organisms can move (2). This action is triggered by the insect touching hairs, which shows that living organisms can respond to changes (stimuli) in their environment (4)."
    },
    {
      id: 17,
      text: "Which of the following statements about the life cycle of a frog is/are incorrect? (1) Reproduce before metamorphosis. (2) Undergo metamorphosis. (3) Tadpoles breathe through gills. (4) Eggs fertilized externally.",
      options: [
        { id: 'A', text: "(1) only" },
        { id: 'B', text: "(1) and (2) only" },
        { id: 'C', text: "(2) and (3) only" },
        { id: 'D', text: "(1), (3) and (4) only" }
      ],
      correctAnswerId: 'A',
      explanation: "Statement (1) is incorrect. Frogs must first undergo metamorphosis from a tadpole to an adult before they are sexually mature and can reproduce. Statements (2), (3), and (4) are all correct facts about the frog life cycle."
    },
    {
      id: 18,
      text: "When an iodine test is performed, which part of the potato plant will turn blue-black the most? (1) Tubers (2) Underground root (3) Flower (4) Stem",
      options: [
        { id: 'A', text: "(1) only" },
        { id: 'B', text: "(1) and (2) only" },
        { id: 'C', text: "(2) and (3) only" },
        { id: 'D', text: "(1), (2), (3) and (4)" }
      ],
      correctAnswerId: 'A',
      explanation: "The iodine test detects starch. Potato plants store most of their starch in their tubers, which are enlarged underground stems. Therefore, the tubers will show the strongest blue-black reaction."
    },
    {
      id: 19,
      text: "Which of the statements about cooling hot chocolate in a glass tumbler placed in a metal pot of cold water is/are incorrect?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.26.58.png",
      options: [
        { id: 'A', text: "(1), (2) and (3) only" },
        { id: 'B', text: "(1), (2) and (4) only" },
        { id: 'C', text: "(1), (2), (3) and (4)" },
        { id: 'D', text: "(2) and (3) only" }
      ],
      correctAnswerId: 'C',
      explanation: "All four statements are incorrect. (1) Glass is an insulator but still transfers heat slowly. (2) Steel is a better conductor than glass, so a steel pot cools faster. (3) Lid material has a minimal effect compared to conduction through the pot. (4) Heat transfers from the hot chocolate to the cold water, so the water's temperature will increase."
    },
    {
      id: 20,
      text: "A magnet (150g) is on a spring balance above another magnet (300g) on a scale. The south pole of the top magnet faces the north pole of the bottom one. What are the possible readings?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.33.30.png",
      options: [
        { id: 'A', text: "Spring balance: 150 g, Scale: 300 g" },
        { id: 'B', text: "Spring balance: 200 g, Scale: 250 g" },
        { id: 'C', text: "Spring balance: 100 g, Scale: 350 g" },
        { id: 'D', text: "Spring balance: 150 g, Scale: 450 g" }
      ],
      correctAnswerId: 'B',
      explanation: "Unlike poles attract. The attraction pulls the top magnet down, increasing the tension and the spring balance reading to >150g. It also pulls the bottom magnet up, reducing the force on the scale, making the reading <300g. Option B is the only one that fits this logic."
    },
    {
      id: 21,
      text: "The Indian star tortoise has a shell shaped like a Gömböc, which allows it to self-right when overturned. What kind of adaptation is this?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.55.32.png",
      options: [
        { id: 'A', text: "Behavioural" },
        { id: 'B', text: "Physiological" },
        { id: 'C', text: "Both structural and behavioural" },
        { id: 'D', text: "Structural" }
      ],
      correctAnswerId: 'D',
      explanation: "The adaptation is based on the physical shape and structure of the tortoise's shell. This is a structural adaptation, a physical feature of the organism that helps it survive."
    },
    {
      id: 22,
      text: "Insulin is a protein that gets broken down by the digestive system if ingested. If taken orally, where would the breakdown of insulin begin?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.57.18.png",
      options: [
        { id: 'A', text: "Mouth" },
        { id: 'B', text: "Stomach" },
        { id: 'C', text: "Small Intestine" },
        { id: 'D', text: "Large Intestine" }
      ],
      correctAnswerId: 'B',
      explanation: "The breakdown of proteins begins in the stomach, which contains strong acid (hydrochloric acid) and protein-digesting enzymes like pepsin. This harsh environment would start to break down the insulin protein."
    },
    {
      id: 23,
      text: "Four students hypothesize about the correct tyre pressure for an F1 car race in Dubai in July. Which student's statement is true?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.59.14.png",
      options: [
        { id: 'A', text: "Student K" },
        { id: 'B', text: "Student L" },
        { id: 'C', text: "Student M" },
        { id: 'D', text: "Student N" }
      ],
      correctAnswerId: 'C',
      explanation: "Student M is correct. In hot conditions and during a high-speed race, friction causes tyre temperature to increase significantly. This heats the air inside, increasing its pressure (kinetic energy). To avoid overinflation and a potential burst, the initial pressure should be set slightly below the standard."
    },
    {
      id: 24,
      text: "Which property/properties of light allow the optical fibre cable of Tan’s device to work? (1) Light travels in straight lines. (2) Light can be reflected. (3) Light can travel in curved lines. (4) Light is a form of energy.",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-11.01.18-745x1024.png",
      options: [
        { id: 'A', text: "Option 1 only" },
        { id: 'B', text: "Option 2 only" },
        { id: 'C', text: "Option 1, 2 and 4 only" },
        { id: 'D', text: "Option 1, 2, 3 and 4" }
      ],
      correctAnswerId: 'C',
      explanation: "Optical fibres work because light travels in straight lines (1) and undergoes total internal reflection (2) to navigate the cable. Light is also a form of energy (4) which is detected at the other end. Light does not travel in curved lines (3)."
    },
    {
      id: 25,
      text: "Based on the material properties table, which materials would be suitable for making the optic fibre cable and the cuvette respectively?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-11.02.55.png",
      options: [
        { id: 'A', text: "Q, P" },
        { id: 'B', text: "Q, R" },
        { id: 'C', text: "S, R" },
        { id: 'D', text: "S, P" }
      ],
      correctAnswerId: 'B',
      explanation: "The optic fibre cable needs to be flexible and opaque to keep light inside, so material Q is suitable. The cuvette needs to be transparent (low opacity) to let light pass through for measurement, so material R is suitable."
    }
  ],
  "2022": [
    {
      id: 1,
      text: "Four students made the following statements about sharks being wrongly classified as fish. Which of the students is correct?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-11.44.45.png",
      options: [
        { id: 'A', text: "Liam and Stefan" },
        { id: 'B', text: "Elizabeth only" },
        { id: 'C', text: "Josie, Stefan, and Elizabeth" },
        { id: 'D', text: "Josie and Stefan" }
      ],
      correctAnswerId: 'B',
      explanation: "The determining traits of a fish would be the fact that they live in water, breathe through gills, and have fins and scales. Even though they are carnivorous, and most do give birth to young alive, these are not determining traits of a fish. Only Elizabeth identifies the key characteristic of why a shark may be wrongly classified as a fish."
    },
    {
      id: 2,
      text: "John placed the following items into a container of water. Which of the following observations is correct?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-11.52.58.png",
      options: [
        { id: 'A', text: "A" },
        { id: 'B', text: "B" },
        { id: 'C', text: "C" },
        { id: 'D', text: "D" }
      ],
      correctAnswerId: 'D',
      explanation: "A metal nail is much denser than water, whereas a sheet of paper is less dense than water, so the metal nail will sink and the paper will float."
    },
    {
      id: 3,
      text: "The picture above shows a cicada shedding its exoskeleton. What is happening to the cicada?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-11.55.05-e1744825725915.png",
      options: [
        { id: 'A', text: "The cicada is going to develop from the larval stage to the pupal stage." },
        { id: 'B', text: "The cicada does this to escape from predators." },
        { id: 'C', text: "The exoskeleton is damaged." },
        { id: 'D', text: "The cicada has grown too large for its old exoskeleton and requires a larger one." }
      ],
      correctAnswerId: 'D',
      explanation: "The cicada has grown too large for its old exoskeleton and requires a larger one."
    },
    {
      id: 4,
      text: "Which of the following shows the correct sequence of the processes involving heat gain or heat loss, of the water cycle?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.09.10.png",
      options: [
        { id: 'A', text: "Precipitation -> Condensation -> Evaporation -> Precipitation" },
        { id: 'B', text: "Condensation -> Precipitation -> Evaporation -> Runoff" },
        { id: 'C', text: "Evaporation -> Condensation -> Precipitation -> Runoff" },
        { id: 'D', text: "Precipitation -> Evaporation -> Condensation -> Precipitation" }
      ],
      correctAnswerId: 'D',
      explanation: "Runoff is not a process in the water cycle which involves heat gain or heat loss, eliminating options B and C. The cycle involves evaporation (heat gain), condensation (heat loss), and precipitation. Option D shows a valid sequence of these processes."
    },
    {
      id: 5,
      text: "Living things have key characteristics which makes them different from non-living things. Which of the following scenarios does not demonstrate these key characteristics of living things?",
      options: [
        { id: 'A', text: "A man heating up an inflated balloon in a water bath." },
        { id: 'B', text: "A creeper plant growing upwards on the trunk of a tree." },
        { id: 'C', text: "A hyena consuming contaminated food and falling very sick, eventually dying." },
        { id: 'D', text: "A baby panda crawling towards some bamboo shoots." }
      ],
      correctAnswerId: 'A',
      explanation: "Living things grow, respond to stimuli, and need sustenance. Options B, C, and D all show these characteristics. The balloon expanding in option A is a physical reaction to heat, not a biological characteristic of a living thing."
    },
    {
      id: 6,
      text: "Based on the information given about the platypus, why do male platypuses have venomous spurs on their hind legs?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.11.14-300x201.png",
      options: [
        { id: 'A', text: "It allows the male platypus to dig its hind legs into the riverbed, so that it can swim faster, to reach the female platypus." },
        { id: 'B', text: "It attracts female platypuses to mate with the male platypus." },
        { id: 'C', text: "It allows the male platypus to tear apart its food." },
        { id: 'D', text: "It injures predators to protect itself and scares away other male platypuses which may be competing for their mate." }
      ],
      correctAnswerId: 'D',
      explanation: "The venomous spurs developed by male platypuses are used for defense against predators and for competing with other males for mates during the mating season."
    },
    {
      id: 7,
      text: "Based on the definitions, which of the following is/are examples of behavioural adaptation? 1. Chameleons moving slowly on branches 2. Grey whales migrating... 3. Giraffes using their long necks... 4. Plants leaning... towards sunlight",
      options: [
        { id: 'A', text: "Options 2 and 4" },
        { id: 'B', text: "Options 1, 3 and 4" },
        { id: 'C', text: "Options 1, 2 and 4" },
        { id: 'D', text: "All the above" }
      ],
      correctAnswerId: 'C',
      explanation: "A giraffe's long neck is a structural adaptation (a physical feature), not a behavioral one. The other options describe actions or responses to the environment (moving slowly, migrating, growing towards light), which are behavioral adaptations."
    },
    {
      id: 8,
      text: "The organism shown belongs to the Agaricaceae family. It has hyphae, gills, and a brownish-black powder (spores) for reproduction. Which of the groups in the flowchart should it be placed under?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.05.43.png",
      options: [
        { id: 'A', text: "Group A" },
        { id: 'B', text: "Group B" },
        { id: 'C', text: "Group C" },
        { id: 'D', text: "Group D" }
      ],
      correctAnswerId: 'A',
      explanation: "The organism described is a fungus. Following the flowchart: Does it take up oxygen? Yes. Does it have scales? No. Does it have spores for reproduction? Yes. This path leads to Group A."
    },
    {
      id: 9,
      text: "Rosa submerged a leaf into a beaker of hot water and observed air bubbles escaping from it. Why did this happen?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.12.31-300x263.png",
      options: [
        { id: 'A', text: "Air which was trapped in the leaf expanded and escaped as bubbles." },
        { id: 'B', text: "When water was heated, oxygen in the water escaped as bubbles." },
        { id: 'C', text: "Air was taken in by the leaf from the water, so that it can survive." },
        { id: 'D', text: "The leaf was breathing, taking in oxygen and giving out carbon dioxide as bubbles." }
      ],
      correctAnswerId: 'A',
      explanation: "Leaves have tiny openings called stomata for gas exchange. The air inside these spaces gets heated by the hot water, causing it to expand. This expanded air then escapes through the stomata, forming bubbles."
    },
    {
      id: 10,
      text: "Lily swabbed under her fingernails and grew the sample on a petri dish. The round patches that grew were identified as decomposers. What could they be?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.15.50-300x160.png",
      options: [
        { id: 'A', text: "Oil and dirt" },
        { id: 'B', text: "Bacteria and fungi" },
        { id: 'C', text: "Bacteria only" },
        { id: 'D', text: "Fungi only" }
      ],
      correctAnswerId: 'B',
      explanation: "Decomposers include both bacteria and fungi, both of which break down organic matter. When Lily scraped her nails, she collected microorganisms like bacteria and fungi, which then grew into visible colonies on the nutrient-rich agar."
    },
    {
      id: 11,
      text: "Based on the information about green buildings, how do materials like concrete, stone and earth help to cool houses?",
      options: [
        { id: 'A', text: "They are poor conductors of heat, speeding up the rate of heat gained in the house." },
        { id: 'B', text: "They are poor conductors of heat, slowing down the rate of heat gained in the house." },
        { id: 'C', text: "They are good conductors of heat, speeding up the rate of heat loss in the house." },
        { id: 'D', text: "They are good conductors of heat, slowing down the rate of heat loss in the house." }
      ],
      correctAnswerId: 'B',
      explanation: "These materials are poor conductors of heat (good insulators). This property means they slow down the rate at which heat from the outside sun is transferred into the cooler interior of the house, thus helping to keep it cool."
    },
    {
      id: 12,
      text: "Tim is consuming a bowl of noodles. Which of the following systems are functioning in order for him to do this? 1. Muscular 2. Skeletal 3. Digestive 4. Circulatory 5. Respiratory",
      options: [
        { id: 'A', text: "1, 3, and 4" },
        { id: 'B', text: "3 and 4 only" },
        { id: 'C', text: "1, 3, 4 and 5" },
        { id: 'D', text: "1, 2, 3, 4 and 5" }
      ],
      correctAnswerId: 'D',
      explanation: "All five systems are involved. Muscular and skeletal systems for movement (eating), digestive system for processing food, circulatory system for transporting nutrients, and the respiratory system is constantly functioning to provide oxygen for all these processes."
    },
    {
      id: 13,
      text: "Anna ran an experiment to see what nutrient pepsin breaks down. Based on the results, what can she conclude about pepsin?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.22.05.png",
      options: [
        { id: 'A', text: "Pepsin does not break down any of the nutrients in our food." },
        { id: 'B', text: "Pepsin breaks down all the nutrients partially." },
        { id: 'C', text: "Pepsin breaks down protein partially." },
        { id: 'D', text: "Pepsin breaks down carbohydrates and protein partially." }
      ],
      correctAnswerId: 'C',
      explanation: "The results show that after adding pepsin, the amounts of carbohydrates and fats remained 'Present', while the amount of protein changed to 'Partially Present'. This indicates that pepsin acts on protein, breaking it down partially."
    },
    {
      id: 14,
      text: "Why did Anna run the experiment on pepsin 3 times?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.22.05.png",
      options: [
        { id: 'A', text: "She was unsure if she ran her experiment correctly, so she repeated the experiment." },
        { id: 'B', text: "She wanted to perform the experiment in different days to find out if there was any effect." },
        { id: 'C', text: "She wanted to make sure that the results were reliable." },
        { id: 'D', text: "She had extra equipment available." }
      ],
      correctAnswerId: 'C',
      explanation: "In scientific experiments, repeating trials is crucial to ensure that the results are not due to chance or error. By getting consistent results across multiple trials, she can be more confident that her conclusion is reliable."
    },
    {
      id: 15,
      text: "Which of the following is/are not matter? 1. Sponge 2. Shadow 3. Sound energy 4. Light energy",
      options: [
        { id: 'A', text: "2 only" },
        { id: 'B', text: "3 and 4" },
        { id: 'C', text: "2, 3 and 4" },
        { id: 'D', text: "1 and 2" }
      ],
      correctAnswerId: 'C',
      explanation: "Matter is defined as anything that has mass and occupies space. A sponge has mass and occupies space. A shadow is the absence of light and has no mass. Sound and light are forms of energy, not matter."
    },
    {
      id: 16,
      text: "A dented table tennis ball returned to its original shape in hot water. Which diagram correctly represents the substance inside the ball?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.27.46.png",
      options: [
        { id: 'A', text: "R (Solid)" },
        { id: 'B', text: "S (Liquid)" },
        { id: 'C', text: "T (Gas)" },
        { id: 'D', text: "U (Solid)" }
      ],
      correctAnswerId: 'C',
      explanation: "A table tennis ball is filled with air (a gas). Diagram T correctly shows gas particles, which are far apart and move randomly. The heat caused the trapped air to expand and push the dent out."
    },
    {
      id: 17,
      text: "Keepers are used to store magnets. What is/are characteristics of keepers? 1. Non-magnetic 2. Good conductors of heat 3. Not brittle 4. Magnetic materials.",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.29.53.png",
      options: [
        { id: 'A', text: "2, 3 and 4" },
        { id: 'B', text: "2 and 4" },
        { id: 'C', text: "1 and 3" },
        { id: 'D', text: "1, 2 and 3" }
      ],
      correctAnswerId: 'A',
      explanation: "Keepers are made of soft magnetic materials like iron (4), which are not brittle (3) and are good conductors of heat (2). They complete the magnetic circuit, preventing the magnet from losing its magnetism over time. Since they are magnetic, statement 1 is incorrect."
    },
    {
      id: 18,
      text: "Based on the food web, which group contains only consumers?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.31.51.png",
      options: [
        { id: 'A', text: "Group W" },
        { id: 'B', text: "Group X" },
        { id: 'C', text: "Group Y" },
        { id: 'D', text: "Group Z" }
      ],
      correctAnswerId: 'D',
      explanation: "Producers, like plants, create their own food. Consumers obtain energy by eating other organisms. Group Z (Rabbit, Eagle, Lion) is the only group that consists entirely of consumers. The other groups all contain 'Plants', which is a producer."
    },
    {
      id: 19,
      text: "Three glasses of water W, X, and Y have the same temperature but different volumes. Which glass has the higher amount of heat energy?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.33.19.png",
      options: [
        { id: 'A', text: "Glass W" },
        { id: 'B', text: "Glass X" },
        { id: 'C', text: "Glass Y" },
        { id: 'D', text: "All 3 glasses of water have the same amount of heat energy." }
      ],
      correctAnswerId: 'C',
      explanation: "Temperature is the average kinetic energy of particles, while heat energy is the total kinetic energy. Even though the temperature is the same, Glass Y has the most water (greatest mass), meaning it contains more particles and therefore has the highest total heat energy."
    },
    {
      id: 20,
      text: "Which of the statements correctly explain the mechanism of goosebumps keeping us warm?",
      options: [
        { id: 'A', text: "When the tiny hairs on our skin stand, it allows heat to be absorbed from the surrounding air directly, and this keeps us warm." },
        { id: 'B', text: "When the tiny hairs on our skin stand, it traps air, which is a poor conductor of heat. Hence, reducing heat loss and keeping us warm." },
        { id: 'C', text: "When the tiny hairs on our skin stand, it traps air, which is a good conductor of heat. Hence, more heat is gained from the surrounding air which keeps us warm." },
        { id: 'D', text: "When the tiny hairs on our skin stand, it allows more of our body heat to reach the skin surface, keeping us warm." }
      ],
      correctAnswerId: 'B',
      explanation: "The erect hairs trap a layer of air close to the skin. Air is a poor conductor of heat (an insulator), so this trapped layer reduces the amount of heat lost from the body to the colder surroundings."
    },
    {
      id: 21,
      text: "Which of the following correctly demonstrates living things responding to changes?",
      options: [
        { id: 'A', text: "Polar bears feeding on seals." },
        { id: 'B', text: "Silkworms developing into silk moths." },
        { id: 'C', text: "A cat playing with a ball of yarn." },
        { id: 'D', text: "Birds flying away upon hearing a shot fired by hunters." }
      ],
      correctAnswerId: 'D',
      explanation: "Responding to changes (or stimuli) is a key characteristic of life. The loud shot is a stimulus, and the birds flying away is the response to escape potential danger. The other options describe feeding, growth, or play, which are not direct responses to an external change."
    },
    {
      id: 22,
      text: "Manatees in Florida face a 'lose-lose situation' due to pollution and cold winters. Which basic needs are lacking? 1. Air 2. Food 3. Water 4. Warmth",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.38.29.png",
      options: [
        { id: 'A', text: "2 and 4" },
        { id: 'B', text: "2 and 3" },
        { id: 'C', text: "1 and 4" },
        { id: 'D', text: "All the above" }
      ],
      correctAnswerId: 'A',
      explanation: "The text states that manatees can freeze to death if they stay (lack of warmth) or starve if they migrate to warmer waters where their food source (seagrass) has been depleted by pollution (lack of food). Therefore, food and warmth are the critical needs that are lacking."
    },
    {
      id: 23,
      text: "Why do some plants give off substances such as methyl jasmonate to deter insects like caterpillars?",
      options: [
        { id: 'A', text: "Caterpillars attract birds which will feed on plants and damage the plant." },
        { id: 'B', text: "The plant wants to get rid of caterpillars so that it has more space to grow." },
        { id: 'C', text: "The plant protects its leaves as leaves are crucial in making food for the plant." },
        { id: 'D', text: "Caterpillars feed on the fruits of the plant and reduces the amount of food left for the plant." }
      ],
      correctAnswerId: 'C',
      explanation: "Leaves are the primary site of photosynthesis, the process through which plants make their own food. By producing a substance that makes the leaves taste bad to caterpillars, the plant is protecting its 'food factory' to ensure its own survival and growth."
    },
    {
      id: 24,
      text: "The picture shows a root system commonly found in root vegetables like beetroot. Which type of root system is this?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.42.31-292x300.png",
      options: [
        { id: 'A', text: "Drainage" },
        { id: 'B', text: "Tube" },
        { id: 'C', text: "Tap" },
        { id: 'D', text: "Fibrous" }
      ],
      correctAnswerId: 'C',
      explanation: "This is a taproot system, which is characterized by a single, large, central root that grows deep into the soil. Smaller, lateral roots branch off from this main taproot. Beetroot is a classic example of a modified taproot used for food storage."
    },
    {
      id: 25,
      text: "Based on the information about the spotted salamander, what can be concluded?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.44.09.png",
      options: [
        { id: 'A', text: "It is a cold-blooded animal." },
        { id: 'B', text: "It is a reptile." },
        { id: 'C', text: "It only breathes through gills." },
        { id: 'D', text: "It is an invertebrate." }
      ],
      correctAnswerId: 'A',
      explanation: "The spotted salamander is an amphibian, as it lays eggs and its young live in water before developing into land-dwelling adults. A key characteristic of all amphibians is that they are cold-blooded (ectothermic)."
    }
  ]
};