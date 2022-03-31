import { getSolidDataset } from "@inrupt/solid-client";

export async function render() {
  const x = await getSolidDataset("https://id.inrupt.com/matthieu");
  document.getElementById('wrapper').innerHTML = `${x.type}`;
}
