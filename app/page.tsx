let a = 1;
let b = 7;

export default function Home() {
  return <div>{(console.log(a + 3), console.log(b))}</div>;
}
