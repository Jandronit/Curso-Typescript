/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ["Bash", "fernando"];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: "strider",
  hp: 100,
  habilidades: ["Bash", "counter", "Healing"],
};

personaje.puebloNatal = "Pueblo Paleta";
console.table(personaje);
