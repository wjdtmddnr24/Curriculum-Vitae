export function getAge() {
  const now = new Date();
  return now.getFullYear() - 1999 - (now.getMonth() >= 2 && now.getDate() >= 8 ? 0 : 1);
}
