import { model } from "@/utils/initializeGemini";

async function run() {
  const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
}

export default async function Home() {
  const data = await run();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{data}</div>
    </main>
  );
}
