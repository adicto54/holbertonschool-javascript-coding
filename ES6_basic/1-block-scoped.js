// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;  // This 'task' only exists inside this 'if' block
    const task2 = false; // This 'task2' only exists inside this 'if' block
  }

  return [task, task2];
}