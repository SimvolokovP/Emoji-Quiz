import { exercises, IExercise } from "../../models/IExercise";

export class FakeApi {
  private static exercisesList: IExercise[] = exercises;
  private static usedExercises: IExercise[] = [];

  static fetchExercise = async (): Promise<IExercise | null> => {
    const availableExercises = this.exercisesList.filter(
      (exercise) => !this.usedExercises.includes(exercise)
    );

    if (availableExercises.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * availableExercises.length);
    const selectedExercise = availableExercises[randomIndex];

    this.usedExercises.push(selectedExercise);

    console.log(this.usedExercises);

    return selectedExercise;
  };
}
