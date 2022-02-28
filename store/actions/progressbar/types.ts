export const SET_PROGRESS = 'SET_PROGRESS';

export interface ProgressState {
  progress: number;
}

interface ActionSetProgress {
  type: typeof SET_PROGRESS;
  progress: number;
}

export type Action = ActionSetProgress;
