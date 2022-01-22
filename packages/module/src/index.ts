interface Profile {
  name: string;
}

export default function getSomethings(options: Profile) {
  console.log(options, options.name);
}
