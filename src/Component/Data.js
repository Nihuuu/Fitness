const UpperBody = [
  { name: "Overhead Press", setsReps: "3 X 6" },
  { name: "Bent-Over BB Row", setsReps: "3 X 18" },
  { name: "Pull-Ups", setsReps: "3 X 5-10" },
  { name: "DB Bicep Curl", setsReps: "2 X 15-20" },
  { name: "Banded Tricep Pushdown", setsReps: "2 X 15-20" },
  { name: "Russian Twist", setsReps: "3 X 20ea" },
];

const LowerBody = [
  { name: "RDL", setsReps: "3 X 6" },
  { name: "Forward Lunge", setsReps: "3 X 18ea" },
  { name: "Bulgarian SS", setsReps: "3 X 18ea" },
  { name: "Nordic Hamstring Lowering", setsReps: "3 X15" },
  { name: "Barbell Hip Thrust", setsReps: "3 X 12" },
  { name: "Stability Ball Plank", setsReps: "3 X 20-30s" },
];
const BackBiceps  = [
  { name: "Barbell Deadlift", setsReps: "3 X 6" },
  { name: "Wide Grip Lat Pulldown", setsReps: "3 X 18ea" },
  { name: "Overhand Wide Grip Cable Row", setsReps: "3 X 18ea" },
  { name: "One Arm Bent Over Dumbbell Row", setsReps: "3 X 15" },
  { name: "Close Grip Pulldown", setsReps: "3 X 12" },
  { name: "Rope Lat Pullover", setsReps: "3 X 20-30s" },
];
const HamstringCalves = [
  { name: "Dumbbell Romanian Deadlift", setsReps: "3 X 15" },
  { name: "Laying Hamstring Curl", setsReps: "3 X 8ea" },
  { name: "Leg Press (Feet High - Hamstring Focus)", setsReps: "3 X 8ea" },
  { name: "Weighted Back Extension", setsReps: "3 X 15" },
  { name: "Seated Hamstring Curl", setsReps: "3 X 15" },
  { name: "Seated Calf Raise", setsReps: "3 X 20-30s" },
];
const FullBody = [
  { name: "Dumbbell Goblet Squat", setsReps: "3 X 11" },
  { name: "Arnold Press", setsReps: "3 X 8ea" },
  { name: "Dumbbell Side Lateral Raise", setsReps: "3 X 8ea" },
  { name: "Wide Grip Lat Pulldown", setsReps: "3 X 8" },
  { name: "Seated Cable Row", setsReps: "3 X 12" },
  { name: "Laying Hamstring Curl", setsReps: "3 X 20-30s" },
];
const GlutesCore = [
  { name: "Banded Barbell Hip Thrust", setsReps: "3 X 6" },
  { name: "Machine Adduction", setsReps: "3 X 8ea" },
  { name: "Cable Glute Kick Back", setsReps: "3 X 8ea" },
  { name: "Dumbbell Bulgarian Split Squat", setsReps: "3 X 15ea" },
  { name: "Bodyweight Walking Lunge", setsReps: "3 X 15ea" },
  { name: "Cable Ab Crunch", setsReps: "3 X 20-30s" },
];


const Velocities = [
  { name: "Absolute Strength", range: "0.15 - 0.35" },
  { name: "Accelerative Strength", range: "0.45 - 0.75" },
  { name: "Strength-Speed", range: "0.75 - 1.0" },
  { name: "Speed-Strength", range: "1.0 - 1.5" },
  { name: "Starting Strength", range: ">1.5" },
];


export const Data = {
  UpperBody,
  LowerBody,
  BackBiceps,
  FullBody,
  GlutesCore,
  HamstringCalves,
  Velocities,
};
