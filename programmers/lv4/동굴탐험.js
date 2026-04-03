if (wait.has(cur)) {
  for (let unlocked of wait.get(cur)) {
    if (!visited[unlocked]) {
      visited[unlocked] = true;
      q.push(unlocked);
    }
  }
  wait.delete(cur);
}
