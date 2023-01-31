export default function cx(...classes: Array<string | boolean>): string {
  return classes.filter(Boolean).join(" ");
}
